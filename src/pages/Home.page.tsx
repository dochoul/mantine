import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Code,
  Group,
  Modal,
  Popover,
  Stack,
  Text,
  Tooltip,
  rem,
} from "@mantine/core";
import { IconPhoto, IconDownload, IconArrowRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
//import { formatDate, isEmail } from "Gutils";
import Safari from "../components/Safari";

export default function HomePage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [today, setToday] = useState("");
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   setToday(formatDate({ format: "yyyy-mm-dd" }));
  // }, []);

  // console.log(isEmail("111@naver.com"));

  return (
    <div>
      {/* <h2 className="anchor">Gutils</h2>
      <Safari>
        오늘 날짜: <span style={{ color: "red" }}>{today}</span>
      </Safari> */}

      <h2 className="anchor">Tooltip</h2>
      <Safari>
        <Group>
          <Tooltip label="Default arrow">
            <Button variant="outline">Default arrow</Button>
          </Tooltip>
          <Tooltip label="Tooltip">
            <Button variant="outline" color="gray" size="xl">
              With tooltip
            </Button>
          </Tooltip>
        </Group>
      </Safari>

      <h2 className="anchor">Button</h2>
      <Safari>
        <Group>
          <Button variant="default">Button</Button>
          <Button variant="default">가비아</Button>
        </Group>
      </Safari>

      <h2 className="anchor">Button</h2>
      <Safari>
        <Group>
          <Button variant="filled">가비아</Button>
          <Button variant="outline">가비아</Button>
          <Button variant="light">가비아</Button>
          <Button variant="subtle">가비아</Button>
          <Button variant="transparent">가비아</Button>
          <Button variant="white">가비아</Button>
        </Group>
      </Safari>

      <h2 className="anchor">Left and right sections</h2>
      <Safari>
        <Group justify="center">
          <Button leftSection={<IconPhoto size={14} />} variant="default">
            사진
          </Button>

          <Button rightSection={<IconDownload size={14} />}>다운로드</Button>

          <Button
            variant="light"
            leftSection={<IconPhoto size={14} />}
            rightSection={<IconArrowRight size={14} />}
          >
            신청하기
          </Button>
        </Group>
      </Safari>

      <h2 className="anchor">Font size</h2>
      <Safari>
        <Group>
          <p className="font-size-800">gabia</p>
          <p className="font-size-800">가비아</p>
        </Group>
        <Group>
          <p className="font-size-700">gabia</p>
          <p className="font-size-700">가비아</p>
        </Group>
        <Group>
          <p className="font-size-600">gabia</p>
          <p className="font-size-600">가비아</p>
        </Group>
        <Group>
          <p className="font-size-500">gabia</p>
          <p className="font-size-500">가비아</p>
        </Group>
        <Group>
          <p className="font-size-400">gabia</p>
          <p className="font-size-400">가비아</p>
        </Group>
        <Group>
          <p className="font-size-300">gabia</p>
          <p className="font-size-300">가비아</p>
        </Group>
        <Group>
          <p className="font-size-200">gabia</p>
          <p className="font-size-200">가비아</p>
        </Group>
        <Group>
          <p className="font-size-100">gabia</p>
          <p className="font-size-100">가비아</p>
        </Group>
        <Group>
          <p className="font-size-75">gabia</p>
          <p className="font-size-75">가비아</p>
        </Group>
        <Group>
          <p className="font-size-50">gabia</p>
          <p className="font-size-50">가비아</p>
        </Group>
      </Safari>

      <h2 className="anchor">Font weight</h2>
      <Safari>
        <Group>
          <p className="font-weight-thin">gabia</p>
          <p className="font-weight-thin">가비아</p>
        </Group>
        <Group>
          <p className="font-weight-light">gabia</p>
          <p className="font-weight-light">가비아</p>
        </Group>
        <Group>
          <p className="font-weight-regular">gabia</p>
          <p className="font-weight-regular">가비아</p>
        </Group>
        <Group>
          <p className="font-weight-medium">gabia</p>
          <p className="font-weight-medium">가비아</p>
        </Group>
        <Group>
          <p className="font-weight-bold">gabia</p>
          <p className="font-weight-bold">가비아</p>
        </Group>
      </Safari>
    </div>
  );
}
