import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Box = styled.div`
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

const BoxHeader = styled.div`
  padding: 0;
  border-top: 1px solid #eaeae9;
  border-bottom: 1px solid #dfdfde;
  background: #ebebeb;
`;

const Circles = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 10px;
  height: 38px;
`;

const Circle = styled.div`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
`;

const BoxBody = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
`;

/* h2 */
// h2.anchor {
//   position: relative;
//   font-size: 24px;
//   margin-top: 65px;
//   padding-bottom: 10px;
//   line-height: 44px;
//   border-bottom: 1px solid #ddd;
//   &:first-child {
//     margin-top: 0;
//   }
// }

interface Props {
  title: string;
  children: ReactNode;
}

export default function Playground({ title, children }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Box>
        <BoxHeader>
          <Circles>
            <Circle
              className="circle circle-red"
              style={{ backgroundColor: "#fc615c" }}
            />
            <Circle
              className="circle circle-yellow"
              style={{ backgroundColor: "#fec041" }}
            />
            <Circle
              className="circle circle-green"
              style={{ backgroundColor: "#33c849" }}
            />
          </Circles>
        </BoxHeader>
        <BoxBody>{children}</BoxBody>
      </Box>
    </Wrapper>
  );
}
