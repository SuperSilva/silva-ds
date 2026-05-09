import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@design-system/theme';
import { LayerProvider } from '@design-system/layers';
import { IconProvider } from '@design-system/icons';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LayerProvider>
          <IconProvider>
            <Story />
          </IconProvider>
        </LayerProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      config: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      },
    },
  },
};

export default preview;
