import * as React from 'react';
import { Slider as BaseSlider } from '@base-ui/react/slider';
import styles from './Slider.module.css';

export interface SliderRootProps {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: number | number[];
  value?: number | number[];
  onValueChange?: (
    value: number | number[],
    eventDetails: { event: Event; activeThumbIndex: number },
  ) => void;
  onValueCommitted?: (value: number | number[], eventDetails: { event: Event }) => void;
  min?: number;
  max?: number;
  step?: number;
  largeStep?: number;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  name?: string;
}

const Root = React.forwardRef<HTMLDivElement, SliderRootProps>(function Root(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Root
      ref={ref}
      className={[styles.Slider, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseSlider.Root>
  );
});
Root.displayName = 'Slider.Root';

export interface SliderLabelProps {
  children?: React.ReactNode;
  className?: string;
}

const Label = React.forwardRef<HTMLDivElement, SliderLabelProps>(function Label(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Label
      ref={ref}
      className={[styles['Slider-Label'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseSlider.Label>
  );
});
Label.displayName = 'Slider.Label';

export interface SliderValueProps {
  className?: string;
  children?: (formattedValues: readonly string[], values: readonly number[]) => React.ReactNode;
}

const Value = React.forwardRef<HTMLOutputElement, SliderValueProps>(function Value(
  { className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Value
      ref={ref}
      className={[styles['Slider-Value'], className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
});
Value.displayName = 'Slider.Value';

export interface SliderControlProps {
  children?: React.ReactNode;
  className?: string;
}

const Control = React.forwardRef<HTMLDivElement, SliderControlProps>(function Control(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Control
      ref={ref}
      className={[styles['Slider-Control'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseSlider.Control>
  );
});
Control.displayName = 'Slider.Control';

export interface SliderTrackProps {
  children?: React.ReactNode;
  className?: string;
}

const Track = React.forwardRef<HTMLDivElement, SliderTrackProps>(function Track(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Track
      ref={ref}
      className={[styles['Slider-Track'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseSlider.Track>
  );
});
Track.displayName = 'Slider.Track';

export interface SliderIndicatorProps {
  className?: string;
}

const Indicator = React.forwardRef<HTMLDivElement, SliderIndicatorProps>(function Indicator(
  { className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Indicator
      ref={ref}
      className={[styles['Slider-Indicator'], className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
});
Indicator.displayName = 'Slider.Indicator';

export interface SliderThumbProps {
  className?: string;
  index?: number;
  'aria-label'?: string;
  disabled?: boolean;
  tabIndex?: number;
}

const Thumb = React.forwardRef<HTMLDivElement, SliderThumbProps>(function Thumb(
  { className, ...rest },
  ref,
) {
  return (
    <BaseSlider.Thumb
      ref={ref}
      className={[styles['Slider-Thumb'], className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
});
Thumb.displayName = 'Slider.Thumb';

export const Slider = {
  Root,
  Label,
  Value,
  Control,
  Track,
  Indicator,
  Thumb,
};
