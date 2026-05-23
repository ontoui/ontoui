import type { FC } from 'react';
import { TextField } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <TextField.Root style={{ width: 280 }}>
      <TextField.Label>Email</TextField.Label>
      <TextField.Control type="email" placeholder="you@example.com" />
      <TextField.Description>We&apos;ll never share your email.</TextField.Description>
    </TextField.Root>
  </div>
);

export const InvalidDemo: FC = () => (
  <div className="not-content" style={row}>
    <TextField.Root invalid style={{ width: 280 }}>
      <TextField.Label>Username</TextField.Label>
      <TextField.Control placeholder="Enter username" />
      <TextField.Error>Username is required.</TextField.Error>
    </TextField.Root>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <TextField.Root disabled style={{ width: 280 }}>
      <TextField.Label>Read-only field</TextField.Label>
      <TextField.Control placeholder="Disabled input" />
    </TextField.Root>
  </div>
);
