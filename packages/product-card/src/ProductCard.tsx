import React from 'react';
import { Body, Caption, Footnote } from '@design-system/typography';
import type { BodyProps, CaptionProps, FootnoteProps } from '@design-system/typography';
import {
  ProductCardRoot,
  ProductCardAnchor,
  ProductImageSection,
  ProductImage,
  ProductImageOverlay,
  ProductBadgeEl,
  ProductContent,
  ProductDefaultInfo,
  ProductHoverInfo,
  ProductSizesRow,
  ProductSizeChip,
  ProductColorsRow,
  ProductColorSwatch,
} from './ProductCard.styles';

export const ProductTitle: React.FC<BodyProps> = (props) => (
  <Body as="p" weight="medium" truncate {...props} />
);

export const ProductPrice: React.FC<CaptionProps> = (props) => (
  <Caption as="p" weight="semibold" {...props} />
);

export const ProductHoverLabel: React.FC<FootnoteProps> = (props) => (
  <Footnote as="p" weight="medium" color="subtle" {...props} />
);

export interface ProductCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  price: string;
  badge?: string;
  availableSizes?: string[];
  availableColors?: string[];
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  price,
  badge,
  availableSizes,
  availableColors,
  href,
  onClick,
  className,
}) => {
  const hasHoverInfo =
    (availableSizes && availableSizes.length > 0) || (availableColors && availableColors.length > 0);

  return (
    <ProductCardRoot onClick={onClick} className={className}>
      {href && <ProductCardAnchor href={href} aria-label={title} tabIndex={0} />}

      <ProductImageSection>
        <ProductImage src={imageSrc} alt={imageAlt} fit="cover" aspectRatio="3 / 4" />
        <ProductImageOverlay />
        {badge && <ProductBadgeEl>{badge}</ProductBadgeEl>}
      </ProductImageSection>

      <ProductContent>
        <ProductDefaultInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
        </ProductDefaultInfo>

        {hasHoverInfo && (
          <ProductHoverInfo>
            {availableSizes && availableSizes.length > 0 && (
              <div>
                <ProductHoverLabel>Sizes</ProductHoverLabel>
                <ProductSizesRow>
                  {availableSizes.map((s) => (
                    <ProductSizeChip key={s}>{s}</ProductSizeChip>
                  ))}
                </ProductSizesRow>
              </div>
            )}
            {availableColors && availableColors.length > 0 && (
              <div>
                <ProductHoverLabel>Colors</ProductHoverLabel>
                <ProductColorsRow>
                  {availableColors.map((color) => (
                    <ProductColorSwatch key={color} style={{ backgroundColor: color }} title={color} />
                  ))}
                </ProductColorsRow>
              </div>
            )}
          </ProductHoverInfo>
        )}
      </ProductContent>
    </ProductCardRoot>
  );
};
ProductCard.displayName = 'ProductCard';
