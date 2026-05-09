import { useEffect, useRef } from 'react';
import type React from 'react';

export interface UseDismissOptions {
  /** Whether the dismiss listeners should be active. */
  enabled: boolean;
  onClose: () => void;
  /** Elements whose interior should NOT trigger outside-click. */
  refs?: Array<React.RefObject<Element | null>>;
  /** Close when Escape is pressed. Default: true. */
  closeOnEscape?: boolean;
  /** Close on pointer-down outside the tracked refs. Default: false. */
  closeOnOutsidePointerDown?: boolean;
  /** Event type used for outside detection. Default: 'mousedown'. */
  outsideEventType?: 'mousedown' | 'pointerdown';
}

export function useDismiss({
  enabled,
  onClose,
  refs = [],
  closeOnEscape = true,
  closeOnOutsidePointerDown = false,
  outsideEventType = 'mousedown',
}: UseDismissOptions) {
  // Use refs so listeners never go stale without being re-registered
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const refsRef = useRef(refs);
  refsRef.current = refs;

  useEffect(() => {
    if (!enabled || !closeOnEscape) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onCloseRef.current();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [enabled, closeOnEscape]);

  useEffect(() => {
    if (!enabled || !closeOnOutsidePointerDown) return;
    const handler = (e: MouseEvent | PointerEvent) => {
      const target = e.target as Node;
      const inside = refsRef.current.some((r) => r.current?.contains(target));
      if (!inside) onCloseRef.current();
    };
    document.addEventListener(outsideEventType, handler as EventListener);
    return () => document.removeEventListener(outsideEventType, handler as EventListener);
  }, [enabled, closeOnOutsidePointerDown, outsideEventType]);
}
