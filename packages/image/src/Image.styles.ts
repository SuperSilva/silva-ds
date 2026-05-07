import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';

export const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
`;

export const RoundedSmImageStyled = styled(ImageStyled)`
  border-radius: ${tokens.radius.sm};
`;

export const RoundedImageStyled = styled(ImageStyled)`
  border-radius: ${tokens.radius.md};
`;

export const RoundedLgImageStyled = styled(ImageStyled)`
  border-radius: ${tokens.radius.lg};
`;

export const CircularImageStyled = styled(ImageStyled)`
  border-radius: ${tokens.radius.full};
`;
