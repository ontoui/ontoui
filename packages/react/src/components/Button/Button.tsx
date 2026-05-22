import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';

import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  children?: string | string[];
  id?: string;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, id, className, variant = 'primary', disabled = false, onClick, onFocus, onBlur },
  ref,
) {
  const cls = [styles.Button, styles[`Button_variant_${variant}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <BaseButton
      ref={ref}
      id={id}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </BaseButton>
  );
});

Button.displayName = 'Button';
