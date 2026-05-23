import * as React from 'react';
import { Select as SelectBase } from '@base-ui/react/select';
import styles from './Select.module.css';

export interface SelectRootProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  open?: boolean;
  required?: boolean;
  value?: string;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string | null) => void;
}

const Root = function Root({
  children,
  defaultOpen,
  defaultValue,
  disabled,
  name,
  open,
  required,
  value,
  onOpenChange,
  onValueChange,
}: SelectRootProps) {
  return (
    <SelectBase.Root
      defaultOpen={defaultOpen}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      open={open}
      required={required}
      value={value}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      {children}
    </SelectBase.Root>
  );
};
Root.displayName = 'Select.Root';

export interface SelectLabelProps {
  children?: React.ReactNode;
  className?: string;
}

const Label = React.forwardRef<HTMLDivElement, SelectLabelProps>(function Label(
  { children, className, ...rest },
  ref,
) {
  return (
    <SelectBase.Label
      ref={ref}
      className={[styles['Select-Label'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </SelectBase.Label>
  );
});
Label.displayName = 'Select.Label';

export interface SelectTriggerProps {
  className?: string;
  placeholder?: string;
}

const Trigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(function Trigger(
  { className, placeholder, ...rest },
  ref,
) {
  return (
    <SelectBase.Trigger
      ref={ref}
      className={[styles['Select-Trigger'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      <SelectBase.Value className={styles['Select-Value']} placeholder={placeholder} />
      <SelectBase.Icon className={styles['Select-Icon']}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectBase.Icon>
    </SelectBase.Trigger>
  );
});
Trigger.displayName = 'Select.Trigger';

export interface SelectPopupProps {
  children?: React.ReactNode;
  className?: string;
  alignItemWithTrigger?: boolean;
}

const Popup = React.forwardRef<HTMLDivElement, SelectPopupProps>(function Popup(
  { children, className, alignItemWithTrigger = true, ...rest },
  ref,
) {
  return (
    <SelectBase.Portal>
      <SelectBase.Positioner alignItemWithTrigger={alignItemWithTrigger}>
        <SelectBase.Popup
          ref={ref}
          className={[styles['Select-Popup'], className].filter(Boolean).join(' ')}
          {...rest}
        >
          <SelectBase.ScrollUpArrow className={styles['Select-ScrollArrow']} />
          <SelectBase.List className={styles['Select-List']}>{children}</SelectBase.List>
          <SelectBase.ScrollDownArrow className={styles['Select-ScrollArrow']} />
        </SelectBase.Popup>
      </SelectBase.Positioner>
    </SelectBase.Portal>
  );
});
Popup.displayName = 'Select.Popup';

export interface SelectItemProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

const Item = React.forwardRef<HTMLDivElement, SelectItemProps>(function Item(
  { children, className, value, disabled, ...rest },
  ref,
) {
  return (
    <SelectBase.Item
      ref={ref}
      value={value}
      disabled={disabled}
      className={[styles['Select-Item'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      <SelectBase.ItemText>{children}</SelectBase.ItemText>
      <SelectBase.ItemIndicator className={styles['Select-ItemIndicator']}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectBase.ItemIndicator>
    </SelectBase.Item>
  );
});
Item.displayName = 'Select.Item';

export interface SelectGroupProps {
  children?: React.ReactNode;
  className?: string;
}

const Group = React.forwardRef<HTMLDivElement, SelectGroupProps>(function Group(
  { children, className, ...rest },
  ref,
) {
  return (
    <SelectBase.Group
      ref={ref}
      className={[styles['Select-Group'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </SelectBase.Group>
  );
});
Group.displayName = 'Select.Group';

export interface SelectGroupLabelProps {
  children?: React.ReactNode;
  className?: string;
}

const GroupLabel = React.forwardRef<HTMLDivElement, SelectGroupLabelProps>(function GroupLabel(
  { children, className, ...rest },
  ref,
) {
  return (
    <SelectBase.GroupLabel
      ref={ref}
      className={[styles['Select-GroupLabel'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </SelectBase.GroupLabel>
  );
});
GroupLabel.displayName = 'Select.GroupLabel';

export interface SelectSeparatorProps {
  className?: string;
}

const Separator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(function Separator(
  { className, ...rest },
  ref,
) {
  return (
    <SelectBase.Separator
      ref={ref}
      className={[styles['Select-Separator'], className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
});
Separator.displayName = 'Select.Separator';

export const Select = {
  Root,
  Label,
  Trigger,
  Popup,
  Item,
  Group,
  GroupLabel,
  Separator,
};
