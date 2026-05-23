import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';

function ToastHarness() {
  const { toasts, add } = Toast.useToastManager();
  return (
    <>
      <button onClick={() => add({ title: 'Test toast', description: 'Test description' })}>
        Show toast
      </button>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast}>
            <Toast.Content>
              <Toast.Title>{toast.title}</Toast.Title>
              <Toast.Description>{toast.description}</Toast.Description>
              <Toast.Close>Close</Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </>
  );
}

describe('Toast', () => {
  it('renders the provider with children', () => {
    render(
      <Toast.Provider>
        <div>content</div>
      </Toast.Provider>,
    );
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('shows toast when added via useToastManager', async () => {
    render(
      <Toast.Provider>
        <ToastHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show toast' }));
    expect(await screen.findByText('Test toast')).toBeInTheDocument();
    expect(await screen.findByText('Test description')).toBeInTheDocument();
  });

  it('closes toast when close button is clicked', async () => {
    render(
      <Toast.Provider timeout={0}>
        <ToastHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show toast' }));
    await screen.findByText('Test toast');
    // Toast.Close has aria-hidden="true" from Base UI, use text query instead
    await userEvent.click(screen.getByText('Close'));
    await waitFor(() => {
      expect(screen.queryByText('Test toast')).not.toBeInTheDocument();
    });
  });

  it('applies custom className to Root', async () => {
    function CustomHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ title: 'Custom' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root
                key={toast.id}
                toast={toast}
                className="custom-root"
                data-testid="toast-root"
              >
                <Toast.Content>
                  <Toast.Title>{toast.title}</Toast.Title>
                  <Toast.Close>Close</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <CustomHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    const root = await screen.findByTestId('toast-root');
    expect(root).toHaveClass('Toast-Root');
    expect(root).toHaveClass('custom-root');
  });

  it('applies custom className to Content', async () => {
    function CustomHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ description: 'Content test' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root key={toast.id} toast={toast}>
                <Toast.Content className="custom-content" data-testid="toast-content">
                  <Toast.Description>{toast.description}</Toast.Description>
                  <Toast.Close>Close</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <CustomHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    const content = await screen.findByTestId('toast-content');
    expect(content).toHaveClass('Toast-Content');
    expect(content).toHaveClass('custom-content');
  });

  it('applies custom className to Title', async () => {
    function CustomHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ title: 'My Title' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root key={toast.id} toast={toast}>
                <Toast.Content>
                  <Toast.Title className="custom-title">{toast.title}</Toast.Title>
                  <Toast.Close>Close</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <CustomHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    const title = await screen.findByText('My Title');
    expect(title).toHaveClass('Toast-Title');
    expect(title).toHaveClass('custom-title');
  });

  it('applies custom className to Description', async () => {
    function CustomHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ description: 'My Desc' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root key={toast.id} toast={toast}>
                <Toast.Content>
                  <Toast.Description className="custom-desc">{toast.description}</Toast.Description>
                  <Toast.Close>Close</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <CustomHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    const desc = await screen.findByText('My Desc');
    expect(desc).toHaveClass('Toast-Description');
    expect(desc).toHaveClass('custom-desc');
  });

  it('applies custom className to Close button', async () => {
    function CustomHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ description: 'close test' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root key={toast.id} toast={toast}>
                <Toast.Content>
                  <Toast.Description>{toast.description}</Toast.Description>
                  <Toast.Close className="custom-close">Dismiss</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <CustomHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    // Toast.Close has aria-hidden="true" from Base UI, use text query instead
    const closeBtn = await screen.findByText('Dismiss');
    expect(closeBtn).toHaveClass('Toast-Close');
    expect(closeBtn).toHaveClass('custom-close');
  });

  it('applies custom className to Action button', async () => {
    function CustomHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ description: 'action test' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root key={toast.id} toast={toast}>
                <Toast.Content>
                  <Toast.Description>{toast.description}</Toast.Description>
                  <Toast.Action className="custom-action">Undo</Toast.Action>
                  <Toast.Close>Close</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <CustomHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    const actionBtn = await screen.findByRole('button', { name: 'Undo' });
    expect(actionBtn).toHaveClass('Toast-Action');
    expect(actionBtn).toHaveClass('custom-action');
  });

  it('forwards ref to Root', async () => {
    const ref = { current: null as HTMLDivElement | null };
    function RefHarness() {
      const { toasts, add } = Toast.useToastManager();
      return (
        <>
          <button onClick={() => add({ title: 'Ref test' })}>Show</button>
          <Toast.Viewport>
            {toasts.map((toast) => (
              <Toast.Root key={toast.id} toast={toast} ref={ref}>
                <Toast.Content>
                  <Toast.Title>{toast.title}</Toast.Title>
                  <Toast.Close>Close</Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))}
          </Toast.Viewport>
        </>
      );
    }
    render(
      <Toast.Provider>
        <RefHarness />
      </Toast.Provider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show' }));
    await screen.findByText('Ref test');
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
