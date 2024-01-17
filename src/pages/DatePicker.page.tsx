import { Anchor, Checkbox, Group, Stack } from "@mantine/core";
import Safari from "../components/Safari";

export default function DatePicker() {
  return (
    <div>
      <h2 className="anchor">Checkbox</h2>
      <Safari>
        <Group justify="center">npm install @mantine/dates dayjs</Group>
        설치가 안되노!
        <p>https://mantine.dev/dates/getting-started/</p>
      </Safari>
    </div>
  );
}
