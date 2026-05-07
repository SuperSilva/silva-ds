import React, { createContext, useContext } from 'react';
import type { IconRegistry } from './types';
import { defaultIcons } from './icons';

const SPRITE_PREFIX = 'ds-icon';

interface IconContextValue {
  prefix: string;
}

export const IconContext = createContext<IconContextValue | null>(null);

export function useIconContext(): IconContextValue | null {
  return useContext(IconContext);
}

export interface IconProviderProps {
  children: React.ReactNode;
  /** Merge additional icons into the registry alongside the built-in set. */
  icons?: IconRegistry;
  /** ID prefix for sprite symbols. Defaults to "ds-icon". Override when mounting
   *  multiple providers in the same document to avoid ID collisions. */
  prefix?: string;
}

export function IconProvider({ children, icons: extraIcons, prefix = SPRITE_PREFIX }: IconProviderProps) {
  const registry: IconRegistry = extraIcons ? { ...defaultIcons, ...extraIcons } : defaultIcons;

  return (
    <IconContext.Provider value={{ prefix }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: 'none', position: 'absolute' }}
      >
        <defs>
          {Object.entries(registry).map(([name, { viewBox, element }]) => (
            <symbol key={name} id={`${prefix}-${name}`} viewBox={viewBox}>
              {element}
            </symbol>
          ))}
        </defs>
      </svg>
      {children}
    </IconContext.Provider>
  );
}
