import * as React from 'react';
import { Toast as BaseToast } from '@base-ui/react/toast';
import styles from './Toast.module.css';

export interface ToastProviderProps {
  children?: React.ReactNode;
  limit?: number;
  timeout?: number;
  toastManager?: React.ComponentProps<typeof BaseToast.Provider>['toastManager'];
}

const Provider = function Provider({ children, limit, timeout, toastManager }: ToastProviderProps) {
  return (
    <BaseToast.Provider limit={limit} timeout={timeout} toastManager={toastManager}>
      {children}
    </BaseToast.Provider>
  );
};
Provider.displayName = 'Toast.Provider';

export interface ToastViewportProps {
  children?: React.ReactNode;
  className?: string;
}

const Viewport = React.forwardRef<HTMLDivElement, ToastViewportProps>(function Viewport(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseToast.Portal>
      <BaseToast.Viewport
        ref={ref}
        className={[styles['Toast-Viewport'], className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </BaseToast.Viewport>
    </BaseToast.Portal>
  );
});
Viewport.displayName = 'Toast.Viewport';

export interface ToastRootProps {
  children?: React.ReactNode;
  className?: string;
  toast: React.ComponentProps<typeof BaseToast.Root>['toast'];
  swipeDirection?: React.ComponentProps<typeof BaseToast.Root>['swipeDirection'];
}

const Root = React.forwardRef<HTMLDivElement, ToastRootProps>(function Root(
  { children, className, toast, swipeDirection, ...rest },
  ref,
) {
  return (
    <BaseToast.Root
      ref={ref}
      toast={toast}
      swipeDirection={swipeDirection}
      className={[styles['Toast-Root'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseToast.Root>
  );
});
Root.displayName = 'Toast.Root';

export interface ToastContentProps {
  children?: React.ReactNode;
  className?: string;
}

const Content = React.forwardRef<HTMLDivElement, ToastContentProps>(function Content(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseToast.Content
      ref={ref}
      className={[styles['Toast-Content'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseToast.Content>
  );
});
Content.displayName = 'Toast.Content';

export interface ToastTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title = React.forwardRef<HTMLHeadingElement, ToastTitleProps>(function Title(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseToast.Title
      ref={ref}
      className={[styles['Toast-Title'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseToast.Title>
  );
});
Title.displayName = 'Toast.Title';

export interface ToastDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

const Description = React.forwardRef<HTMLParagraphElement, ToastDescriptionProps>(
  function Description({ children, className, ...rest }, ref) {
    return (
      <BaseToast.Description
        ref={ref}
        className={[styles['Toast-Description'], className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </BaseToast.Description>
    );
  },
);
Description.displayName = 'Toast.Description';

export interface ToastCloseProps {
  children?: React.ReactNode;
  className?: string;
}

const Close = React.forwardRef<HTMLButtonElement, ToastCloseProps>(function Close(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseToast.Close
      ref={ref}
      className={[styles['Toast-Close'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseToast.Close>
  );
});
Close.displayName = 'Toast.Close';

export interface ToastActionProps {
  children?: React.ReactNode;
  className?: string;
}

const Action = React.forwardRef<HTMLButtonElement, ToastActionProps>(function Action(
  { children, className, ...rest },
  ref,
) {
  return (
    <BaseToast.Action
      ref={ref}
      className={[styles['Toast-Action'], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </BaseToast.Action>
  );
});
Action.displayName = 'Toast.Action';

export const Toast = {
  Provider,
  Viewport,
  Root,
  Content,
  Title,
  Description,
  Close,
  Action,
  useToastManager: BaseToast.useToastManager,
  createToastManager: BaseToast.createToastManager,
};
