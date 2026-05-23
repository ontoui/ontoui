import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import styles from './Switch.module.css';

export interface SwitchRootProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  form?: string;
  nativeButton?: boolean;
  uncheckedValue?: string;
  onCheckedChange?: React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>['onCheckedChange'];
}

const Root = React.forwardRef<HTMLSpanElement, SwitchRootProps>(function Root(
  {
    children,
    id,
    className,
    checked,
    defaultChecked,
    disabled,
    readOnly,
    required,
    name,
    value,
    form,
    nativeButton,
    uncheckedValue,
    onCheckedChange,
    ...rest
  },
  ref,
) {
  const cls = [styles['Switch-Root'], className].filter(Boolean).join(' ');

  return (
    <BaseSwitch.Root
      ref={ref}
      id={id}
      className={cls}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      value={value}
      form={form}
      nativeButton={nativeButton}
      uncheckedValue={uncheckedValue}
      onCheckedChange={onCheckedChange}
      {...rest}
    >
      {children}
    </BaseSwitch.Root>
  );
});
Root.displayName = 'Switch.Root';

export interface SwitchThumbProps {
  className?: string;
}

const Thumb = React.forwardRef<HTMLSpanElement, SwitchThumbProps>(function Thumb(
  { className, ...rest },
  ref,
) {
  const cls = [styles['Switch-Thumb'], className].filter(Boolean).join(' ');

  return <BaseSwitch.Thumb ref={ref} className={cls} {...rest} />;
});
Thumb.displayName = 'Switch.Thumb';

export const Switch = { Root, Thumb };
