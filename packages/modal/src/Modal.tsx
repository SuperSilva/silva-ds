import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import { cx } from '@linaria/core';
import { FloatingLayer } from '@design-system/layers';
import { ModalOverlayRoot, ModalRoot, modalSizes } from './Modal.styles';

export type ModalSize = 'sm' | 'md' | 'lg';

export type ModalOverlayProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(function ModalOverlay(props, ref) {
  return (
    <FloatingLayer>
      <ModalOverlayRoot ref={ref} {...props} />
    </FloatingLayer>
  );
});

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  size?: ModalSize;
  initialFocusRef?: React.RefObject<HTMLElement>;
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { children, onClose, size = 'md', className, initialFocusRef, ...rest },
  ref,
) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const mergedRef = useCallback(
    (el: HTMLDivElement | null) => {
      (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    },
    [ref],
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

  // Escape to close
  useEffect(() => {
    if (!onClose) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose!();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      const focusable = getFocusableElements(dialog!);
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
    }

    dialog.addEventListener('keydown', handleKeyDown);
    return () => dialog.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <FloatingLayer>
      <ModalRoot
        ref={mergedRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={cx(modalSizes[size], className)}
        {...rest}
      >
        {children}
      </ModalRoot>
    </FloatingLayer>
  );
});
