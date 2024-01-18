import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Flex, Box, TextInput } from "@mantine/core";
import Safari from "../components/Safari";

export default function ModalPage() {
  const [opened1, { open: open1, close: close1 }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const [opened4, { open: open4, close: close4 }] = useDisclosure(false);
  const [opened5, { open: open5, close: close5 }] = useDisclosure(false);
  const [opened6, { open: open6, close: close6 }] = useDisclosure(false);
  const [opened7, { open: open7, close: close7 }] = useDisclosure(false);

  const [centered, { open: open8, close: close8 }] = useDisclosure(false);

  const [removeHeader, { open: open9, close: close9 }] = useDisclosure(false);

  const [fullscreen, { open: open10, close: close10 }] = useDisclosure(false);
  const [withScroll, { open: open11, close: close11 }] = useDisclosure(false);

  const [initialFocus, { open: open12, close: close12 }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <div>
      <h2 className="anchor">Usage</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open1}>알림1</Button>
          <Button onClick={open2} variant="danger">
            알림2
          </Button>
          <Button onClick={open3} variant="primary">
            알림3
          </Button>
          <Button onClick={open4}>알림4</Button>
          <Button onClick={open5} variant="danger">
            알림5
          </Button>
          <Button onClick={open6} variant="primary">
            알림6
          </Button>
          <Button onClick={open7}>알림7</Button>
        </Group>
      </Safari>

      <h2 className="anchor">Center modal vertically</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open8} variant="primary">
            수직으로 가운데 정렬 모달
          </Button>
        </Group>
      </Safari>

      <h2 className="anchor">Remove header</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open9} variant="danger">
            모달 헤더 삭제
          </Button>
        </Group>
      </Safari>

      <h2 className="anchor">Fullscreen</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open10}>화면 전체를 사용하는 모달</Button>
        </Group>
      </Safari>

      <h2 className="anchor">Modal with scroll</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open11} variant="primary">
            스크롤을 가지고 있는 모달
          </Button>
        </Group>
      </Safari>

      <h2 className="anchor">Initial focus</h2>
      <Safari>
        <Group justify="center">
          <Button onClick={open12} variant="primary">
            자동 포커스
          </Button>
        </Group>
      </Safari>

      <Modal opened={opened1} onClose={close1} size={780}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          선택한 서버가 %서버 동작% 불가 상태입니다.
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close1}>확인</Button>
          </Flex>
        </div>
      </Modal>
      <Modal opened={opened2} onClose={close2} size={780}>
        <p
          style={{
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
            <Button onClick={close2}>취소</Button>
            <Button onClick={close2} variant="danger">
              재발급하기
            </Button>
          </Flex>
        </div>
      </Modal>
      <Modal opened={opened3} onClose={close3} size={780}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          공인 IP는 연결하지 않고 보유만 해도 비용이 부과됩니다.
          <br /> 만약 과금을 원하지 않으시면 공인 IP 해제 후 반드시 삭제까지
          진행하시기 바랍니다.
          <br />
          해제된 공인 IP는 네트워크 공인 IP에서 삭제할 수 있습니다.
          <br />
          <Box mt="20">
            이 공인 IP의 연결을 해제하시겠습니까?
            <br /> 공인 IP를 해제하면 연결된 방화벽이 모두 해제되고 외부 접속이
            중단됩니다.
          </Box>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close3}>취소</Button>
            <Button onClick={close3} variant="danger">
              해제하기
            </Button>
          </Flex>
        </div>
      </Modal>
      <Modal opened={opened4} onClose={close4} size={780}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          용량을 변경하면 다시 줄일 수 없으며, 추가 비용이 부과됩니다.
          <br /> 이 가상 서버의 용량을 변경하시겠습니까?
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close4}>취소</Button>
            <Button onClick={close4} variant="primary">
              변경하기
            </Button>
          </Flex>
        </div>
      </Modal>
      <Modal opened={opened5} onClose={close5} size={780}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          이 스토리지의 연결을 해제하시겠습니까?
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close5}>취소</Button>
            <Button onClick={close5} variant="danger">
              해제하기
            </Button>
          </Flex>
        </div>
      </Modal>
      <Modal opened={opened6} onClose={close6} size={780}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          선택한 모든 스토리지의 연결을 해제하시겠습니까?
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close6}>취소</Button>
            <Button onClick={close6} variant="danger">
              해제하기
            </Button>
          </Flex>
        </div>
      </Modal>
      <Modal opened={opened7} onClose={close7} size={780}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          사양을 변경하시겠습니까?
          <br /> 루트 볼륨의 용량은 다시 변경할 수 없습니다.
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close7}>취소</Button>
            <Button onClick={close7} variant="primary">
              변경하기
            </Button>
          </Flex>
        </div>
      </Modal>

      <Modal opened={centered} onClose={close8} size={780} centered>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          알림
        </p>
        <div style={{ color: "#717171", fontSize: "14px" }}>
          선택한 서버가 %서버 동작% 불가 상태입니다.
        </div>
        <div style={{ marginTop: "20px" }}>
          <Flex gap={10} justify="center">
            <Button onClick={close8}>확인</Button>
          </Flex>
        </div>
      </Modal>

      <Modal opened={removeHeader} onClose={close9} withCloseButton={false}>
        모달 헤더와 닫기 버튼을 삭제한다.
      </Modal>

      <Modal opened={fullscreen} onClose={close10} fullScreen>
        Fullscreen 모드는 전체 화면을 차지합니다.
      </Modal>

      <Modal opened={withScroll} onClose={close11}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          모달
        </p>
        {content}
      </Modal>

      <Modal opened={initialFocus} onClose={close12}>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          모달
        </p>
        <Box ta="left">
          <Box mb="10">
            <TextInput label="First input" placeholder="First input" />
          </Box>
          <TextInput data-autofocus label="Input with initial focus" />
        </Box>
      </Modal>
    </div>
  );
}
