import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';

export const AccordionRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${tokens.color.border};
`;

export const AccordionItemRoot = styled.div`
  border-bottom: 1px solid ${tokens.color.border};
`;

export const AccordionTriggerRoot = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${tokens.space[4]} 0;
  font-size: ${tokens.fontSize.md};
  font-weight: ${tokens.fontWeight.medium};
  line-height: ${tokens.lineHeight.normal};
  color: ${tokens.color.textDefault};
  cursor: pointer;
  transition: ${tokens.transition.colors};
  gap: ${tokens.space[2]};

  &:hover {
    color: ${tokens.color.primary};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
    border-radius: ${tokens.radius.sm};
  }
`;

export const AccordionChevronRoot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 200ms ease;
  color: ${tokens.color.textSubtle};

  &[data-open='true'] {
    transform: rotate(180deg);
  }
`;

export const AccordionPanelRoot = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 200ms ease;
  overflow: hidden;

  &[data-open='true'] {
    grid-template-rows: 1fr;
  }
`;

export const AccordionPanelInner = styled.div`
  overflow: hidden;
  padding-bottom: ${tokens.space[4]};
  font-size: ${tokens.fontSize.md};
  line-height: ${tokens.lineHeight.relaxed};
  color: ${tokens.color.textSubtle};
`;
