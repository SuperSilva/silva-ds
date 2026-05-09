/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'build'
      ? [
          dts({
            include: ['src'],
            exclude: ['src/**/*.test.{ts,tsx}', 'src/tests/test-setup.ts', 'src/**/*.stories.{ts,tsx}'],
            skipDiagnostics: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: [{ find: /^@design-system\/(.+)$/, replacement: `${resolve(__dirname, '..')}/$1/src/index.ts` }],
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
