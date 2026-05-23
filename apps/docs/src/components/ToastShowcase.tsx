import type { FC } from 'react';
import { Button, Toast } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

function GeneralToasts() {
  const { toasts, add } = Toast.useToastManager();
  return (
    <>
      <div className="not-content" style={row}>
        <Button
          onClick={() => add({ title: 'Heads up!', description: 'Your changes have been saved.' })}
        >
          Show toast
        </Button>
      </div>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast}>
            <Toast.Content>
              <Toast.Title>{toast.title}</Toast.Title>
              <Toast.Description>{toast.description}</Toast.Description>
              <Toast.Close>✕</Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </>
  );
}

export const GeneralDemo: FC = () => (
  <Toast.Provider>
    <GeneralToasts />
  </Toast.Provider>
);

function ActionToasts() {
  const { toasts, add, close } = Toast.useToastManager();
  return (
    <>
      <div className="not-content" style={row}>
        <Button
          onClick={() =>
            add({
              title: 'File deleted',
              description: 'report.pdf has been removed.',
            })
          }
        >
          Delete file
        </Button>
      </div>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast}>
            <Toast.Content>
              <Toast.Title>{toast.title}</Toast.Title>
              <Toast.Description>{toast.description}</Toast.Description>
              <Toast.Action onClick={() => close(toast.id)}>Undo</Toast.Action>
              <Toast.Close>✕</Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </>
  );
}

export const ActionDemo: FC = () => (
  <Toast.Provider>
    <ActionToasts />
  </Toast.Provider>
);
