import { Tooltip, Button, Group } from "@mantine/core";
import Safari from "../components/Safari";

export default function TooltipPage() {
  return (
    <div>
      <h2 className="anchor">기본 사용법</h2>
      <Safari>
        <Tooltip label="안녕하세요">
          <Button variant="primary">툴팁을 확인해보세요</Button>
        </Tooltip>
      </Safari>
      <h2 className="anchor">툴팁 방향을 설정할 수 있습니다</h2>
      <Safari>
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
      </Safari>
    </div>
  );
}
