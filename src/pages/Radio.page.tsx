import { Group, Radio } from "@mantine/core";
import { useState } from "react";
import Safari from "../components/Safari";

export default function RadioPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2 className="anchor">Usage</h2>
      <Safari>
        <Group justify="center">
          <Radio label="라디오버튼" />
        </Group>
      </Safari>

      <h2 className="anchor">Radio state</h2>
      <Safari>
        <Group justify="center">
          <Radio checked={false} onChange={() => {}} label="기본상태" />
          <Radio checked onChange={() => {}} label="체크된 상태" />
          <Radio disabled label="Disabled" />
        </Group>
      </Safari>

      <h2 className="anchor">Radio Group</h2>
      <Safari>
        <Group justify="center">
          <Radio.Group
            name="favoriteFramework"
            label="가장 좋아하는 과일은?"
            description=""
          >
            <Group mt="xs">
              <Radio value="react" label="🍎" />
              <Radio value="svelte" label="🍉" />
              <Radio value="ng" label="🍇" />
              <Radio value="vue" label="🍌" />
            </Group>
          </Radio.Group>
        </Group>
      </Safari>
    </div>
  );
}
