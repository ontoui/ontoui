import * as React from 'react';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onValueChange?: React.ComponentPropsWithoutRef<typeof BaseRadioGroup>['onValueChange'];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  {
    children,
    id,
    className,
    name,
    value,
    defaultValue,
    disabled,
    readOnly,
    required,
    onValueChange,
    ...rest
  },
  ref,
) {
  const cls = [styles.RadioGroup, className].filter(Boolean).join(' ');

  return (
    <BaseRadioGroup
      ref={ref}
      id={id}
      className={cls}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      onValueChange={onValueChange}
      {...rest}
    >
      {children}
    </BaseRadioGroup>
  );
});
RadioGroup.displayName = 'RadioGroup';
