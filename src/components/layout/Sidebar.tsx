import { Accordion, NavLink } from '@mantine/core';
import classes from './Sidebar.module.scss';

export default function SideBar() {
  return (
    <div id="sidebar">
      <Accordion variant="contained" classNames={{ root: classes.root }}>
        <Accordion.Item value="photos" classNames={{ item: classes.item }}>
          <Accordion.Control>Buttons</Accordion.Control>
          <Accordion.Panel>ddd</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="print" classNames={{ item: classes.item }}>
          <Accordion.Control>🍎 Components</Accordion.Control>
          <Accordion.Panel>
            <NavLink href="about" label="button" />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="camera" classNames={{ item: classes.item }}>
          <Accordion.Control>🍎 Camera settings</Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
