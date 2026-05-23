import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import styles from './Checkbox.module.css';

export interface CheckboxRootProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  onCheckedChange?: React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>['onCheckedChange'];
}

const Root = React.forwardRef<HTMLSpanElement, CheckboxRootProps>(function Root(
  {
    children,
    id,
    className,
    checked,
    defaultChecked,
    indeterminate,
    disabled,
    readOnly,
    required,
    name,
    value,
    onCheckedChange,
    ...rest
  },
  ref,
) {
  const cls = [styles['Checkbox-Root'], className].filter(Boolean).join(' ');

  return (
    <BaseCheckbox.Root
      ref={ref}
      id={id}
      className={cls}
      checked={checked}
      defaultChecked={defaultChecked}
      indeterminate={indeterminate}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      value={value}
      onCheckedChange={onCheckedChange}
      {...rest}
    >
      {children}
    </BaseCheckbox.Root>
  );
});
Root.displayName = 'Checkbox.Root';

export interface CheckboxIndicatorProps {
  children?: React.ReactNode;
  className?: string;
  keepMounted?: boolean;
}

const Indicator = React.forwardRef<HTMLSpanElement, CheckboxIndicatorProps>(function Indicator(
  { children, className, keepMounted, ...rest },
  ref,
) {
  const cls = [styles['Checkbox-Indicator'], className].filter(Boolean).join(' ');

  return (
    <BaseCheckbox.Indicator ref={ref} className={cls} keepMounted={keepMounted} {...rest}>
      {children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1.5 5L3.5 7.5L8.5 2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </BaseCheckbox.Indicator>
  );
});
Indicator.displayName = 'Checkbox.Indicator';

export const Checkbox = { Root, Indicator };
