import type { FC } from 'react';
import { Select } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <div style={{ width: '200px' }}>
      <Select.Root>
        <Select.Label>Fruit</Select.Label>
        <Select.Trigger placeholder="Choose a fruit" />
        <Select.Popup>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="mango">Mango</Select.Item>
        </Select.Popup>
      </Select.Root>
    </div>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <div style={{ width: '200px' }}>
      <Select.Root disabled>
        <Select.Label>Fruit</Select.Label>
        <Select.Trigger placeholder="Choose a fruit" />
        <Select.Popup>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Popup>
      </Select.Root>
    </div>
  </div>
);

export const GroupedDemo: FC = () => (
  <div className="not-content" style={row}>
    <div style={{ width: '200px' }}>
      <Select.Root>
        <Select.Label>Produce</Select.Label>
        <Select.Trigger placeholder="Choose an item" />
        <Select.Popup>
          <Select.Group>
            <Select.GroupLabel>Fruits</Select.GroupLabel>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.GroupLabel>Vegetables</Select.GroupLabel>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="lettuce">Lettuce</Select.Item>
            <Select.Item value="spinach">Spinach</Select.Item>
          </Select.Group>
        </Select.Popup>
      </Select.Root>
    </div>
  </div>
);
