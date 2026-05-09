import React, { cloneElement, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { FloatingLayer, useDisclosure, useDismiss } from '@design-system/layers';
import { TooltipWrapper, TooltipBubble, TooltipArrow } from './Tooltip.styles';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'click' | 'both';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  trigger?: TooltipTrigger;
  /** Hover delay in ms before the tooltip appears */
  delay?: number;
  disabled?: boolean;
  children: React.ReactElement;
}

interface TooltipPosition {
  x: number;
  y: number;
  placement: TooltipPlacement;
  visible: boolean;
}

const GAP = 8;
const ARROW = 4; // half arrow size in px

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function computePosition(
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  preferred: TooltipPlacement,
): { x: number; y: number; placement: TooltipPlacement } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const offset = GAP + ARROW;

  const fits: Record<TooltipPlacement, () => { x: number; y: number } | null> = {
    top: () => {
      const y = triggerRect.top - tooltipRect.height - offset;
      if (y < 0) return null;
      return {
        x: clamp(
          triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
          4,
          vw - tooltipRect.width - 4,
        ),
        y,
      };
    },
    bottom: () => {
      const y = triggerRect.bottom + offset;
      if (y + tooltipRect.height > vh) return null;
      return {
        x: clamp(
          triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
          4,
          vw - tooltipRect.width - 4,
        ),
        y,
      };
    },
    left: () => {
      const x = triggerRect.left - tooltipRect.width - offset;
      if (x < 0) return null;
      return {
        x,
        y: clamp(
          triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
          4,
          vh - tooltipRect.height - 4,
        ),
      };
    },
    right: () => {
      const x = triggerRect.right + offset;
      if (x + tooltipRect.width > vw) return null;
      return {
        x,
        y: clamp(
          triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
          4,
          vh - tooltipRect.height - 4,
        ),
      };
    },
  };

  const opposite: Record<TooltipPlacement, TooltipPlacement> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  };

  // Try preferred placement first, then its opposite, then all others
  const order: TooltipPlacement[] = [preferred, opposite[preferred], 'top', 'bottom', 'left', 'right'];
  const seen = new Set<TooltipPlacement>();

  for (const p of order) {
    if (seen.has(p)) continue;
    seen.add(p);
    const pos = fits[p]();
    if (pos) return { ...pos, placement: p };
  }

  // Fallback — use preferred placement clamped to viewport
  const fallback = fits[preferred]!;
  const fb = fallback() ?? { x: triggerRect.left, y: triggerRect.bottom + offset };
  return { ...fb, placement: preferred };
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  trigger = 'hover',
  delay = 400,
  disabled = false,
  children,
}) => {
  const { isOpen, open: openTooltip, close: closeTooltip } = useDisclosure();
  const [position, setPosition] = useState<TooltipPosition>({
    x: -9999,
    y: -9999,
    placement,
    visible: false,
  });

  const wrapperRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const uid = useId();
  const tooltipId = `tooltip-${uid.replace(/:/g, '')}`;

  const clearHoverTimer = useCallback(() => {
    if (hoverTimer.current !== null) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  }, []);

  const open = useCallback(() => {
    openTooltip();
  }, [openTooltip]);

  const close = useCallback(() => {
    clearHoverTimer();
    closeTooltip();
    setPosition((p) => ({ ...p, visible: false }));
  }, [clearHoverTimer, closeTooltip]);

  // After the bubble is in the DOM, measure it and compute final position
  useLayoutEffect(() => {
    if (!isOpen || !wrapperRef.current || !bubbleRef.current) return;
    const triggerRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = bubbleRef.current.getBoundingClientRect();
    const { x, y, placement: actual } = computePosition(triggerRect, tooltipRect, placement);
    setPosition({ x, y, placement: actual, visible: true });
  }, [isOpen, placement, content]);

  // Close on scroll or resize
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => close();
    const handleResize = () => close();
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, close]);

  useDismiss({
    enabled: isOpen,
    onClose: close,
    closeOnEscape: true,
    closeOnOutsidePointerDown: trigger !== 'hover',
    refs: [wrapperRef as React.RefObject<Element | null>],
    outsideEventType: 'pointerdown',
  });

  const handleMouseEnter = useCallback(() => {
    if (disabled || trigger === 'click') return;
    clearHoverTimer();
    hoverTimer.current = setTimeout(open, delay);
  }, [disabled, trigger, delay, open, clearHoverTimer]);

  const handleMouseLeave = useCallback(() => {
    if (trigger === 'click') return;
    clearHoverTimer();
    close();
  }, [trigger, close, clearHoverTimer]);

  // Focus/blur for keyboard accessibility (no delay for focus)
  const handleFocus = useCallback(() => {
    if (disabled || trigger === 'click') return;
    clearHoverTimer();
    open();
  }, [disabled, trigger, open, clearHoverTimer]);

  const handleBlur = useCallback(() => {
    if (trigger === 'click') return;
    close();
  }, [trigger, close]);

  const handleClick = useCallback(() => {
    if (disabled || trigger === 'hover') return;
    if (isOpen) close();
    else open();
  }, [disabled, trigger, isOpen, open, close]);

  // Clone child only to attach aria-describedby — safe for any React element
  const triggerChild = isOpen
    ? cloneElement(children, { 'aria-describedby': tooltipId } as Record<string, unknown>)
    : children;

  return (
    <>
      <TooltipWrapper
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {triggerChild}
      </TooltipWrapper>

      {isOpen && (
        <FloatingLayer>
          <TooltipBubble
            ref={bubbleRef}
            id={tooltipId}
            role="tooltip"
            data-placement={position.placement}
            style={{
              position: 'fixed',
              left: position.x,
              top: position.y,
              visibility: position.visible ? 'visible' : 'hidden',
            }}
          >
            {content}
            <TooltipArrow data-placement={position.placement} />
          </TooltipBubble>
        </FloatingLayer>
      )}
    </>
  );
};
Tooltip.displayName = 'Tooltip';
