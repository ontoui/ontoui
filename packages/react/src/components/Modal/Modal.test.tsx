import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

function BasicModal() {
  return (
    <Modal.Root>
      <Modal.Trigger>Open</Modal.Trigger>
      <Modal.Panel>
        <Modal.Title>Test title</Modal.Title>
        <Modal.Description>Test description</Modal.Description>
        <Modal.Close>Close</Modal.Close>
      </Modal.Panel>
    </Modal.Root>
  );
}

describe('Modal', () => {
  it('renders trigger', () => {
    render(<BasicModal />);
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('opens popup when trigger is clicked', async () => {
    render(<BasicModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('closes popup when close button is clicked', async () => {
    render(<BasicModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes popup when Escape key is pressed', async () => {
    render(<BasicModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('applies custom className to Panel', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Panel className="custom-popup">Panel</Modal.Panel>
      </Modal.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toHaveClass('Modal-Panel');
    expect(screen.getByRole('dialog')).toHaveClass('custom-popup');
  });

  it('applies custom className to Title', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Panel>
          <Modal.Title className="custom-title">My Title</Modal.Title>
        </Modal.Panel>
      </Modal.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    const title = screen.getByText('My Title');
    expect(title).toHaveClass('Modal-Title');
    expect(title).toHaveClass('custom-title');
  });

  it('applies custom className to Description', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Panel>
          <Modal.Description className="custom-desc">My Desc</Modal.Description>
        </Modal.Panel>
      </Modal.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    const desc = screen.getByText('My Desc');
    expect(desc).toHaveClass('Modal-Description');
    expect(desc).toHaveClass('custom-desc');
  });

  it('applies custom className to Close button', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Panel>
          <Modal.Close className="custom-close">Close</Modal.Close>
        </Modal.Panel>
      </Modal.Root>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('button', { name: 'Close' })).toHaveClass('Modal-Close');
    expect(screen.getByRole('button', { name: 'Close' })).toHaveClass('custom-close');
  });
});
