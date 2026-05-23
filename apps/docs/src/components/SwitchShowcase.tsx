import type { FC } from 'react';
import { Switch } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>
      Notifications
    </label>
  </div>
);

export const DefaultCheckedDemo: FC = () => (
  <div className="not-content" style={row}>
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <Switch.Root defaultChecked>
        <Switch.Thumb />
      </Switch.Root>
      Enabled by default
    </label>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <label
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed' }}
    >
      <Switch.Root disabled>
        <Switch.Thumb />
      </Switch.Root>
      Disabled off
    </label>
    <label
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed' }}
    >
      <Switch.Root disabled defaultChecked>
        <Switch.Thumb />
      </Switch.Root>
      Disabled on
    </label>
  </div>
);
