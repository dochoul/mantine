import { Group, Radio } from "@mantine/core";
import { useState } from "react";
import Playground from "@/components/Playground";

export default function RadioPage() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Playground title="Usage">
        <Group>
          <Radio label="라디오버튼" />
        </Group>
      </Playground>

      <Playground title="Radio state">
        <Group>
          <Radio checked={false} onChange={() => {}} label="기본상태" />
          <Radio checked onChange={() => {}} label="체크된 상태" />
          <Radio disabled label="Disabled" />
        </Group>
      </Playground>

      <Playground title="Radio Group">
        <Group>
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
      </Playground>
    </>
  );
}
