import styled from 'styled-components';

const PanelWrap = styled.div`
  margin: 30px 0 20px;
  border: 0;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

const PanelHeader = styled.div`
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

const PanelBody = styled.div`
  padding: 16px;
`;

export default function PanelUI({ children }: { children: any }) {
  return (
    <PanelWrap>
      <PanelHeader>
        <Circles>
          <Circle className="circle circle-red" style={{ backgroundColor: '#fc615c' }} />
          <Circle className="circle circle-yellow" style={{ backgroundColor: '#fec041' }} />
          <Circle className="circle circle-green" style={{ backgroundColor: '#33c849' }} />
        </Circles>
      </PanelHeader>
      <PanelBody>{children}</PanelBody>
    </PanelWrap>
  );
}
