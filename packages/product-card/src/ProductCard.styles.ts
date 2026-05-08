import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';

export const ProductImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  transition: transform 400ms ease;
`;

export const ProductImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.22);
  opacity: 0;
  transition: opacity 300ms ease;
`;

export const ProductBadgeEl = styled.span`
  position: absolute;
  top: ${tokens.space[2]};
  left: ${tokens.space[2]};
  z-index: 1;
  background-color: ${tokens.color.primary};
  color: ${tokens.color.primaryFg};
  font-size: ${tokens.fontSize.xs};
  font-weight: ${tokens.fontWeight.semibold};
  line-height: 1;
  padding: 3px ${tokens.space[2]};
  border-radius: ${tokens.radius.full};
`;

export const ProductImageSection = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ProductDefaultInfo = styled.div`
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 220ms ease,
    transform 220ms ease;
`;

export const ProductHoverInfo = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 220ms ease,
    transform 220ms ease;
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[2]};
`;

export const ProductContent = styled.div`
  padding: ${tokens.space[3]};
  position: relative;
  overflow: hidden;
  min-height: 76px;
`;

export const ProductTitle = styled.p`
  margin: 0 0 ${tokens.space[1]};
  font-size: ${tokens.fontSize.md};
  font-weight: ${tokens.fontWeight.medium};
  line-height: ${tokens.lineHeight.normal};
  color: ${tokens.color.textDefault};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.semibold};
  line-height: ${tokens.lineHeight.normal};
  color: ${tokens.color.textDefault};
`;

export const ProductHoverLabel = styled.p`
  margin: 0 0 ${tokens.space[1]};
  font-size: ${tokens.fontSize.xs};
  font-weight: ${tokens.fontWeight.medium};
  color: ${tokens.color.textSubtle};
  line-height: 1;
`;

export const ProductSizesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.space[1]};
`;

export const ProductSizeChip = styled.span`
  font-size: ${tokens.fontSize.xs};
  font-weight: ${tokens.fontWeight.medium};
  color: ${tokens.color.textDefault};
  border: 1px solid ${tokens.color.border};
  border-radius: ${tokens.radius.sm};
  padding: 2px 5px;
  line-height: 1.4;
`;

export const ProductColorsRow = styled.div`
  display: flex;
  gap: ${tokens.space[1]};
  flex-wrap: wrap;
`;

export const ProductColorSwatch = styled.span`
  width: 14px;
  height: 14px;
  border-radius: ${tokens.radius.full};
  border: 1px solid rgba(0, 0, 0, 0.14);
  display: inline-block;
  flex-shrink: 0;
`;

/* Stretched-link anchor that covers the entire card for accessibility.
   Interactive elements (swatches, chips) sit above it via z-index. */
export const ProductCardAnchor = styled.a`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }
`;

/* Defined last so it can use the above as CSS selector targets */
export const ProductCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${tokens.radius.lg};
  overflow: hidden;
  background-color: #ffffff;
  position: relative;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.04);
  transition: box-shadow 300ms ease;

  &:hover {
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.1),
      0 2px 6px rgba(0, 0, 0, 0.06);
  }

  &:hover ${ProductImage} {
    transform: scale(1.05);
  }

  &:hover ${ProductImageOverlay} {
    opacity: 1;
  }

  &:hover ${ProductDefaultInfo} {
    opacity: 0;
    transform: translateY(-6px);
  }

  &:hover ${ProductHoverInfo} {
    opacity: 1;
    transform: translateY(0);
  }
`;
