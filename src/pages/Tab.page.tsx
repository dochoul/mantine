import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import Safari from "../components/Safari";

export default function TabPage() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div>
      <h2 className="anchor">Usage</h2>
      <Safari>
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab
              value="gallery"
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Gallery
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              Messages
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              leftSection={<IconSettings style={iconStyle} />}
            >
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
      </Safari>
    </div>
  );
}
