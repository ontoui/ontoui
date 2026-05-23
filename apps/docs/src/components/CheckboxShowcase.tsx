import type { FC } from 'react';
import { Checkbox } from '@ontoui/react';

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
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Accept terms and conditions
    </label>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <label
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed' }}
    >
      <Checkbox.Root disabled>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Disabled unchecked
    </label>
    <label
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed' }}
    >
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Disabled checked
    </label>
  </div>
);

export const IndeterminateDemo: FC = () => (
  <div className="not-content" style={row}>
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <Checkbox.Root indeterminate>
        <Checkbox.Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
          >
            <path d="M2 5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      Indeterminate
    </label>
  </div>
);
