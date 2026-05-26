import * as React from 'react';
import { OTPFieldPreview as BaseOTPField } from '@base-ui/react/otp-field';
import styles from './OtpField.module.css';

export type OtpFieldValidationType = 'numeric' | 'alpha' | 'alphanumeric' | 'none';

export interface OtpFieldRootProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  name?: string;
  length: number;
  defaultValue?: string;
  value?: string;
  autoComplete?: string;
  autoSubmit?: boolean;
  form?: string;
  mask?: boolean;
  validationType?: OtpFieldValidationType;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onValueChange?: (value: string) => void;
  onValueComplete?: (value: string) => void;
  onValueInvalid?: (value: string) => void;
}

const Root = React.forwardRef<HTMLDivElement, OtpFieldRootProps>(function Root(
  { children, id, className, ...rest },
  ref,
) {
  const cls = [styles['OtpField-Root'], className].filter(Boolean).join(' ');

  return (
    <BaseOTPField.Root ref={ref} id={id} className={cls} {...rest}>
      {children}
    </BaseOTPField.Root>
  );
});
Root.displayName = 'OtpField.Root';

export interface OtpFieldInputProps {
  className?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, OtpFieldInputProps>(function Input(
  { className, ...rest },
  ref,
) {
  const cls = [styles['OtpField-Input'], className].filter(Boolean).join(' ');

  return <BaseOTPField.Input ref={ref} className={cls} {...rest} />;
});
Input.displayName = 'OtpField.Input';

export interface OtpFieldSeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Separator = React.forwardRef<HTMLDivElement, OtpFieldSeparatorProps>(function Separator(
  { className, ...rest },
  ref,
) {
  const cls = [styles['OtpField-Separator'], className].filter(Boolean).join(' ');

  return <BaseOTPField.Separator ref={ref} className={cls} {...rest} />;
});
Separator.displayName = 'OtpField.Separator';

export const OtpField = {
  Root,
  Input,
  Separator,
};
