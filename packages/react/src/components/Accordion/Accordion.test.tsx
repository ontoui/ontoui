import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';

function BasicAccordion() {
  return (
    <Accordion.Root>
      <Accordion.Item value="item1">
        <Accordion.Header>
          <Accordion.Trigger>Section 1</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>Content 1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>
          <Accordion.Trigger>Section 2</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>Content 2</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item3" disabled>
        <Accordion.Header>
          <Accordion.Trigger>Section 3</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>Content 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}

describe('Accordion', () => {
  it('renders all trigger buttons', () => {
    render(<BasicAccordion />);
    expect(screen.getByRole('button', { name: /Section 1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Section 2/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Section 3/i })).toBeInTheDocument();
  });

  it('opens a panel when its trigger is clicked', async () => {
    render(<BasicAccordion />);
    await userEvent.click(screen.getByRole('button', { name: /Section 1/i }));
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('closes an open panel when its trigger is clicked again', async () => {
    render(<BasicAccordion />);
    const trigger = screen.getByRole('button', { name: /Section 1/i });
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });
  });

  it('only opens one panel at a time by default', async () => {
    render(<BasicAccordion />);
    await userEvent.click(screen.getByRole('button', { name: /Section 1/i }));
    await userEvent.click(screen.getByRole('button', { name: /Section 2/i }));
    await waitFor(() => {
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('allows multiple panels open when multiple is set', async () => {
    render(
      <Accordion.Root multiple>
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger>Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item2">
          <Accordion.Header>
            <Accordion.Trigger>Section 2</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 2</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: /Section 1/i }));
    await userEvent.click(screen.getByRole('button', { name: /Section 2/i }));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('does not open a disabled item panel', async () => {
    render(<BasicAccordion />);
    const disabledTrigger = screen.getByRole('button', { name: /Section 3/i });
    expect(disabledTrigger).toHaveAttribute('data-disabled');
    await userEvent.click(disabledTrigger);
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('applies custom className to Root', () => {
    render(
      <Accordion.Root className="custom-root" data-testid="root">
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger>Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    expect(screen.getByTestId('root')).toHaveClass('Accordion', 'custom-root');
  });

  it('applies custom className to Item', () => {
    render(
      <Accordion.Root>
        <Accordion.Item value="item1" className="custom-item" data-testid="item">
          <Accordion.Header>
            <Accordion.Trigger>Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    expect(screen.getByTestId('item')).toHaveClass('Accordion-Item', 'custom-item');
  });

  it('applies custom className to Trigger', () => {
    render(
      <Accordion.Root>
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger className="custom-trigger">Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    expect(screen.getByRole('button', { name: /Section 1/i })).toHaveClass(
      'Accordion-Trigger',
      'custom-trigger',
    );
  });

  it('applies custom className to Panel', async () => {
    render(
      <Accordion.Root>
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger>Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="custom-panel" data-testid="panel">
            Content 1
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: /Section 1/i }));
    expect(screen.getByTestId('panel')).toHaveClass('Accordion-Panel', 'custom-panel');
  });

  it('forwards ref to Item', () => {
    const ref = { current: null };
    render(
      <Accordion.Root>
        <Accordion.Item value="item1" ref={ref} data-testid="item">
          <Accordion.Header>
            <Accordion.Trigger>Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    expect(ref.current).toBe(screen.getByTestId('item'));
  });

  it('forwards ref to Trigger', () => {
    const ref = { current: null };
    render(
      <Accordion.Root>
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger ref={ref}>Section 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    );
    expect(ref.current).toBe(screen.getByRole('button', { name: /Section 1/i }));
  });
});
