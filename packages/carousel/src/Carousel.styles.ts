import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { ElevatedIconButton } from '@design-system/icon-button';

export const CarouselRoot = styled.div`
  position: relative;
  --_gap: ${tokens.space[3]};

  &[data-bleed] {
    width: 100vw;
    margin-inline-start: calc(50% - 50vw);
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  gap: var(--_gap);
  outline: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 calc((100% - var(--_items, 1) * var(--_gap)) / var(--_divisor, 1));
  min-width: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  &:first-child {
    scroll-snap-align: start;
  }

  &:last-child {
    scroll-snap-align: end;
  }
`;

export const CarouselNavButton = styled(ElevatedIconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition:
    opacity 200ms ease,
    ${tokens.transition.colors};

  &[data-side='prev'] {
    left: ${tokens.space[2]};
  }

  &[data-side='next'] {
    right: ${tokens.space[2]};
  }

  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
`;
