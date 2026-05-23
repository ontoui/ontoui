import type { FC } from 'react';
import { Slider } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Slider.Root defaultValue={50} style={{ width: '280px' }}>
      <Slider.Label>Volume</Slider.Label>
      <Slider.Value />
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb aria-label="Volume" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  </div>
);

export const RangeDemo: FC = () => (
  <div className="not-content" style={row}>
    <Slider.Root defaultValue={[20, 80]} style={{ width: '280px' }}>
      <Slider.Label>Price range</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb index={0} aria-label="Minimum price" />
          <Slider.Thumb index={1} aria-label="Maximum price" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <Slider.Root defaultValue={40} disabled style={{ width: '280px' }}>
      <Slider.Label>Brightness</Slider.Label>
      <Slider.Value />
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb aria-label="Brightness" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  </div>
);
