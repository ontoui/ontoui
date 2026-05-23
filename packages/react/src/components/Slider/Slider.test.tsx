import { render, screen } from '@testing-library/react';
import { Slider } from './Slider';

function BasicSlider({
  defaultValue = 50,
  disabled,
}: {
  defaultValue?: number;
  disabled?: boolean;
}) {
  return (
    <Slider.Root defaultValue={defaultValue} disabled={disabled} data-testid="root">
      <Slider.Label>Volume</Slider.Label>
      <Slider.Value />
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb aria-label="Volume" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

describe('Slider', () => {
  it('renders the slider input', () => {
    render(<BasicSlider />);
    expect(screen.getByRole('slider', { name: 'Volume' })).toBeInTheDocument();
  });

  it('renders the label', () => {
    render(<BasicSlider />);
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('applies correct class to Root', () => {
    render(<BasicSlider />);
    expect(screen.getByTestId('root')).toHaveClass('Slider');
  });

  it('applies custom className to Root', () => {
    render(
      <Slider.Root defaultValue={50} className="custom" data-testid="root">
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb aria-label="test" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(screen.getByTestId('root')).toHaveClass('Slider', 'custom');
  });

  it('applies correct class to Label', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Label className="custom-label" data-testid="label">
          Label
        </Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb aria-label="test" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(screen.getByTestId('label')).toHaveClass('Slider-Label', 'custom-label');
  });

  it('applies correct class to Control', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Control data-testid="control">
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb aria-label="test" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(screen.getByTestId('control')).toHaveClass('Slider-Control');
  });

  it('applies correct class to Track', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Control>
          <Slider.Track data-testid="track">
            <Slider.Indicator />
            <Slider.Thumb aria-label="test" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(screen.getByTestId('track')).toHaveClass('Slider-Track');
  });

  it('disables the slider when disabled prop is true', () => {
    render(<BasicSlider disabled />);
    expect(screen.getByRole('slider', { name: 'Volume' })).toBeDisabled();
  });

  it('reflects the defaultValue', () => {
    render(<BasicSlider defaultValue={30} />);
    expect(screen.getByRole('slider', { name: 'Volume' })).toHaveValue('30');
  });

  it('forwards ref on Root', () => {
    let rootEl: HTMLDivElement | null = null;
    render(
      <Slider.Root
        defaultValue={50}
        ref={(el) => {
          rootEl = el;
        }}
        data-testid="root"
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb aria-label="test" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(rootEl).toBe(screen.getByTestId('root'));
  });
});
