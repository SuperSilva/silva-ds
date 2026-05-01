import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync, existsSync } from 'node:fs';

function packageAliases() {
  const packagesDir = resolve(__dirname, '../../../packages');
  return Object.fromEntries(
    readdirSync(packagesDir)
      .filter((pkg) => existsSync(resolve(packagesDir, pkg, 'src/index.ts')))
      .map((pkg) => [
        `@design-system/${pkg}`,
        resolve(packagesDir, pkg, 'src/index.ts'),
      ]),
  );
}

const config: StorybookConfig = {
  stories: ['../../../packages/*/src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (viteConfig) => {
    const { default: wyw } = await import('@wyw-in-js/vite');
    return mergeConfig(viteConfig, {
      plugins: [
        wyw({
          include: ['**/*.{ts,tsx}'],
          babelOptions: {
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        }),
      ],
      resolve: {
        alias: packageAliases(),
      },
    });
  },
};

export default config;
