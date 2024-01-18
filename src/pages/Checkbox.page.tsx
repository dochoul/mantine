import { Anchor, Checkbox, Group, Stack } from "@mantine/core";
import Safari from "../components/Safari";
import { useState } from "react";
import { randomId, useListState } from "@mantine/hooks";

const initialValues = [
  {
    label: "가비아 이용 약관에 동의합니다.",
    checked: false,
    key: randomId(),
  },
  {
    label: "개인정보 수집 및 이용에 동의합니다.  ",
    checked: false,
    key: randomId(),
  },
];

export default function CheckboxPage() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      color="#0076d5"
      mt="xs"
      ml={20}
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
      <Safari>
        <Group justify="center">
          <Checkbox
            color="#0076d5"
            defaultChecked
            label="위 사항을 모두 확인하였으며, 이에 동의합니다."
          />
        </Group>
      </Safari>

      <h2 className="anchor">States</h2>
      <Safari>
        <Stack>
          <Checkbox
            color="#0076d5"
            checked={false}
            onChange={() => {}}
            label="Default checkbox"
          />
          <Checkbox
            color="#0076d5"
            checked={false}
            onChange={() => {}}
            indeterminate
            label="Indeterminate checkbox"
          />
          <Checkbox
            color="#0076d5"
            checked
            onChange={() => {}}
            label="Checked checkbox"
          />

          <Checkbox
            color="#0076d5"
            disabled
            indeterminate
            label="Disabled indeterminate checkbox"
          />
          <Checkbox
            color="#0076d5"
            disabled
            checked
            onChange={() => {}}
            label="Disabled checked checkbox"
          />
        </Stack>
      </Safari>

      <h2 className="anchor">Indeterminate States</h2>
      <Safari>
        <Checkbox
          color="#0076d5"
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
      </Safari>

      <h2 className="anchor">Label with link</h2>
      <Safari>
        <Checkbox
          color="#0076d5"
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
      </Safari>
    </div>
  );
}
