import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';

function BasicTabs() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="tab3" disabled>
          Tab 3
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
      <Tabs.Panel value="tab3">Panel 3</Tabs.Panel>
    </Tabs.Root>
  );
}

describe('Tabs', () => {
  it('renders tabs and the active panel', () => {
    render(<BasicTabs />);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
  });

  it('switches panel when a tab is clicked', async () => {
    render(<BasicTabs />);
    await userEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(screen.getByText('Panel 2')).toBeInTheDocument();
  });

  it('does not activate a disabled tab', async () => {
    render(<BasicTabs />);
    const disabledTab = screen.getByRole('tab', { name: 'Tab 3' });
    expect(disabledTab).toHaveAttribute('data-disabled');
    await userEvent.click(disabledTab);
    expect(screen.queryByText('Panel 3')).not.toBeInTheDocument();
  });

  it('applies custom className to Root', () => {
    render(
      <Tabs.Root defaultValue="tab1" className="custom-root" data-testid="root">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByTestId('root')).toHaveClass('Tabs', 'custom-root');
  });

  it('applies custom className to List', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List className="custom-list">
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByRole('tablist')).toHaveClass('Tabs-List', 'custom-list');
  });

  it('applies custom className to Tab', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1" className="custom-tab">
            Tab 1
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveClass('custom-tab');
  });

  it('applies custom className to Panel', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1" className="custom-panel">
          Panel 1
        </Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByRole('tabpanel')).toHaveClass('custom-panel');
  });

  it('calls onValueChange when a tab is clicked', async () => {
    const handleChange = vi.fn();
    render(
      <Tabs.Root defaultValue="tab1" onValueChange={handleChange}>
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
      </Tabs.Root>,
    );
    await userEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toBe('tab2');
  });

  it('forwards ref to List', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List ref={ref}>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('forwards ref to Tab', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1" ref={ref}>
            Tab 1
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('forwards ref to Panel', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1" ref={ref}>
          Panel 1
        </Tabs.Panel>
      </Tabs.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
