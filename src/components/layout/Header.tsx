import { Anchor } from "@mantine/core";
import styled from "styled-components";

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow:
    0 0.5rem 1rem rgba(0, 0, 0, 0.05),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  z-index: 200;
  min-height: 70px;
  overflow: hidden;
  background: #26292f;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  position: absolute;
  left: 15px;
  top: 22px;
  margin: 0;
  padding: 0;
`;

export default function Header() {
  return (
    <HeaderBar id="header">
      <Logo>
        <Anchor
          href="https://cloud.gabia.com/"
          target="_blank"
          style={{ display: "block" }}
        >
          <img
            src="https://static.gabia.com/www/common/img/logo-cloud-white.svg"
            alt=""
            style={{ display: "block" }}
            width={182}
            height={28}
          />
        </Anchor>
      </Logo>
    </HeaderBar>
  );
}
