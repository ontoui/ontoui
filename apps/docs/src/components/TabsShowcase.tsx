import type { FC } from 'react';
import { Tabs } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Workspace stats and activity.</Tabs.Panel>
      <Tabs.Panel value="projects">All your active projects.</Tabs.Panel>
      <Tabs.Panel value="account">Profile and billing settings.</Tabs.Panel>
    </Tabs.Root>
  </div>
);

export const VerticalDemo: FC = () => (
  <div className="not-content" style={row}>
    <Tabs.Root defaultValue="overview" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Workspace stats and activity.</Tabs.Panel>
      <Tabs.Panel value="projects">All your active projects.</Tabs.Panel>
      <Tabs.Panel value="account">Profile and billing settings.</Tabs.Panel>
    </Tabs.Root>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="projects" disabled>
          Projects
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Workspace stats and activity.</Tabs.Panel>
      <Tabs.Panel value="projects">All your active projects.</Tabs.Panel>
      <Tabs.Panel value="account">Profile and billing settings.</Tabs.Panel>
    </Tabs.Root>
  </div>
);
