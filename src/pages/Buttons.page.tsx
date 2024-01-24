import { Button, ActionIcon, Group } from "@mantine/core";
import Playground from "@/components/Playground";

export default function Buttons() {
  return (
    <>
      <Playground title="Usage">
        <Group>
          <Button>Button</Button>
          <Button>클라우드</Button>
          <Button>블록 스토리지 새로 추가하기</Button>
          <Button variant="primary">Primary 버튼</Button>
          <Button variant="danger">Danger 버튼</Button>
        </Group>
      </Playground>

      <Playground title="Icon Button">
        <Group>
          <Button
            leftSection={<i className="fa-regular fa-heart" />}
            variant="default"
          >
            좋아요
          </Button>
          <Button
            leftSection={<i className="fa-regular fa-magnifying-glass" />}
            variant="default"
          >
            검색
          </Button>
          <Button
            leftSection={<i className="fa-regular fa-server" />}
            variant="default"
          >
            서버 추가하기
          </Button>
        </Group>
      </Playground>

      <Playground title="Compact size">
        <Group>
          <Button size="sm">연결하기</Button>
          <Button>기본 버튼</Button>
          <Button size="lg">모니터링 솔루션 신청하기</Button>
          <Button size="sm" variant="primary">
            연결하기
          </Button>
          <Button>기본 버튼</Button>
          <Button size="lg" variant="danger">
            모니터링 솔루션 신청하기
          </Button>
        </Group>
      </Playground>

      <Playground title="Disabled state">
        <Group>
          <Button disabled>Disabled</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="danger" disabled>
            Disabled
          </Button>
        </Group>
      </Playground>

      <Playground title="ActionIcon">
        <Group>
          <ActionIcon
            size={32}
            variant="default"
            aria-label="ActionIcon with size as a number"
          >
            <i className="fa-light fa-filter" />
          </ActionIcon>
          <ActionIcon
            size={32}
            variant="default"
            aria-label="ActionIcon with size as a number"
          >
            <i className="fa-light fa-heart" />
          </ActionIcon>
          <ActionIcon
            size={32}
            variant="default"
            aria-label="ActionIcon with size as a number"
          >
            <i className="fa-light fa-print" />
          </ActionIcon>
        </Group>
      </Playground>

      <Playground title="Loading state">
        <Group>
          <Button loading={true}>Filled button</Button>
          <Button variant="primary" loading={true}>
            Light button
          </Button>
          <Button variant="danger" loading={true}>
            Outline button
          </Button>
          <Button loading loaderProps={{ type: "dots" }}>
            Loading button
          </Button>
        </Group>
      </Playground>
    </>
  );
}
