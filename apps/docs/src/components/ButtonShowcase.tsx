import type { FC } from 'react';
import { Button } from '@ontoui/react';
import type { ButtonVariant } from '@ontoui/react';

const variants: ButtonVariant[] = ['primary', 'secondary'];

const label = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Button>Button</Button>
  </div>
);

export const VariantDemo: FC = () => (
  <div className="not-content" style={row}>
    {variants.map((v) => (
      <Button key={v} variant={v}>
        {label(v)}
      </Button>
    ))}
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    {variants.map((v) => (
      <Button key={v} variant={v} disabled>
        {label(v)}
      </Button>
    ))}
  </div>
);
