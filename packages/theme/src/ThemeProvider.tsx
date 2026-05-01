import React, { useMemo } from 'react';
import { defaultTheme, type Theme } from './defaults';

export interface ThemeProviderProps {
  /** Override any subset of the default theme tokens. */
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

function buildCss(theme: Theme): string {
  const vars = Object.entries(theme)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n');
  return `:root {\n${vars}\n}`;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const css = useMemo(() => {
    const merged: Theme = { ...defaultTheme };
    for (const [key, value] of Object.entries(theme ?? {})) {
      if (value !== undefined) merged[key] = value;
    }
    return buildCss(merged);
  }, [theme]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </>
  );
};
