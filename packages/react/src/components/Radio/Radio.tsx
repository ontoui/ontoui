import * as React from 'react';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import styles from './Radio.module.css';

const Indicator = React.forwardRef<HTMLSpanElement, { keepMounted?: boolean }>(function Indicator(
  { keepMounted, ...rest },
  ref,
) {
  return (
    <BaseRadio.Indicator
      ref={ref}
      className={styles['Radio-Indicator']}
      keepMounted={keepMounted}
      {...rest}
    />
  );
});
Indicator.displayName = 'Radio.Indicator';

export interface RadioProps {
  id?: string;
  className?: string;
  value: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  nativeButton?: boolean;
}

export const Radio = React.forwardRef<HTMLSpanElement, RadioProps>(function Radio(
  { id, className, value, disabled, readOnly, required, nativeButton, ...rest },
  ref,
) {
  const cls = [styles.Radio, className].filter(Boolean).join(' ');

  return (
    <BaseRadio.Root
      ref={ref}
      id={id}
      className={cls}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      nativeButton={nativeButton}
      {...rest}
    >
      <Indicator />
    </BaseRadio.Root>
  );
});
Radio.displayName = 'Radio';
