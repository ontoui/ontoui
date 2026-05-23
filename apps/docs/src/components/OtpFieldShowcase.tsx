import type { FC } from 'react';
import { OtpField } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <OtpField.Root length={6}>
      <OtpField.Input aria-label="Character 1 of 6" />
      <OtpField.Input aria-label="Character 2 of 6" />
      <OtpField.Input aria-label="Character 3 of 6" />
      <OtpField.Input aria-label="Character 4 of 6" />
      <OtpField.Input aria-label="Character 5 of 6" />
      <OtpField.Input aria-label="Character 6 of 6" />
    </OtpField.Root>
  </div>
);

export const GroupedDemo: FC = () => (
  <div className="not-content" style={row}>
    <OtpField.Root length={6}>
      <OtpField.Input aria-label="Character 1 of 6" />
      <OtpField.Input aria-label="Character 2 of 6" />
      <OtpField.Input aria-label="Character 3 of 6" />
      <OtpField.Separator />
      <OtpField.Input aria-label="Character 4 of 6" />
      <OtpField.Input aria-label="Character 5 of 6" />
      <OtpField.Input aria-label="Character 6 of 6" />
    </OtpField.Root>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <OtpField.Root length={6} disabled>
      <OtpField.Input aria-label="Character 1 of 6" />
      <OtpField.Input aria-label="Character 2 of 6" />
      <OtpField.Input aria-label="Character 3 of 6" />
      <OtpField.Input aria-label="Character 4 of 6" />
      <OtpField.Input aria-label="Character 5 of 6" />
      <OtpField.Input aria-label="Character 6 of 6" />
    </OtpField.Root>
  </div>
);
