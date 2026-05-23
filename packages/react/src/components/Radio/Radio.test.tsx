import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders', () => {
    render(
      <BaseRadioGroup>
        <Radio value="a" />
      </BaseRadioGroup>,
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <BaseRadioGroup>
        <Radio value="a" className="custom" data-testid="root" />
      </BaseRadioGroup>,
    );
    expect(screen.getByTestId('root')).toHaveClass('Radio', 'custom');
  });

  it('checks on click', async () => {
    render(
      <BaseRadioGroup>
        <Radio value="a" data-testid="root" />
      </BaseRadioGroup>,
    );
    await userEvent.click(screen.getByRole('radio'));
    expect(screen.getByTestId('root')).toHaveAttribute('data-checked');
  });

  it('applies data-disabled when disabled', () => {
    render(
      <BaseRadioGroup>
        <Radio value="a" disabled data-testid="root" />
      </BaseRadioGroup>,
    );
    expect(screen.getByTestId('root')).toHaveAttribute('data-disabled');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <BaseRadioGroup>
        <Radio value="a" ref={ref} />
      </BaseRadioGroup>,
    );
    expect(ref.current).not.toBeNull();
  });
});
