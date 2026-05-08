import React, { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { cx } from '@linaria/core';
import { FloatingLayer } from '@design-system/layers';
import {
  DefaultDropdownTrigger,
  OutlineDropdownTrigger,
  DropdownPanelRoot,
  DropdownOptionRoot,
  dropdownTriggerSizes,
  dropdownOptionSizes,
} from './Dropdown.styles';

export type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: DropdownSize;
  disabled?: boolean;
  id?: string;
  name?: string;
}

interface PanelPosition {
  top: number;
  left: number;
  width: number;
}

function ChevronIcon() {
  return (
    <svg
      data-chevron=""
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function useDropdown({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
}: Pick<DropdownProps, 'options' | 'value' | 'defaultValue' | 'onChange'>) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<string>(defaultValue ?? '');
  const value = isControlled ? controlledValue : internalValue;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [panelPosition, setPanelPosition] = useState<PanelPosition>({ top: 0, left: 0, width: 0 });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) {
      setPanelPosition({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    }
    const selectedIndex = options.findIndex((o) => o.value === value);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  }, [options, value]);

  const close = useCallback(() => {
    setIsOpen(false);
    setHighlightedIndex(-1);
    triggerRef.current?.focus();
  }, []);

  const selectOption = useCallback(
    (option: DropdownOption) => {
      if (option.disabled) return;
      if (!isControlled) setInternalValue(option.value);
      onChange?.(option.value);
      close();
    },
    [isControlled, onChange, close],
  );

  useEffect(() => {
    if (!isOpen) return;
    function handleMouseDown(e: MouseEvent) {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen]);

  const handleTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        close();
      }
    },
    [open, close, isOpen],
  );

  const handlePanelKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((i) => (i + 1 < options.length ? i + 1 : i));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((i) => (i - 1 >= 0 ? i - 1 : i));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          selectOption(options[highlightedIndex]);
        }
      } else if (e.key === 'Tab') {
        close();
      }
    },
    [options, highlightedIndex, selectOption, close],
  );

  return {
    value,
    isOpen,
    highlightedIndex,
    setHighlightedIndex,
    panelPosition,
    triggerRef,
    panelRef,
    open,
    close,
    selectOption,
    handleTriggerKeyDown,
    handlePanelKeyDown,
  };
}

interface DropdownBaseProps extends DropdownProps {
  TriggerRoot: typeof DefaultDropdownTrigger | typeof OutlineDropdownTrigger;
}

const DropdownBase = forwardRef<HTMLButtonElement, DropdownBaseProps>(function DropdownBase(
  {
    TriggerRoot,
    options,
    value: controlledValue,
    defaultValue,
    onChange,
    placeholder = 'Select an option',
    size = 'md',
    disabled = false,
    id,
    name,
  },
  ref,
) {
  const generatedId = useId();
  const triggerId = id ?? generatedId;
  const listboxId = `${triggerId}-listbox`;

  const {
    value,
    isOpen,
    highlightedIndex,
    setHighlightedIndex,
    panelPosition,
    triggerRef,
    panelRef,
    open,
    close,
    selectOption,
    handleTriggerKeyDown,
    handlePanelKeyDown,
  } = useDropdown({ options, value: controlledValue, defaultValue, onChange });

  const selectedOption = options.find((o) => o.value === value);
  const displayLabel = selectedOption?.label ?? placeholder;

  const mergedRef = useCallback(
    (el: HTMLButtonElement | null) => {
      (triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
    },
    [ref, triggerRef],
  );

  return (
    <>
      {name && <input type="hidden" name={name} value={value} />}
      <TriggerRoot
        ref={mergedRef}
        id={triggerId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        disabled={disabled}
        className={dropdownTriggerSizes[size]}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={handleTriggerKeyDown}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
          {displayLabel}
        </span>
        <ChevronIcon />
      </TriggerRoot>

      {isOpen && (
        <FloatingLayer>
          <div
            ref={panelRef}
            id={listboxId}
            role="listbox"
            aria-label={placeholder}
            tabIndex={-1}
            style={{
              position: 'fixed',
              top: panelPosition.top,
              left: panelPosition.left,
              width: panelPosition.width,
              pointerEvents: 'auto',
            }}
            onKeyDown={handlePanelKeyDown}
          >
            <DropdownPanelRoot style={{ width: '100%' }}>
              {options.map((option, index) => (
                <DropdownOptionRoot
                  key={option.value}
                  role="option"
                  aria-selected={option.value === value}
                  aria-disabled={option.disabled}
                  data-highlighted={index === highlightedIndex ? 'true' : undefined}
                  className={cx(dropdownOptionSizes[size])}
                  onMouseEnter={() => {
                    if (!option.disabled) setHighlightedIndex(index);
                  }}
                  onMouseLeave={() => setHighlightedIndex(-1)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    selectOption(option);
                  }}
                >
                  {option.label}
                </DropdownOptionRoot>
              ))}
            </DropdownPanelRoot>
          </div>
        </FloatingLayer>
      )}
    </>
  );
});

export const DefaultDropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  function DefaultDropdown(props, ref) {
    return <DropdownBase {...props} TriggerRoot={DefaultDropdownTrigger} ref={ref} />;
  },
);

export const OutlineDropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  function OutlineDropdown(props, ref) {
    return <DropdownBase {...props} TriggerRoot={OutlineDropdownTrigger} ref={ref} />;
  },
);

export const Dropdown = DefaultDropdown;
