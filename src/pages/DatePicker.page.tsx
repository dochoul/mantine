import { ReactNode, useState } from "react";
import { Group } from "@mantine/core";
import { DatePicker, DatePickerInput, DatesProvider } from "@mantine/dates";
import Playground from "@/components/Playground";
import "dayjs/locale/ko";

function datesProvider(children: ReactNode) {
  return (
    <DatesProvider
      settings={{
        locale: "ko",
        firstDayOfWeek: 0,
        weekendDays: [0],
        timezone: "UTC",
      }}
    >
      {children}
    </DatesProvider>
  );
}

export default function DatePickerPage() {
  const [value, setValue] = useState<Date | null>(null);
  const [value2, setValue2] = useState<Date | null>(null);
  const [value3, setValue3] = useState<Date[]>([]);
  const [value4, setValue4] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [value5, setValue5] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [value6, setValue6] = useState<Date | null>(null);

  return (
    <>
      <Playground title="DatePicker">
        <Group justify="center">
          {datesProvider(<DatePicker value={value} onChange={setValue} />)}
          {/* <DatesProvider
            settings={{
              locale: "ko",
              firstDayOfWeek: 0,
              weekendDays: [0],
              timezone: "UTC",
            }}
          >
            <DatePicker value={value} onChange={setValue} />
          </DatesProvider> */}
        </Group>
        {JSON.stringify(value)}
      </Playground>

      <Playground title="Allow deselect">
        <Group justify="center">
          <DatePicker
            locale="ko"
            firstDayOfWeek={0}
            allowDeselect
            value={value2}
            onChange={setValue2}
          />
        </Group>
        {JSON.stringify(value2)}
      </Playground>

      <Playground title="Multiple dates">
        <Group justify="center">
          <DatePicker
            locale="ko"
            value={value3}
            onChange={setValue3}
            firstDayOfWeek={0}
            type="multiple"
          />
        </Group>
        {JSON.stringify(value3)}
      </Playground>

      <Playground title="Dates range">
        <Group justify="center">
          <DatePicker
            value={value4}
            onChange={setValue4}
            locale="ko"
            firstDayOfWeek={0}
            type="range"
          />
        </Group>
        {JSON.stringify(value4)}
      </Playground>

      <Playground title="Single date in range">
        <Group justify="center">
          <DatePicker
            value={value5}
            onChange={setValue5}
            allowSingleDateInRange
            locale="ko"
            firstDayOfWeek={0}
            type="range"
          />
        </Group>
      </Playground>

      <Playground title="Default date">
        <Group justify="center">
          <DatePicker
            defaultDate={new Date(2017, 5)}
            locale="ko"
            firstDayOfWeek={0}
            value={value6}
            onChange={setValue6}
          />
        </Group>
      </Playground>
    </>
  );
}
