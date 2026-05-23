import { render, screen } from '@testing-library/react';
import { OtpField } from './OtpField';

describe('OtpField', () => {
  describe('OtpField.Root', () => {
    it('renders children', () => {
      render(
        <OtpField.Root length={4} data-testid="root">
          <OtpField.Input aria-label="Character 1 of 4" />
          <OtpField.Input aria-label="Character 2 of 4" />
          <OtpField.Input aria-label="Character 3 of 4" />
          <OtpField.Input aria-label="Character 4 of 4" />
        </OtpField.Root>,
      );
      expect(screen.getByTestId('root')).toBeInTheDocument();
    });

    it('applies correct CSS class', () => {
      render(<OtpField.Root length={4} data-testid="root" />);
      expect(screen.getByTestId('root')).toHaveClass('OtpField-Root');
    });

    it('applies custom className', () => {
      render(<OtpField.Root length={4} className="custom-root" data-testid="root" />);
      expect(screen.getByTestId('root')).toHaveClass('OtpField-Root', 'custom-root');
    });

    it('forwards ref', () => {
      const ref = vi.fn();
      render(<OtpField.Root length={4} ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it('is disabled when disabled prop is set', () => {
      render(<OtpField.Root length={4} disabled data-testid="root" />);
      expect(screen.getByTestId('root')).toHaveAttribute('data-disabled');
    });
  });

  describe('OtpField.Input', () => {
    it('renders an input element', () => {
      render(
        <OtpField.Root length={1}>
          <OtpField.Input />
        </OtpField.Root>,
      );
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('applies correct CSS class', () => {
      render(
        <OtpField.Root length={1}>
          <OtpField.Input />
        </OtpField.Root>,
      );
      expect(screen.getByRole('textbox')).toHaveClass('OtpField-Input');
    });

    it('applies custom className', () => {
      render(
        <OtpField.Root length={1}>
          <OtpField.Input className="custom-input" />
        </OtpField.Root>,
      );
      expect(screen.getByRole('textbox')).toHaveClass('OtpField-Input', 'custom-input');
    });

    it('forwards ref', () => {
      const ref = vi.fn();
      render(
        <OtpField.Root length={1}>
          <OtpField.Input ref={ref} />
        </OtpField.Root>,
      );
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('OtpField.Separator', () => {
    it('renders a separator', () => {
      render(
        <OtpField.Root length={6}>
          <OtpField.Input aria-label="Character 1 of 6" />
          <OtpField.Input aria-label="Character 2 of 6" />
          <OtpField.Input aria-label="Character 3 of 6" />
          <OtpField.Separator data-testid="sep" />
          <OtpField.Input aria-label="Character 4 of 6" />
          <OtpField.Input aria-label="Character 5 of 6" />
          <OtpField.Input aria-label="Character 6 of 6" />
        </OtpField.Root>,
      );
      expect(screen.getByTestId('sep')).toBeInTheDocument();
    });

    it('applies correct CSS class', () => {
      render(
        <OtpField.Root length={2}>
          <OtpField.Input aria-label="Character 1 of 2" />
          <OtpField.Separator data-testid="sep" />
          <OtpField.Input aria-label="Character 2 of 2" />
        </OtpField.Root>,
      );
      expect(screen.getByTestId('sep')).toHaveClass('OtpField-Separator');
    });

    it('applies custom className', () => {
      render(
        <OtpField.Root length={2}>
          <OtpField.Input aria-label="Character 1 of 2" />
          <OtpField.Separator data-testid="sep" className="custom-sep" />
          <OtpField.Input aria-label="Character 2 of 2" />
        </OtpField.Root>,
      );
      expect(screen.getByTestId('sep')).toHaveClass('OtpField-Separator', 'custom-sep');
    });
  });
});
