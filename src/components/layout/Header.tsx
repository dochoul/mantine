import styled from 'styled-components';

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow:
    0 0.5rem 1rem rgba(0, 0, 0, 0.05),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  z-index: 200;
  min-height: 60px;
  padding: 16px 0;
  overflow: hidden;
  background: #2598e7;
  box-sizing: border-box;
`;

export default function Header() {
  return <HeaderBar id="header" />;
}
