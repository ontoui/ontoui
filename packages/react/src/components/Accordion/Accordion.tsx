import * as React from 'react';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import styles from './Accordion.module.css';

export interface AccordionRootProps {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  multiple?: boolean;
  disabled?: boolean;
}

const Root = function Root({ children, className, ...rest }: AccordionRootProps) {
  const cls = [styles.Accordion, className].filter(Boolean).join(' ');
  return (
    <BaseAccordion.Root className={cls} {...rest}>
      {children}
    </BaseAccordion.Root>
  );
};
Root.displayName = 'Accordion.Root';

export interface AccordionItemProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

const Item = React.forwardRef<HTMLDivElement, AccordionItemProps>(function Item(
  { children, className, value, disabled, ...rest },
  ref,
) {
  const cls = [styles['Accordion-Item'], className].filter(Boolean).join(' ');
  return (
    <BaseAccordion.Item ref={ref} className={cls} value={value} disabled={disabled} {...rest}>
      {children}
    </BaseAccordion.Item>
  );
});
Item.displayName = 'Accordion.Item';

export interface AccordionHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = React.forwardRef<HTMLHeadingElement, AccordionHeaderProps>(function Header(
  { children, className, ...rest },
  ref,
) {
  const cls = [styles['Accordion-Header'], className].filter(Boolean).join(' ');
  return (
    <BaseAccordion.Header ref={ref} className={cls} {...rest}>
      {children}
    </BaseAccordion.Header>
  );
});
Header.displayName = 'Accordion.Header';

export interface AccordionTriggerProps {
  children?: React.ReactNode;
  className?: string;
}

const Trigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(function Trigger(
  { children, className, ...rest },
  ref,
) {
  const cls = [styles['Accordion-Trigger'], className].filter(Boolean).join(' ');
  return (
    <BaseAccordion.Trigger ref={ref} className={cls} {...rest}>
      {children}
      <span className={styles['Accordion-TriggerIcon']} aria-hidden="true" />
    </BaseAccordion.Trigger>
  );
});
Trigger.displayName = 'Accordion.Trigger';

export interface AccordionPanelProps {
  children?: React.ReactNode;
  className?: string;
}

const Panel = React.forwardRef<HTMLDivElement, AccordionPanelProps>(function Panel(
  { children, className, ...rest },
  ref,
) {
  const cls = [styles['Accordion-Panel'], className].filter(Boolean).join(' ');
  return (
    <BaseAccordion.Panel ref={ref} className={cls} {...rest}>
      {children}
    </BaseAccordion.Panel>
  );
});
Panel.displayName = 'Accordion.Panel';

export const Accordion = {
  Root,
  Item,
  Header,
  Trigger,
  Panel,
};
