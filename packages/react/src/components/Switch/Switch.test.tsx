import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders root', () => {
    render(<Switch.Root />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders thumb', () => {
    render(
      <Switch.Root>
        <Switch.Thumb data-testid="thumb" />
      </Switch.Root>,
    );
    expect(screen.getByTestId('thumb')).toBeInTheDocument();
  });

  it('applies custom className to Root', () => {
    render(<Switch.Root className="custom-root" />);
    expect(screen.getByRole('switch')).toHaveClass('Switch-Root', 'custom-root');
  });

  it('applies custom className to Thumb', () => {
    render(
      <Switch.Root>
        <Switch.Thumb className="custom-thumb" data-testid="thumb" />
      </Switch.Root>,
    );
    expect(screen.getByTestId('thumb')).toHaveClass('Switch-Thumb', 'custom-thumb');
  });

  it('is unchecked by default', () => {
    render(<Switch.Root />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-unchecked');
  });

  it('toggles checked state on click', async () => {
    render(<Switch.Root />);
    const switchEl = screen.getByRole('switch');
    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute('data-checked');
    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute('data-unchecked');
  });

  it('calls onCheckedChange when clicked', async () => {
    const onCheckedChange = vi.fn();
    render(<Switch.Root onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(onCheckedChange).toHaveBeenCalledWith(true, expect.anything());
  });

  it('does not call onCheckedChange when disabled', async () => {
    const onCheckedChange = vi.fn();
    render(<Switch.Root disabled onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('renders with defaultChecked', () => {
    render(<Switch.Root defaultChecked />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-checked');
  });

  it('forwards ref to Root', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Switch.Root ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('forwards ref to Thumb', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Switch.Root>
        <Switch.Thumb ref={ref} />
      </Switch.Root>,
    );
    expect(ref.current).not.toBeNull();
  });
});
