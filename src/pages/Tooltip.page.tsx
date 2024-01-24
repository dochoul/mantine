import { Tooltip, Button, Group } from "@mantine/core";
import Playground from "@/components/Playground";

export default function TooltipPage() {
  return (
    <div>
      <Playground title="기본 사용법">
        <Tooltip label="안녕하세요">
          <Button variant="primary">툴팁을 확인해보세요</Button>
        </Tooltip>
      </Playground>
      <Playground title="툴팁 방향 설정">
        <Group>
          <Tooltip label="안녕하세요" position="top-start">
            <Button variant="primary">툴팁을 확인해보세요</Button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="top">
            <Button variant="primary">툴팁을 확인해보세요</Button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="top-end">
            <Button variant="primary">툴팁을 확인해보세요</Button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="bottom-start">
            <Button variant="primary">툴팁을 확인해보세요</Button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="bottom">
            <Button variant="primary">툴팁을 확인해보세요</Button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="bottom-end">
            <Button variant="primary">툴팁을 확인해보세요</Button>
          </Tooltip>
        </Group>
      </Playground>
    </div>
  );
}
