import { useCallback, useRef, useState } from 'react';

export interface UseDisclosureOptions {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface UseDisclosureReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setOpen: (next: boolean) => void;
}

export function useDisclosure({
  open: controlled,
  defaultOpen = false,
  onOpenChange,
}: UseDisclosureOptions = {}): UseDisclosureReturn {
  const isControlled = controlled !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? controlled! : internalOpen;

  // Stable ref so callbacks never go stale
  const callbackRef = useRef(onOpenChange);
  callbackRef.current = onOpenChange;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      callbackRef.current?.(next);
    },
    [isControlled],
  );

  const open = useCallback(() => setOpen(true), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!isOpen), [setOpen, isOpen]);

  return { isOpen, open, close, toggle, setOpen };
}
