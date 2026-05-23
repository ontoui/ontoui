import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

function BasicTooltip() {
  return (
    <Tooltip.Provider delay={0} closeDelay={0}>
      <Tooltip.Root>
        <Tooltip.Trigger>hover me</Tooltip.Trigger>
        <Tooltip.Content>tooltip text</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

describe('Tooltip', () => {
  it('renders the trigger', () => {
    render(<BasicTooltip />);
    expect(screen.getByRole('button', { name: 'hover me' })).toBeInTheDocument();
  });

  it('shows tooltip content on hover', async () => {
    render(<BasicTooltip />);
    await userEvent.hover(screen.getByRole('button', { name: 'hover me' }));
    await waitFor(() => {
      expect(screen.getByText('tooltip text')).toBeInTheDocument();
    });
  });

  it('hides tooltip after unhover', async () => {
    render(<BasicTooltip />);
    await userEvent.hover(screen.getByRole('button', { name: 'hover me' }));
    await waitFor(() => {
      expect(screen.getByText('tooltip text')).toBeInTheDocument();
    });
    await userEvent.unhover(screen.getByRole('button', { name: 'hover me' }));
    await waitFor(() => {
      expect(screen.queryByText('tooltip text')).not.toBeInTheDocument();
    });
  });

  it('applies CSS class to Content', async () => {
    render(
      <Tooltip.Provider delay={0} closeDelay={0}>
        <Tooltip.Root>
          <Tooltip.Trigger>hover me</Tooltip.Trigger>
          <Tooltip.Content className="custom-tooltip">tooltip text</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    await userEvent.hover(screen.getByRole('button', { name: 'hover me' }));
    const tooltip = await screen.findByText('tooltip text');
    expect(tooltip).toHaveClass('Tooltip-Content');
    expect(tooltip).toHaveClass('custom-tooltip');
  });

  it('forwards ref to Content', async () => {
    const ref = { current: null as HTMLDivElement | null };
    render(
      <Tooltip.Provider delay={0} closeDelay={0}>
        <Tooltip.Root defaultOpen>
          <Tooltip.Trigger>hover me</Tooltip.Trigger>
          <Tooltip.Content ref={ref}>tooltip text</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    await waitFor(() => {
      expect(ref.current).not.toBeNull();
    });
  });

  it('forwards ref to Trigger', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(
      <Tooltip.Provider delay={0} closeDelay={0}>
        <Tooltip.Root>
          <Tooltip.Trigger ref={ref}>hover me</Tooltip.Trigger>
          <Tooltip.Content>tooltip text</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    expect(ref.current).not.toBeNull();
  });

  it('does not show tooltip when disabled', async () => {
    render(
      <Tooltip.Provider delay={0} closeDelay={0}>
        <Tooltip.Root disabled>
          <Tooltip.Trigger>hover me</Tooltip.Trigger>
          <Tooltip.Content>tooltip text</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    await userEvent.hover(screen.getByRole('button', { name: 'hover me' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});
