import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders root', () => {
    render(<Checkbox.Root />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders indicator when checked', async () => {
    render(
      <Checkbox.Root>
        <Checkbox.Indicator data-testid="indicator" />
      </Checkbox.Root>,
    );
    await userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByTestId('indicator')).toBeInTheDocument();
  });

  it('applies custom className to Root', () => {
    render(<Checkbox.Root className="custom-root" />);
    expect(screen.getByRole('checkbox')).toHaveClass('Checkbox-Root', 'custom-root');
  });

  it('applies custom className to Indicator', () => {
    render(
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator className="custom-indicator" data-testid="indicator" />
      </Checkbox.Root>,
    );
    expect(screen.getByTestId('indicator')).toHaveClass('Checkbox-Indicator', 'custom-indicator');
  });

  it('calls onCheckedChange when clicked', async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox.Root onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true, expect.anything());
  });

  it('toggles checked state on click', async () => {
    render(<Checkbox.Root />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('data-checked');
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('data-unchecked');
  });

  it('does not call onCheckedChange when disabled', async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox.Root disabled onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('renders with indeterminate state', () => {
    render(<Checkbox.Root indeterminate />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-indeterminate');
  });

  it('renders children inside Indicator', () => {
    render(
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator>custom icon</Checkbox.Indicator>
      </Checkbox.Root>,
    );
    expect(screen.getByText('custom icon')).toBeInTheDocument();
  });

  it('forwards ref to Root', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Checkbox.Root ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('forwards ref to Indicator', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator ref={ref} />
      </Checkbox.Root>,
    );
    expect(ref.current).not.toBeNull();
  });
});
