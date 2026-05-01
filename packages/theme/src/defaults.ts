export type Theme = Record<string, string>;

export const defaultTheme: Theme = {
  // — Colors: Primary —
  '--ds-color-primary':        '#0070f3',
  '--ds-color-primary-hover':  '#005cc5',
  '--ds-color-primary-active': '#004aab',
  '--ds-color-primary-fg':     '#ffffff',

  // — Colors: Secondary —
  '--ds-color-secondary':        '#f4f4f5',
  '--ds-color-secondary-hover':  '#e4e4e7',
  '--ds-color-secondary-active': '#d4d4d8',
  '--ds-color-secondary-fg':     '#18181b',

  // — Colors: Destructive —
  '--ds-color-destructive':        '#ef4444',
  '--ds-color-destructive-hover':  '#dc2626',
  '--ds-color-destructive-active': '#b91c1c',
  '--ds-color-destructive-fg':     '#ffffff',

  // — Colors: Neutral (ghost) —
  '--ds-color-neutral-fg':        '#18181b',
  '--ds-color-neutral-bg-hover':  '#f4f4f5',
  '--ds-color-neutral-bg-active': '#e4e4e7',

  // — Colors: Accent (outline) —
  '--ds-color-accent':            '#0070f3',
  '--ds-color-accent-bg-hover':   '#eff6ff',
  '--ds-color-accent-bg-active':  '#dbeafe',

  // — Focus ring —
  '--ds-color-focus-ring': '#0070f3',

  // — Border radius —
  '--ds-radius-sm':   '4px',
  '--ds-radius-md':   '6px',
  '--ds-radius-lg':   '8px',
  '--ds-radius-full': '9999px',

  // — Typography —
  '--ds-font-size-sm':     '13px',
  '--ds-font-size-md':     '14px',
  '--ds-font-size-lg':     '16px',
  '--ds-font-weight-medium': '500',

  // — Spacing (4px base grid) —
  '--ds-space-1': '4px',
  '--ds-space-2': '8px',
  '--ds-space-3': '12px',
  '--ds-space-4': '16px',
  '--ds-space-5': '20px',
  '--ds-space-6': '24px',

  // — Motion —
  '--ds-transition-colors':
    'background-color 150ms ease, color 150ms ease, border-color 150ms ease, opacity 150ms ease',

  // — Component: Button —
  '--ds-button-height-sm': '32px',
  '--ds-button-height-md': '40px',
  '--ds-button-height-lg': '48px',
};
