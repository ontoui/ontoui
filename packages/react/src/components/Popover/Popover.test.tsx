import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';

function BasicPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Popup>
        <Popover.Title>Test title</Popover.Title>
        <Popover.Description>Test description</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Popup>
    </Popover.Root>
  );
}

describe('Popover', () => {
  it('renders trigger', () => {
    render(<BasicPopover />);
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('opens popup when trigger is clicked', async () => {
    render(<BasicPopover />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('closes popup when close button is clicked', async () => {
    render(<BasicPopover />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes popup when Escape key is pressed', async () => {
    render(<BasicPopover />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('applies custom className to Popup', async () => {
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Popup className="custom-popup">Content</Popover.Popup>
      </Popover.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toHaveClass('Popover-Popup');
    expect(screen.getByRole('dialog')).toHaveClass('custom-popup');
  });

  it('applies custom className to Title', async () => {
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Popup>
          <Popover.Title className="custom-title">My Title</Popover.Title>
        </Popover.Popup>
      </Popover.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    const title = screen.getByText('My Title');
    expect(title).toHaveClass('Popover-Title');
    expect(title).toHaveClass('custom-title');
  });

  it('applies custom className to Description', async () => {
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Popup>
          <Popover.Description className="custom-desc">My Description</Popover.Description>
        </Popover.Popup>
      </Popover.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    const desc = screen.getByText('My Description');
    expect(desc).toHaveClass('Popover-Description');
    expect(desc).toHaveClass('custom-desc');
  });

  it('forwards ref to Popup', async () => {
    const ref = { current: null };
    render(
      <Popover.Root defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Popup ref={ref}>Content</Popover.Popup>
      </Popover.Root>,
    );
    expect(ref.current).not.toBeNull();
  });
});
