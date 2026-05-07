import React, { forwardRef } from 'react';
import { useIconContext } from './IconContext';
import { defaultIcons } from './icons';
import type { DefaultIconName } from './icons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const SIZES: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export interface IconProps {
  /** Name of the icon to render. All built-in names are type-checked; custom icon
   *  names added via <IconProvider icons={...}> are also accepted as strings. */
  name: DefaultIconName | (string & {});
  size?: IconSize | number;
  className?: string;
  style?: React.CSSProperties;
  /** Provide a label to make the icon meaningful to screen readers. */
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, size = 'md', className, style, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden },
  ref,
) {
  const ctx = useIconContext();
  const resolvedSize = typeof size === 'number' ? size : SIZES[size];
  const isHidden = ariaHidden ?? (ariaLabel ? undefined : true);

  const svgProps = {
    ref,
    width: resolvedSize,
    height: resolvedSize,
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    style,
    'aria-label': ariaLabel,
    'aria-hidden': isHidden,
    focusable: 'false' as const,
  };

  if (ctx) {
    // Sprite mode: reference the symbol defined by <IconProvider>.
    // The SVG path data lives once in the DOM; every <Icon> is a lightweight <use>.
    return (
      <svg {...svgProps}>
        <use href={`#${ctx.prefix}-${name}`} />
      </svg>
    );
  }

  // Inline fallback when no <IconProvider> is in the tree.
  const def = defaultIcons[name as DefaultIconName];
  if (!def) return null;

  return (
    <svg {...svgProps} viewBox={def.viewBox}>
      {def.element}
    </svg>
  );
});

Icon.displayName = 'Icon';
