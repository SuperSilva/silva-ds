import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../ThemeProvider';
import { defaultTheme } from '../defaults';

function getInjectedStyle() {
  return document.querySelector('style')?.textContent ?? '';
}

describe('ThemeProvider', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <span>hello</span>
      </ThemeProvider>,
    );
    expect(getByText('hello')).toBeInTheDocument();
  });

  it('injects all default CSS variables into :root', () => {
    render(
      <ThemeProvider>
        <div />
      </ThemeProvider>,
    );
    const css = getInjectedStyle();
    expect(css).toContain(':root');
    Object.keys(defaultTheme).forEach((key) => {
      expect(css).toContain(key);
    });
  });

  it('overrides specific tokens when a custom theme is provided', () => {
    const custom = { '--ds-color-primary': '#ff0000' };
    render(
      <ThemeProvider theme={custom}>
        <div />
      </ThemeProvider>,
    );
    expect(getInjectedStyle()).toContain('--ds-color-primary: #ff0000');
  });

  it('keeps non-overridden tokens at their defaults', () => {
    const custom = { '--ds-color-primary': '#ff0000' };
    render(
      <ThemeProvider theme={custom}>
        <div />
      </ThemeProvider>,
    );
    expect(getInjectedStyle()).toContain(`--ds-color-destructive: ${defaultTheme['--ds-color-destructive']}`);
  });
});
