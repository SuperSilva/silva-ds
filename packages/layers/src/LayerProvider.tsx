import React, { createContext, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

interface LayerContextValue {
  container: HTMLDivElement | null;
  zIndex: number;
}

const LAYER_Z_STEP = 50;
const ROOT_Z_INDEX = 1000;

// Sentinel default: first real LayerProvider will compute ROOT_Z_INDEX
const LayerContext = createContext<LayerContextValue>({
  container: null,
  zIndex: ROOT_Z_INDEX - LAYER_Z_STEP,
});

export interface LayerProviderProps {
  children: React.ReactNode;
  /** Explicit z-index. Auto-increments from the nearest parent LayerProvider if omitted. */
  zIndex?: number;
}

export function LayerProvider({ children, zIndex: propZIndex }: LayerProviderProps) {
  const parent = useContext(LayerContext);
  const zIndex = propZIndex ?? parent.zIndex + LAYER_Z_STEP;
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const value = useMemo<LayerContextValue>(() => ({ container, zIndex }), [container, zIndex]);

  return (
    <LayerContext.Provider value={value}>
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
  return useContext(LayerContext).container;
}

/** Returns the z-index of the nearest LayerProvider. Useful for components that need to stack above it. */
export function useLayerZIndex(): number {
  return useContext(LayerContext).zIndex;
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
