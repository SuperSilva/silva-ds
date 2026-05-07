/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig(({ command }) => ({
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
      },
    }),
    react(),
    ...(command === 'build'
      ? [
          dts({
            include: ['src'],
            exclude: ['src/**/*.test.{ts,tsx}', 'src/tests/test-setup.ts', 'src/**/*.stories.{ts,tsx}'],
            // Cross-package source alias causes a false rootDir error in dts;
            // the build and CSS extraction are correct regardless.
            skipDiagnostics: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@design-system/theme': resolve(__dirname, '../theme/src/index.ts'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    sourcemap: true,
    cssCodeSplit: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/test-setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/tests/test-setup.ts', 'src/**/*.stories.{ts,tsx}'],
    },
  },
}));
