import * as React from 'react';
import { Popover as BasePopover } from '@base-ui/react/popover';
import styles from './Popover.module.css';
import { Button } from '../Button';

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverRootProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const Root = function Root({ children, open, onOpenChange, defaultOpen }: PopoverRootProps) {
  return (
    <BasePopover.Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      {children}
    </BasePopover.Root>
  );
};
Root.displayName = 'Popover.Root';

export interface PopoverTriggerProps {
  children?: React.ReactNode;
  className?: string;
  render?: React.ReactElement;
}

const Trigger = function Trigger({
  children,
  className,
  render = <Button />,
}: PopoverTriggerProps) {
  return (
    <BasePopover.Trigger className={className} render={render}>
      {children}
    </BasePopover.Trigger>
  );
};
Trigger.displayName = 'Popover.Trigger';

export interface PopoverPopupProps {
  children?: React.ReactNode;
  className?: string;
  side?: PopoverSide;
  sideOffset?: number;
}

const Popup = React.forwardRef<HTMLDivElement, PopoverPopupProps>(function Popup(
  { children, className, side = 'bottom', sideOffset = 8, ...rest },
  ref,
) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner side={side} sideOffset={sideOffset}>
        <BasePopover.Popup
          ref={ref}
          className={[styles['Popover-Popup'], className].filter(Boolean).join(' ')}
          {...rest}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
});
Popup.displayName = 'Popover.Popup';

export interface PopoverTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title = React.forwardRef<HTMLHeadingElement, PopoverTitleProps>(function Title(
  { children, className, ...rest },
  ref,
) {
  return (
    <BasePopover.Title
      ref={ref}
      className={[styles['Popover-Title'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BasePopover.Title>
  );
});
Title.displayName = 'Popover.Title';

export interface PopoverDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

const Description = React.forwardRef<HTMLParagraphElement, PopoverDescriptionProps>(
  function Description({ children, className, ...rest }, ref) {
    return (
      <BasePopover.Description
        ref={ref}
        className={[styles['Popover-Description'], className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </BasePopover.Description>
    );
  },
);
Description.displayName = 'Popover.Description';

export interface PopoverCloseProps {
  children?: React.ReactNode;
  className?: string;
  render?: React.ReactElement;
}

const Close = React.forwardRef<HTMLButtonElement, PopoverCloseProps>(function Close(
  { children, className, render = <Button variant="secondary" />, ...rest },
  ref,
) {
  return (
    <BasePopover.Close
      ref={ref}
      className={[styles['Popover-Close'], className].filter(Boolean).join(' ')}
      render={render}
      {...rest}
    >
      {children}
    </BasePopover.Close>
  );
});
Close.displayName = 'Popover.Close';

export const Popover = {
  Root,
  Trigger,
  Popup,
  Title,
  Description,
  Close,
};
