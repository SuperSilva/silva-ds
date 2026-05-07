import React from 'react';
import type { IconDefinition } from './types';

// ─── Navigation & UI ──────────────────────────────────────────────────────────

export const home: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
};

export const menu: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
};

export const search: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
};

export const bell: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </>
  ),
};

export const filter: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
};

export const grid: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
};

export const share: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </>
  ),
};

export const eye: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

// ─── Chevrons & Arrows ────────────────────────────────────────────────────────

export const chevronRight: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <polyline points="9 18 15 12 9 6" />,
};

export const chevronLeft: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <polyline points="15 18 9 12 15 6" />,
};

export const chevronDown: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <polyline points="6 9 12 15 18 9" />,
};

export const chevronUp: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <polyline points="18 15 12 9 6 15" />,
};

export const arrowLeft: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </>
  ),
};

export const arrowRight: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
};

// ─── Actions ─────────────────────────────────────────────────────────────────

export const plus: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
};

export const minus: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <line x1="5" y1="12" x2="19" y2="12" />,
};

export const check: IconDefinition = {
  viewBox: '0 0 24 24',
  element: <polyline points="20 6 9 17 4 12" />,
};

export const x: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
};

export const trash: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </>
  ),
};

// ─── E-commerce ───────────────────────────────────────────────────────────────

export const cart: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      <circle cx="9" cy="21" r="1" fill="currentColor" />
      <circle cx="20" cy="21" r="1" fill="currentColor" />
    </>
  ),
};

export const bag: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
};

export const heart: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  ),
};

export const star: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
};

export const tag: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </>
  ),
};

export const percent: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </>
  ),
};

export const gift: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </>
  ),
};

export const user: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
};

export const creditCard: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </>
  ),
};

export const truck: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>
  ),
};

export const packageIcon: IconDefinition = {
  viewBox: '0 0 24 24',
  element: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </>
  ),
};

// ─── Registry ─────────────────────────────────────────────────────────────────

export const defaultIcons = {
  // Navigation & UI
  home,
  menu,
  search,
  bell,
  filter,
  grid,
  share,
  eye,
  // Chevrons & Arrows
  'chevron-right': chevronRight,
  'chevron-left': chevronLeft,
  'chevron-down': chevronDown,
  'chevron-up': chevronUp,
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  // Actions
  plus,
  minus,
  check,
  x,
  trash,
  // E-commerce
  cart,
  bag,
  heart,
  star,
  tag,
  percent,
  gift,
  user,
  'credit-card': creditCard,
  truck,
  package: packageIcon,
} as const satisfies Record<string, IconDefinition>;

export type DefaultIconName = keyof typeof defaultIcons;
