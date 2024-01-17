import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Flex } from "@mantine/core";
import Safari from "../components/Safari";

export default function ModalPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <h2 className="anchor">Usage</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open}>알림1</Button>
        </Group>
      </Safari>
      <Modal opened={opened} onClose={close} size={780}>
        <p
          style={{
            marginTop: "5px",
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          재발급이 완료되면 관리자 관리에 등록된 모든 서비스 관리자와 시스템
          관리자에게 이메일로 전송됩니다. <br />이 서버의 비밀번호 재발급을
          신청하시겠습니까?
          <br />
          재발급을 신청하면 변경된 비밀번호 적용을 위해 서버가 재시작됩니다.
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close}>취소</Button>
            <Button onClick={close} variant="danger">
              재발급하기
            </Button>
          </Flex>
        </div>
      </Modal>
    </div>
  );
}
