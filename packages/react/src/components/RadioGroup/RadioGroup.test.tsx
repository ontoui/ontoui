import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('renders', () => {
    render(
      <RadioGroup data-testid="group">
        <BaseRadio.Root value="a" />
      </RadioGroup>,
    );
    expect(screen.getByTestId('group')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<RadioGroup className="custom" data-testid="group" />);
    expect(screen.getByTestId('group')).toHaveClass('RadioGroup', 'custom');
  });

  it('calls onValueChange when a radio is selected', async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup onValueChange={onValueChange}>
        <BaseRadio.Root value="a" />
        <BaseRadio.Root value="b" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(onValueChange).toHaveBeenCalledWith('a', expect.anything());
  });

  it('does not call onValueChange when disabled', async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup disabled onValueChange={onValueChange}>
        <BaseRadio.Root value="a" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByRole('radio'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('applies data-disabled when disabled', () => {
    render(<RadioGroup disabled data-testid="group" />);
    expect(screen.getByTestId('group')).toHaveAttribute('data-disabled');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<RadioGroup ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
