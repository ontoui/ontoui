import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from './TextField';

describe('TextField', () => {
  describe('TextField.Root', () => {
    it('renders children', () => {
      render(
        <TextField.Root>
          <TextField.Control placeholder="Enter text" />
        </TextField.Root>,
      );
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('forwards ref', () => {
      const ref = vi.fn();
      render(<TextField.Root ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it('applies custom className', () => {
      render(<TextField.Root className="custom-root" data-testid="root" />);
      expect(screen.getByTestId('root')).toHaveClass('custom-root');
    });
  });

  describe('TextField.Label', () => {
    it('renders label text', () => {
      render(
        <TextField.Root>
          <TextField.Label>Email</TextField.Label>
        </TextField.Root>,
      );
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('is associated with control', () => {
      render(
        <TextField.Root>
          <TextField.Label>Username</TextField.Label>
          <TextField.Control placeholder="username" />
        </TextField.Root>,
      );
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });
  });

  describe('TextField.Control', () => {
    it('renders an input element', () => {
      render(
        <TextField.Root>
          <TextField.Control />
        </TextField.Root>,
      );
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('forwards onChange handler', async () => {
      const handleChange = vi.fn();
      render(
        <TextField.Root>
          <TextField.Control onChange={handleChange} />
        </TextField.Root>,
      );
      await userEvent.type(screen.getByRole('textbox'), 'a');
      expect(handleChange).toHaveBeenCalled();
    });

    it('is disabled when disabled prop is set', async () => {
      const handleChange = vi.fn();
      render(
        <TextField.Root>
          <TextField.Control disabled onChange={handleChange} />
        </TextField.Root>,
      );
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });

    it('forwards ref', () => {
      const ref = vi.fn();
      render(
        <TextField.Root>
          <TextField.Control ref={ref} />
        </TextField.Root>,
      );
      expect(ref).toHaveBeenCalled();
    });

    it('renders with placeholder', () => {
      render(
        <TextField.Root>
          <TextField.Control placeholder="Search…" />
        </TextField.Root>,
      );
      expect(screen.getByPlaceholderText('Search…')).toBeInTheDocument();
    });
  });

  describe('TextField.Description', () => {
    it('renders description text', () => {
      render(
        <TextField.Root>
          <TextField.Description>Helper text</TextField.Description>
        </TextField.Root>,
      );
      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });
  });

  describe('TextField.Error', () => {
    it('marks the root as invalid when invalid prop is set', () => {
      render(
        <TextField.Root invalid data-testid="root">
          <TextField.Error>This field is required</TextField.Error>
        </TextField.Root>,
      );
      expect(screen.getByTestId('root')).toHaveAttribute('data-invalid');
    });
  });
});
