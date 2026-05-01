export const tokens = {
  color: {
    primary:        'var(--ds-color-primary)',
    primaryHover:   'var(--ds-color-primary-hover)',
    primaryActive:  'var(--ds-color-primary-active)',
    primaryFg:      'var(--ds-color-primary-fg)',

    secondary:        'var(--ds-color-secondary)',
    secondaryHover:   'var(--ds-color-secondary-hover)',
    secondaryActive:  'var(--ds-color-secondary-active)',
    secondaryFg:      'var(--ds-color-secondary-fg)',

    destructive:        'var(--ds-color-destructive)',
    destructiveHover:   'var(--ds-color-destructive-hover)',
    destructiveActive:  'var(--ds-color-destructive-active)',
    destructiveFg:      'var(--ds-color-destructive-fg)',

    neutralFg:        'var(--ds-color-neutral-fg)',
    neutralBgHover:   'var(--ds-color-neutral-bg-hover)',
    neutralBgActive:  'var(--ds-color-neutral-bg-active)',

    accent:          'var(--ds-color-accent)',
    accentBgHover:   'var(--ds-color-accent-bg-hover)',
    accentBgActive:  'var(--ds-color-accent-bg-active)',

    focusRing: 'var(--ds-color-focus-ring)',
  },

  radius: {
    sm:   'var(--ds-radius-sm)',
    md:   'var(--ds-radius-md)',
    lg:   'var(--ds-radius-lg)',
    full: 'var(--ds-radius-full)',
  },

  fontSize: {
    sm: 'var(--ds-font-size-sm)',
    md: 'var(--ds-font-size-md)',
    lg: 'var(--ds-font-size-lg)',
  },

  fontWeight: {
    medium: 'var(--ds-font-weight-medium)',
  },

  space: {
    1: 'var(--ds-space-1)',
    2: 'var(--ds-space-2)',
    3: 'var(--ds-space-3)',
    4: 'var(--ds-space-4)',
    5: 'var(--ds-space-5)',
    6: 'var(--ds-space-6)',
  },

  transition: {
    colors: 'var(--ds-transition-colors)',
  },

  button: {
    heightSm: 'var(--ds-button-height-sm)',
    heightMd: 'var(--ds-button-height-md)',
    heightLg: 'var(--ds-button-height-lg)',
  },
} as const;
