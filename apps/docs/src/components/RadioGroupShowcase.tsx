import type { FC } from 'react';
import { Radio, RadioGroup } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

const labelStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <RadioGroup defaultValue="ssd">
      <label style={labelStyle}>
        <Radio value="ssd" />
        SSD
      </label>
      <label style={labelStyle}>
        <Radio value="hdd" />
        HDD
      </label>
      <label style={labelStyle}>
        <Radio value="nvme" />
        NVMe
      </label>
    </RadioGroup>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <RadioGroup defaultValue="ssd" disabled>
      <label style={{ ...labelStyle, cursor: 'not-allowed' }}>
        <Radio value="ssd" />
        SSD
      </label>
      <label style={{ ...labelStyle, cursor: 'not-allowed' }}>
        <Radio value="hdd" />
        HDD
      </label>
    </RadioGroup>
  </div>
);
