import { Anchor, Checkbox, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { randomId, useListState } from "@mantine/hooks";
import Playground from "@/components/Playground";

const initialValues = [
  {
    label: "가비아 이용 약관에 동의합니다.  ",
    checked: false,
    key: randomId(),
  },
  {
    label: "개인정보 수집 및 이용에 동의합니다.  ",
    checked: false,
    key: randomId(),
  },
];

export default function About() {
  const [checked, setChecked] = useState(false);

  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, "checked", event.currentTarget.checked)
      }
    />
  ));

  return (
    <div>
      <h2 className="anchor">Checkbox</h2>
      <Playground title="ddddddd">
        <Group justify="center">
          <Checkbox defaultChecked label="체크박스입니다" />
        </Group>
      </Playground>

      <h2 className="anchor">States</h2>
      <Playground title="ddddddd">
        <Stack>
          <Checkbox
            checked={false}
            onChange={() => {}}
            label="Default checkbox"
          />
          <Checkbox
            checked={false}
            onChange={() => {}}
            indeterminate
            label="Indeterminate checkbox"
          />
          <Checkbox checked onChange={() => {}} label="Checked checkbox" />

          <Checkbox disabled label="Disabled checkbox" />
          <Checkbox
            disabled
            indeterminate
            label="Disabled indeterminate checkbox"
          />
          <Checkbox
            disabled
            checked
            onChange={() => {}}
            label="Disabled checked checkbox"
          />
        </Stack>
      </Playground>

      <h2 className="anchor">Indeterminate States</h2>
      <Playground title="ddddddd">
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          label="모든 약관에 동의합니다."
          onChange={() =>
            handlers.setState((current) =>
              current.map((value) => ({ ...value, checked: !allChecked }))
            )
          }
        />
        {items}
      </Playground>

      <h2 className="anchor">Label with link</h2>
      <Playground title="ddddddd">
        <Checkbox
          label={
            <>
              가비아 이용 약관에 동의합니다.
              <Anchor
                href="https://policy.gabia.com/"
                target="_blank"
                inherit
                ml={5}
              >
                상세보기
              </Anchor>
            </>
          }
        />
      </Playground>
    </div>
  );
}
