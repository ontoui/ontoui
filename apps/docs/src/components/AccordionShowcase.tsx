import type { FC } from 'react';
import { Accordion } from '@ontoui/react';

const row: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBlockStart: '16px',
};

export const GeneralDemo: FC = () => (
  <div className="not-content" style={row}>
    <Accordion.Root style={{ width: '360px' }}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          <Accordion.Trigger>What is OntoUI?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">
            OntoUI is a React component library built on Base UI primitives with a clean, accessible
            design system.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>
          <Accordion.Trigger>How do I get started?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">
            Install the package with <code>pnpm add @ontoui/react</code> and import the components
            you need.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Header>
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">
            Yes. All components follow WAI-ARIA patterns and are keyboard navigable.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  </div>
);

export const MultipleDemo: FC = () => (
  <div className="not-content" style={row}>
    <Accordion.Root multiple style={{ width: '360px' }}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          <Accordion.Trigger>Section A</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">Content for section A.</div>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>
          <Accordion.Trigger>Section B</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">Content for section B.</div>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Header>
          <Accordion.Trigger>Section C</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">Content for section C.</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  </div>
);

export const DisabledDemo: FC = () => (
  <div className="not-content" style={row}>
    <Accordion.Root style={{ width: '360px' }}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          <Accordion.Trigger>Available section</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">This section is available.</div>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2" disabled>
        <Accordion.Header>
          <Accordion.Trigger>Disabled section</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div className="Accordion-PanelContent">This section is disabled.</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  </div>
);
