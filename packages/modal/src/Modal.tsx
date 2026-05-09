import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cx } from '@linaria/core';
import { FloatingLayer, useDisclosure, useDismiss, useScrollLock } from '@design-system/layers';
import { ModalOverlayRoot, ModalRoot, modalSizes } from './Modal.styles';

export type ModalSize = 'sm' | 'md' | 'lg';

// ─── Context ───────────────────────────────────────────────────────────────────

interface ModalContextValue {
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used inside a Modal');
  return ctx;
}

// ─── Standalone overlay (kept for backward compat) ─────────────────────────────

export type ModalOverlayProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(function ModalOverlay(props, ref) {
  return (
    <FloatingLayer>
      <ModalOverlayRoot ref={ref} {...props} />
    </FloatingLayer>
  );
});

// ─── Focus helpers ──────────────────────────────────────────────────────────────

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

// ─── ModalContent (internal) ───────────────────────────────────────────────────

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  size: ModalSize;
  overlay: boolean;
  closeOnOverlayClick: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  forwardedRef?: React.Ref<HTMLDivElement>;
  // `style` is already in HTMLAttributes; listed explicitly for clarity in destructuring
}

function ModalContent({
  children,
  onClose,
  size,
  overlay,
  closeOnOverlayClick,
  initialFocusRef,
  forwardedRef,
  className,
  style,
  ...rest
}: ModalContentProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const mergedRef = useCallback(
    (el: HTMLDivElement | null) => {
      (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof forwardedRef === 'function') forwardedRef(el);
      else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    },
    [forwardedRef],
  );

  // Restore focus to previously focused element on unmount
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    return () => previouslyFocused?.focus();
  }, []);

  // Auto-focus initial element or the dialog itself on open
  useEffect(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      dialogRef.current?.focus();
    }
  }, [initialFocusRef]);

  useDismiss({ enabled: true, onClose, closeOnEscape: true });

  // Focus trap
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusableElements(dialog);
      if (!focusable.length) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first || document.activeElement === dialog) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || document.activeElement === dialog) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    dialog.addEventListener('keydown', handler);
    return () => dialog.removeEventListener('keydown', handler);
  }, []);

  return (
    <FloatingLayer>
      {overlay && (
        <ModalOverlayRoot
          onClick={closeOnOverlayClick ? onClose : undefined}
          style={{ pointerEvents: 'auto' }}
        />
      )}
      <ModalRoot
        ref={mergedRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{ pointerEvents: 'auto', ...style }}
        className={cx(modalSizes[size], className)}
        {...rest}
      >
        {children}
      </ModalRoot>
    </FloatingLayer>
  );
}

// ─── Modal ─────────────────────────────────────────────────────────────────────

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controlled open state. */
  open?: boolean;
  /** Initial open state when uncontrolled. Defaults to `true` when no trigger is provided (backward compat), `false` otherwise. */
  defaultOpen?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** @deprecated Use `onOpenChange` instead. Called when the modal closes. */
  onClose?: () => void;
  /** Optional trigger element. When provided the modal manages its own visibility. */
  trigger?: React.ReactElement;
  /** Render a backdrop overlay. Default: `false` when no trigger, `true` when trigger provided. */
  overlay?: boolean;
  /** Close when the overlay is clicked. Default: `true`. */
  closeOnOverlayClick?: boolean;
  size?: ModalSize;
  initialFocusRef?: React.RefObject<HTMLElement>;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    children,
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
    onClose,
    trigger,
    overlay,
    closeOnOverlayClick = true,
    size = 'md',
    initialFocusRef,
    ...rest
  },
  ref,
) {
  const hasTrigger = trigger !== undefined;

  const effectiveDefaultOpen = defaultOpen ?? (hasTrigger ? false : true);
  const effectiveOverlay = overlay ?? hasTrigger;

  const handleOpenChange = useCallback(
    (next: boolean) => {
      onOpenChange?.(next);
      if (!next) onClose?.();
    },
    [onOpenChange, onClose],
  );

  const { isOpen, open, close } = useDisclosure({
    open: controlledOpen,
    defaultOpen: effectiveDefaultOpen,
    onOpenChange: handleOpenChange,
  });

  useScrollLock(isOpen);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const clonedTrigger = hasTrigger
    ? React.cloneElement(trigger!, {
        ref: setTriggerEl,
        onClick: (e: React.MouseEvent) => {
          trigger!.props.onClick?.(e);
          open();
        },
      } as React.HTMLAttributes<HTMLElement> & { ref: typeof setTriggerEl })
    : null;

  return (
    <ModalContext.Provider value={{ close }}>
      {clonedTrigger}
      {isOpen && (
        <ModalContent
          onClose={close}
          size={size}
          overlay={effectiveOverlay}
          closeOnOverlayClick={closeOnOverlayClick}
          initialFocusRef={initialFocusRef}
          forwardedRef={ref}
          {...rest}
        >
          {children}
        </ModalContent>
      )}
    </ModalContext.Provider>
  );
});
