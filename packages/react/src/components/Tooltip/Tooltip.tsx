import * as React from 'react';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import styles from './Tooltip.module.css';

export interface TooltipProviderProps {
  children?: React.ReactNode;
  delay?: number;
  closeDelay?: number;
  timeout?: number;
}

const Provider = function Provider({ children, delay, closeDelay, timeout }: TooltipProviderProps) {
  return (
    <BaseTooltip.Provider delay={delay} closeDelay={closeDelay} timeout={timeout}>
      {children}
    </BaseTooltip.Provider>
  );
};
Provider.displayName = 'Tooltip.Provider';

export interface TooltipRootProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  disabled?: boolean;
}

const Root = function Root({
  children,
  open,
  onOpenChange,
  defaultOpen,
  disabled,
}: TooltipRootProps) {
  return (
    <BaseTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      disableHoverablePopup
      disabled={disabled}
      onOpenChange={onOpenChange}
    >
      {children}
    </BaseTooltip.Root>
  );
};
Root.displayName = 'Tooltip.Root';

export interface TooltipTriggerProps {
  children?: React.ReactNode;
  className?: string;
  render?: React.ReactElement;
}

const Trigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(function Trigger(
  { children, className, render, ...rest },
  ref,
) {
  return (
    <BaseTooltip.Trigger ref={ref} className={className} render={render} {...rest}>
      {children}
    </BaseTooltip.Trigger>
  );
});
Trigger.displayName = 'Tooltip.Trigger';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipContentProps {
  children?: React.ReactNode;
  className?: string;
  side?: TooltipSide;
  sideOffset?: number;
}

const Content = React.forwardRef<HTMLDivElement, TooltipContentProps>(function Content(
  { children, className, side = 'top', sideOffset = 8, ...rest },
  ref,
) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner side={side} sideOffset={sideOffset}>
        <BaseTooltip.Popup
          ref={ref}
          className={[styles['Tooltip-Content'], className].filter(Boolean).join(' ')}
          {...rest}
        >
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
});
Content.displayName = 'Tooltip.Content';

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Content,
};
