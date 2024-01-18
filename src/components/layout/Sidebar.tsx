import { NavLink } from "@mantine/core";
//import classes from "./Sidebar.module.scss";
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from "@tabler/icons-react";

export default function SideBar() {
  return (
    <div id="sidebar">
      <NavLink
        href="/"
        label="home"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="./button"
        label="Button"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="/checkbox"
        label="Checkbox"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="/radio"
        label="Radio"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="/modal"
        label="Modal"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="/pagination"
        label="Pagination"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="/tab"
        label="Tab"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        href="/tooltip"
        label="Tooltip"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
    </div>
  );
}

/* <Accordion variant="contained" classNames={{ root: classes.root }}>
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
        </Accordion.Item>*/
