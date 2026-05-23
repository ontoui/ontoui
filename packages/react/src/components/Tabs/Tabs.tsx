import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import styles from './Tabs.module.css';

export interface TabsRootProps {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string | number;
  value?: string | number;
  orientation?: 'horizontal' | 'vertical';
  onValueChange?: (value: string | number) => void;
}

const Root = function Root({ children, className, ...rest }: TabsRootProps) {
  const cls = [styles.Tabs, className].filter(Boolean).join(' ');
  return (
    <BaseTabs.Root className={cls} {...rest}>
      {children}
    </BaseTabs.Root>
  );
};
Root.displayName = 'Tabs.Root';

export interface TabsListProps {
  children?: React.ReactNode;
  className?: string;
}

const List = React.forwardRef<HTMLDivElement, TabsListProps>(function List(
  { children, className, ...rest },
  ref,
) {
  const cls = [styles['Tabs-List'], className].filter(Boolean).join(' ');
  return (
    <BaseTabs.List ref={ref} className={cls} {...rest}>
      {children}
      <BaseTabs.Indicator className={styles['Tabs-Indicator']} />
    </BaseTabs.List>
  );
});
List.displayName = 'Tabs.List';

export interface TabsTabProps {
  children?: React.ReactNode;
  className?: string;
  value: string | number;
  disabled?: boolean;
}

const Tab = React.forwardRef<HTMLButtonElement, TabsTabProps>(function Tab(
  { children, className, value, disabled, ...rest },
  ref,
) {
  const cls = [styles['Tabs-Tab'], className].filter(Boolean).join(' ');
  return (
    <BaseTabs.Tab ref={ref} className={cls} value={value} disabled={disabled} {...rest}>
      {children}
    </BaseTabs.Tab>
  );
});
Tab.displayName = 'Tabs.Tab';

export interface TabsPanelProps {
  children?: React.ReactNode;
  className?: string;
  value: string | number;
}

const Panel = React.forwardRef<HTMLDivElement, TabsPanelProps>(function Panel(
  { children, className, value, ...rest },
  ref,
) {
  const cls = [styles['Tabs-Panel'], className].filter(Boolean).join(' ');
  return (
    <BaseTabs.Panel ref={ref} className={cls} value={value} {...rest}>
      {children}
    </BaseTabs.Panel>
  );
});
Panel.displayName = 'Tabs.Panel';

export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
};
