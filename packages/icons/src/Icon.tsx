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

type OwnedSVGProps =
  | 'width'
  | 'height'
  | 'viewBox'
  | 'fill'
  | 'stroke'
  | 'strokeWidth'
  | 'strokeLinecap'
  | 'strokeLinejoin'
  | 'focusable';

export interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, OwnedSVGProps | 'aria-hidden'> {
  /** Name of the icon to render. All built-in names are type-checked; custom icon
   *  names added via <IconProvider icons={...}> are also accepted as strings. */
  name: DefaultIconName | (string & {});
  size?: IconSize | number;
  /** Provide a label to make the icon meaningful to screen readers. */
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, size = 'md', className, style, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...rest },
  ref,
) {
  const ctx = useIconContext();
  const resolvedSize = typeof size === 'number' ? size : SIZES[size];
  const isHidden = ariaHidden ?? (ariaLabel ? undefined : true);

  const svgProps = {
    ref,
    ...rest,
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
    return (
      <svg {...svgProps}>
        <use href={`#${ctx.prefix}-${name}`} />
      </svg>
    );
  }

  const def = defaultIcons[name as DefaultIconName];
  if (!def) return null;

  return (
    <svg {...svgProps} viewBox={def.viewBox}>
      {def.element}
    </svg>
  );
});

Icon.displayName = 'Icon';
