import * as React from 'react';
import { Dialog } from '@base-ui/react/dialog';
import styles from './Modal.module.css';
import { Button } from '../Button';

export interface ModalRootProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Root = function Root({ children, open, onOpenChange }: ModalRootProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
};
Root.displayName = 'Modal.Root';

export interface ModalTriggerProps {
  children?: React.ReactNode;
  /** @default <Button /> */
  render?: React.ReactElement;
}

const Trigger = function Trigger({ children, render = <Button /> }: ModalTriggerProps) {
  return <Dialog.Trigger render={render}>{children}</Dialog.Trigger>;
};
Trigger.displayName = 'Modal.Trigger';

export interface ModalPanelProps {
  children?: React.ReactNode;
  className?: string;
}

const Panel = React.forwardRef<HTMLDivElement, ModalPanelProps>(function Panel(
  { children, className, ...rest },
  ref,
) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className={[styles['Modal-Backdrop']].filter(Boolean).join(' ')} />
      <Dialog.Popup
        ref={ref}
        className={[styles['Modal-Panel'], className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </Dialog.Popup>
    </Dialog.Portal>
  );
});
Panel.displayName = 'Modal.Panel';

export interface ModalTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(function Title(
  { children, className, ...rest },
  ref,
) {
  return (
    <Dialog.Title
      ref={ref}
      className={[styles['Modal-Title'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Dialog.Title>
  );
});
Title.displayName = 'Modal.Title';

export interface ModalDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

const Description = React.forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  function Description({ children, className, ...rest }, ref) {
    return (
      <Dialog.Description
        ref={ref}
        className={[styles['Modal-Description'], className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </Dialog.Description>
    );
  },
);
Description.displayName = 'Modal.Description';

export interface ModalCloseProps {
  children?: React.ReactNode;
  className?: string;
  render?: React.ReactElement;
}

const Close = React.forwardRef<HTMLButtonElement, ModalCloseProps>(function Close(
  { children, className, render = <Button variant="secondary" />, ...rest },
  ref,
) {
  return (
    <Dialog.Close
      ref={ref}
      className={[styles['Modal-Close'], className].filter(Boolean).join(' ')}
      render={render}
      {...rest}
    >
      {children}
    </Dialog.Close>
  );
});
Close.displayName = 'Modal.Close';

export const Modal = {
  Root,
  Trigger,
  Panel,
  Title,
  Description,
  Close,
};
