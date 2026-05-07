import type React from 'react';

export interface IconDefinition {
  viewBox: string;
  element: React.ReactNode;
}

export type IconRegistry = Record<string, IconDefinition>;
