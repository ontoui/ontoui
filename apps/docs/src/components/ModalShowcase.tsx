import type { FC } from 'react';
import { Modal } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Modal.Root>
      <Modal.Trigger>Open modal</Modal.Trigger>
      <Modal.Panel>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.Description>
          This is a modal dialog. Press Escape or click the button to close it.
        </Modal.Description>
        <Modal.Close>Close</Modal.Close>
      </Modal.Panel>
    </Modal.Root>
  </div>
);
