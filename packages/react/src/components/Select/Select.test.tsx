import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

function BasicSelect() {
  return (
    <Select.Root>
      <Select.Label>Fruit</Select.Label>
      <Select.Trigger placeholder="Choose a fruit" />
      <Select.Popup>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Popup>
    </Select.Root>
  );
}

describe('Select', () => {
  it('renders trigger', () => {
    render(<BasicSelect />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<BasicSelect />);
    expect(screen.getByText('Fruit')).toBeInTheDocument();
  });

  it('shows placeholder when no value is selected', () => {
    render(<BasicSelect />);
    expect(screen.getByText('Choose a fruit')).toBeInTheDocument();
  });

  it('opens popup when trigger is clicked', async () => {
    render(<BasicSelect />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(await screen.findByRole('listbox')).toBeInTheDocument();
  });

  it('renders items in the popup', async () => {
    render(<BasicSelect />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(await screen.findByRole('option', { name: 'Apple' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Orange' })).toBeInTheDocument();
  });

  it('closes popup after selecting an item', async () => {
    render(<BasicSelect />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(await screen.findByRole('option', { name: 'Apple' }));
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('displays the selected value in the trigger', async () => {
    render(<BasicSelect />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(await screen.findByRole('option', { name: 'Banana' }));
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('applies custom className to Trigger', () => {
    render(
      <Select.Root>
        <Select.Trigger className="custom-trigger" />
        <Select.Popup>
          <Select.Item value="a">A</Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    expect(screen.getByRole('combobox')).toHaveClass('Select-Trigger', 'custom-trigger');
  });

  it('applies custom className to Popup', async () => {
    render(
      <Select.Root>
        <Select.Trigger />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Select.Popup className="custom-popup" {...({ 'data-testid': 'popup' } as any)}>
          <Select.Item value="a">A</Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    await userEvent.click(screen.getByRole('combobox'));
    const popup = await screen.findByTestId('popup');
    expect(popup).toHaveClass('Select-Popup', 'custom-popup');
  });

  it('applies custom className to Item', async () => {
    render(
      <Select.Root>
        <Select.Trigger />
        <Select.Popup>
          <Select.Item value="a" className="custom-item">
            A
          </Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    await userEvent.click(screen.getByRole('combobox'));
    const item = await screen.findByRole('option', { name: 'A' });
    expect(item).toHaveClass('Select-Item', 'custom-item');
  });

  it('marks disabled item with data-disabled', async () => {
    render(
      <Select.Root>
        <Select.Trigger />
        <Select.Popup>
          <Select.Item value="a" disabled>
            A
          </Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    await userEvent.click(screen.getByRole('combobox'));
    const item = await screen.findByRole('option', { name: 'A' });
    expect(item).toHaveAttribute('data-disabled');
  });

  it('marks trigger with data-disabled when root is disabled', () => {
    render(
      <Select.Root disabled>
        <Select.Trigger />
        <Select.Popup>
          <Select.Item value="a">A</Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('data-disabled');
  });

  it('forwards ref to Trigger', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(
      <Select.Root>
        <Select.Trigger ref={ref} />
        <Select.Popup>
          <Select.Item value="a">A</Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('renders separator', async () => {
    render(
      <Select.Root>
        <Select.Trigger />
        <Select.Popup>
          <Select.Item value="a">A</Select.Item>
          <Select.Separator data-testid="sep" />
          <Select.Item value="b">B</Select.Item>
        </Select.Popup>
      </Select.Root>,
    );
    await userEvent.click(screen.getByRole('combobox'));
    await screen.findByRole('option', { name: 'A' });
    expect(screen.getByTestId('sep')).toHaveClass('Select-Separator');
  });

  it('renders group and group label', async () => {
    render(
      <Select.Root>
        <Select.Trigger />
        <Select.Popup>
          <Select.Group>
            <Select.GroupLabel>Category</Select.GroupLabel>
            <Select.Item value="a">A</Select.Item>
          </Select.Group>
        </Select.Popup>
      </Select.Root>,
    );
    await userEvent.click(screen.getByRole('combobox'));
    await screen.findByRole('option', { name: 'A' });
    expect(screen.getByText('Category')).toBeInTheDocument();
  });
});
