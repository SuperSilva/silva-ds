import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';

/* Wraps the trigger element — inline-block gives us a reliable DOMRect */
export const TooltipWrapper = styled.span`
  display: inline-block;
  position: relative;
`;

export const TooltipBubble = styled.div`
  background-color: ${tokens.color.neutralFg};
  color: #ffffff;
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.medium};
  line-height: ${tokens.lineHeight.normal};
  padding: ${tokens.space[1]} ${tokens.space[3]};
  border-radius: ${tokens.radius.md};
  max-width: 260px;
  word-break: break-word;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.18),
    0 1px 3px rgba(0, 0, 0, 0.12);
  pointer-events: none;
  user-select: none;
  z-index: 9999;

  @keyframes tooltip-in {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation: tooltip-in 130ms ease;
`;

export const TooltipArrow = styled.span`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${tokens.color.neutralFg};
  transform: rotate(45deg);
  border-radius: 1px;

  /* arrow at bottom → tooltip is above the trigger */
  &[data-placement='top'] {
    bottom: -4px;
    left: 50%;
    margin-left: -4px;
  }

  /* arrow at top → tooltip is below the trigger */
  &[data-placement='bottom'] {
    top: -4px;
    left: 50%;
    margin-left: -4px;
  }

  /* arrow at right → tooltip is to the left */
  &[data-placement='left'] {
    right: -4px;
    top: 50%;
    margin-top: -4px;
  }

  /* arrow at left → tooltip is to the right */
  &[data-placement='right'] {
    left: -4px;
    top: 50%;
    margin-top: -4px;
  }
`;
