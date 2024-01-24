import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import "./assets/scss/styles.scss";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  mergeThemeOverrides,
} from "@mantine/core";
import { Router } from "./Router";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "@mantine/core";
import { IconHome2, IconGauge, IconChevronRight } from "@tabler/icons-react";

import commonTheme from "./theme/common.theme";

//import { defaultCommonTheme } from "gabia-design-system";
import { useEffect, useState } from "react";

//const theme = mergeThemeOverrides(defaultCommonTheme, commonTheme);

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 280,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header style={{ background: "#26292E" }}>
          <Group h="100%" px="md">
            <Burger
              color="white"
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="md"
            />
            <img
              src="https://static.gabia.com/www/common/img/logo-cloud-white.svg"
              alt=""
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <NavLink
            href="/guide/"
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
            href="/guide/button"
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
            href="/guide/checkbox"
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
            href="/guide/radio"
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
            href="/guide/modal"
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
            href="/guide/pagination"
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
            href="/guide/tab"
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
            href="/guide/tooltip"
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
          <NavLink
            href="/guide/datepicker"
            label="DatePicker"
            leftSection={<IconGauge size="1rem" stroke={1.5} />}
            rightSection={
              <IconChevronRight
                size="0.8rem"
                stroke={1.5}
                className="mantine-rotate-rtl"
              />
            }
          />
        </AppShell.Navbar>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
