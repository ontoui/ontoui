import * as React from 'react';
import { Field } from '@base-ui/react/field';
import styles from './TextField.module.css';

export interface TextFieldRootProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
}

const Root = React.forwardRef<HTMLDivElement, TextFieldRootProps>(function Root(
  { children, className, name, disabled, invalid, ...rest },
  ref,
) {
  const cls = [styles['TextField-Root'], className].filter(Boolean).join(' ');

  return (
    <Field.Root
      ref={ref}
      className={cls}
      name={name}
      disabled={disabled}
      invalid={invalid}
      {...rest}
    >
      {children}
    </Field.Root>
  );
});
Root.displayName = 'TextField.Root';

export interface TextFieldLabelProps {
  children?: React.ReactNode;
  className?: string;
}

const Label = React.forwardRef<HTMLLabelElement, TextFieldLabelProps>(function Label(
  { children, className, ...rest },
  ref,
) {
  const cls = [styles['TextField-Label'], className].filter(Boolean).join(' ');

  return (
    <Field.Label ref={ref} className={cls} {...rest}>
      {children}
    </Field.Label>
  );
});
Label.displayName = 'TextField.Label';

export interface TextFieldControlProps {
  id?: string;
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Control = React.forwardRef<HTMLInputElement, TextFieldControlProps>(function Control(
  { className, ...rest },
  ref,
) {
  const cls = [styles['TextField-Control'], className].filter(Boolean).join(' ');

  return <Field.Control ref={ref} className={cls} {...rest} />;
});
Control.displayName = 'TextField.Control';

export interface TextFieldDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

const Description = React.forwardRef<HTMLParagraphElement, TextFieldDescriptionProps>(
  function Description({ children, className, ...rest }, ref) {
    const cls = [styles['TextField-Description'], className].filter(Boolean).join(' ');

    return (
      <Field.Description ref={ref} className={cls} {...rest}>
        {children}
      </Field.Description>
    );
  },
);
Description.displayName = 'TextField.Description';

export interface TextFieldErrorProps {
  children?: React.ReactNode;
  className?: string;
}

const Error = React.forwardRef<HTMLDivElement, TextFieldErrorProps>(function Error(
  { children, className, ...rest },
  ref,
) {
  const cls = [styles['TextField-Error'], className].filter(Boolean).join(' ');

  return (
    <Field.Error ref={ref} className={cls} {...rest}>
      {children}
    </Field.Error>
  );
});
Error.displayName = 'TextField.Error';

export const TextField = {
  Root,
  Label,
  Control,
  Description,
  Error,
};
