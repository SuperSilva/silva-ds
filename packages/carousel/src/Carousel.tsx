import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@design-system/icons';
import { CarouselRoot, CarouselTrack, CarouselItem, CarouselNavButton } from './Carousel.styles';

export type CarouselBreakpoint = 'xs' | 'sm' | 'md' | 'xl';

export interface CarouselBreakpointConfig {
  /** Number of fully visible items. */
  items: number;
  /** Fraction of the next item that peeks (0–1). Signals more content. */
  scrollQueue?: number;
}

export type CarouselConfig = Partial<Record<CarouselBreakpoint, CarouselBreakpointConfig>>;

export interface CarouselProps {
  children: React.ReactNode;
  /** Items per breakpoint and peek fraction. Defaults to 1 item on all breakpoints. */
  config?: CarouselConfig;
  /** Bleeds the carousel track to the viewport edges (useful inside padded page containers). */
  bleed?: boolean;
  /** Accessible label for the carousel region. */
  'aria-label'?: string;
  className?: string;
}

const BP_ORDER: CarouselBreakpoint[] = ['xs', 'sm', 'md', 'xl'];

const BP_MIN_WIDTHS: Record<CarouselBreakpoint, string> = {
  xs: '0px',
  sm: '640px',
  md: '1024px',
  xl: '1280px',
};

function buildResponsiveStyle(id: string, config: CarouselConfig): string {
  return BP_ORDER.filter((bp) => config[bp] !== undefined)
    .map((bp) => {
      const { items, scrollQueue = 0 } = config[bp]!;
      const vars = `--_items:${items};--_queue:${scrollQueue};--_divisor:${items + scrollQueue};`;
      return bp === 'xs' ? `#${id}{${vars}}` : `@media(min-width:${BP_MIN_WIDTHS[bp]}){#${id}{${vars}}}`;
    })
    .join('');
}

export function Carousel({
  children,
  config = { xs: { items: 1 } },
  bleed = false,
  'aria-label': ariaLabel = 'Carousel',
  className,
}: CarouselProps) {
  const rawId = useId();
  const id = `carousel-${rawId.replace(/:/g, '')}`;

  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const childArray = React.Children.toArray(children);
  const childCount = childArray.length;

  const getSnapPositions = useCallback((): number[] => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return [];
    const n = track.children.length;
    return Array.from(track.children).map((child, i) => {
      const el = child as HTMLElement;
      if (i === 0) return 0;
      if (i === n - 1) return Math.max(0, track.scrollWidth - track.clientWidth);
      return Math.max(0, el.offsetLeft + el.offsetWidth / 2 - track.clientWidth / 2);
    });
  }, []);

  const getClosestIndex = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const positions = getSnapPositions();
    let minDist = Infinity;
    let idx = 0;
    positions.forEach((pos, i) => {
      const dist = Math.abs(track.scrollLeft - pos);
      if (dist < minDist) {
        minDist = dist;
        idx = i;
      }
    });
    return idx;
  }, [getSnapPositions]);

  const updateIndex = useCallback(() => setCurrentIndex(getClosestIndex()), [getClosestIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateIndex();
    track.addEventListener('scroll', updateIndex, { passive: true });
    const ro = new ResizeObserver(updateIndex);
    ro.observe(track);
    return () => {
      track.removeEventListener('scroll', updateIndex);
      ro.disconnect();
    };
  }, [updateIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const positions = getSnapPositions();
      const clamped = Math.max(0, Math.min(index, positions.length - 1));
      const pos = positions[clamped];
      if (pos !== undefined) track.scrollTo({ left: pos, behavior: 'smooth' });
    },
    [getSnapPositions],
  );

  const scrollPrev = useCallback(() => scrollToIndex(currentIndex - 1), [currentIndex, scrollToIndex]);
  const scrollNext = useCallback(() => scrollToIndex(currentIndex + 1), [currentIndex, scrollToIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  const styleContent = buildResponsiveStyle(id, config);

  return (
    <CarouselRoot
      id={id}
      data-bleed={bleed ? '' : undefined}
      role="region"
      aria-label={ariaLabel}
      className={className}
    >
      {styleContent && <style>{styleContent}</style>}
      <CarouselTrack ref={trackRef} tabIndex={0} onKeyDown={handleKeyDown}>
        {childArray.map((child, i) => (
          <CarouselItem key={i}>{child}</CarouselItem>
        ))}
      </CarouselTrack>
      {childCount > 1 && (
        <>
          <CarouselNavButton
            data-side="prev"
            aria-label="Previous"
            icon={<Icon name="chevron-left" size="sm" />}
            size="sm"
            onClick={scrollPrev}
            disabled={currentIndex === 0}
          />
          <CarouselNavButton
            data-side="next"
            aria-label="Next"
            icon={<Icon name="chevron-right" size="sm" />}
            size="sm"
            onClick={scrollNext}
            disabled={currentIndex === childCount - 1}
          />
        </>
      )}
    </CarouselRoot>
  );
}
