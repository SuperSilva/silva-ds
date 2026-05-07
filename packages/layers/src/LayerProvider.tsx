import React, { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

const LayerContext = createContext<HTMLDivElement | null>(null);

export interface LayerProviderProps {
  children: React.ReactNode;
  zIndex?: number;
}

export function LayerProvider({ children, zIndex = 1000 }: LayerProviderProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <LayerContext.Provider value={container}>
      {children}
      <div
        ref={setContainer}
        data-ds-layers=""
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex }}
      />
    </LayerContext.Provider>
  );
}

export function useLayerContainer(): HTMLDivElement | null {
  return useContext(LayerContext);
}

export interface FloatingLayerProps {
  children: React.ReactNode;
}

export function FloatingLayer({ children }: FloatingLayerProps) {
  const container = useLayerContainer();
  const target = container ?? (typeof document !== 'undefined' ? document.body : null);
  if (!target) return null;
  return createPortal(children, target);
}
