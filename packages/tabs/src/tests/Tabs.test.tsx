import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Tabs, TabList, LineTab, PillTab, TabPanel } from '..';

const LineTabsExample = ({
  defaultTab = 'a',
  onValueChange,
}: {
  defaultTab?: string;
  onValueChange?: (v: string) => void;
}) => (
  <Tabs defaultTab={defaultTab} onValueChange={onValueChange}>
    <TabList aria-label="Test tabs">
      <LineTab value="a">Tab A</LineTab>
      <LineTab value="b">Tab B</LineTab>
      <LineTab value="c" disabled>
        Tab C
      </LineTab>
    </TabList>
    <TabPanel value="a">Panel A</TabPanel>
    <TabPanel value="b">Panel B</TabPanel>
    <TabPanel value="c">Panel C</TabPanel>
  </Tabs>
);

describe('Tabs', () => {
  it('renders the active tab panel', () => {
    render(<LineTabsExample />);
    expect(screen.getByText('Panel A')).toBeInTheDocument();
  });

  it('does not render inactive panels', () => {
    render(<LineTabsExample />);
    expect(screen.queryByText('Panel B')).not.toBeInTheDocument();
  });

  it('switches panel on tab click', async () => {
    const user = userEvent.setup();
    render(<LineTabsExample />);
    await user.click(screen.getByRole('tab', { name: 'Tab B' }));
    expect(screen.getByText('Panel B')).toBeInTheDocument();
    expect(screen.queryByText('Panel A')).not.toBeInTheDocument();
  });

  it('calls onValueChange when tab changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<LineTabsExample onValueChange={onChange} />);
    await user.click(screen.getByRole('tab', { name: 'Tab B' }));
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('active tab has aria-selected=true', () => {
    render(<LineTabsExample />);
    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'false');
  });

  it('disabled tab cannot be clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<LineTabsExample onValueChange={onChange} />);
    await user.click(screen.getByRole('tab', { name: 'Tab C' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports controlled mode', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <Tabs value="a" onValueChange={onChange}>
        <TabList aria-label="Controlled">
          <LineTab value="a">A</LineTab>
          <LineTab value="b">B</LineTab>
        </TabList>
        <TabPanel value="a">Panel A</TabPanel>
        <TabPanel value="b">Panel B</TabPanel>
      </Tabs>,
    );
    await user.click(screen.getByRole('tab', { name: 'B' }));
    expect(onChange).toHaveBeenCalledWith('b');
    expect(screen.getByText('Panel A')).toBeInTheDocument();

    rerender(
      <Tabs value="b" onValueChange={onChange}>
        <TabList aria-label="Controlled">
          <LineTab value="a">A</LineTab>
          <LineTab value="b">B</LineTab>
        </TabList>
        <TabPanel value="a">Panel A</TabPanel>
        <TabPanel value="b">Panel B</TabPanel>
      </Tabs>,
    );
    expect(screen.getByText('Panel B')).toBeInTheDocument();
  });

  it('panel has correct aria-labelledby', () => {
    render(<LineTabsExample />);
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-a');
  });
});

describe('PillTab', () => {
  it('renders with role=tab', () => {
    render(
      <Tabs defaultTab="x">
        <TabList aria-label="Pill tabs">
          <PillTab value="x">Pill X</PillTab>
          <PillTab value="y">Pill Y</PillTab>
        </TabList>
        <TabPanel value="x">X</TabPanel>
        <TabPanel value="y">Y</TabPanel>
      </Tabs>,
    );
    expect(screen.getAllByRole('tab')).toHaveLength(2);
    expect(screen.getByRole('tab', { name: 'Pill X' })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('TabList keyboard navigation', () => {
  it('moves focus with ArrowRight', async () => {
    const user = userEvent.setup();
    render(<LineTabsExample />);
    const tabA = screen.getByRole('tab', { name: 'Tab A' });
    tabA.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveFocus();
  });

  it('wraps focus from last to first with ArrowRight', async () => {
    const user = userEvent.setup();
    render(<LineTabsExample defaultTab="b" />);
    screen.getByRole('tab', { name: 'Tab B' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveFocus();
  });
});
