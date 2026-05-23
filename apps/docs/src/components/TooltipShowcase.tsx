import type { FC } from 'react';
import { Tooltip } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  </div>
);

export const PlacementDemo: FC = () => (
  <div className="not-content" style={row}>
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>Top</Tooltip.Trigger>
        <Tooltip.Content side="top">Tooltip on top</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger>Right</Tooltip.Trigger>
        <Tooltip.Content side="right">Tooltip on right</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger>Bottom</Tooltip.Trigger>
        <Tooltip.Content side="bottom">Tooltip on bottom</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger>Left</Tooltip.Trigger>
        <Tooltip.Content side="left">Tooltip on left</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  </div>
);
