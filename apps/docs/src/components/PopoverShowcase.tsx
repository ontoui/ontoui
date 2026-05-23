import type { FC } from 'react';
import { Popover } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Popover.Root>
      <Popover.Trigger>Open popover</Popover.Trigger>
      <Popover.Popup>
        <Popover.Title>Popover title</Popover.Title>
        <Popover.Description>This is a popover anchored to the trigger button.</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Popup>
    </Popover.Root>
  </div>
);

export const SideDemo: FC = () => (
  <div className="not-content" style={row}>
    {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
      <Popover.Root key={side}>
        <Popover.Trigger>{side}</Popover.Trigger>
        <Popover.Popup side={side}>
          <Popover.Title>Opens on {side}</Popover.Title>
          <Popover.Close>Close</Popover.Close>
        </Popover.Popup>
      </Popover.Root>
    ))}
  </div>
);
