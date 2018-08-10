import styled from 'styled-components';
import { colors } from 'components/Variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  background-color: white;
  padding: 10px;
`;

export const PartnerLogo = styled.img`
  width: 200px;
  height: 50px;
  margin: 10px 0;
`;

export const MainLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5px;
`;

export const MainLink = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const MainLinkText = styled.p`
  padding-top: 2px;
  padding-left: 20px;
  color: ${colors.blue};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2pt;
`;

export const BottomLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const BottomLink = styled.a`
  color: ${colors.grey.light};
  text-decoration: underline;
  text-align: start;
  margin: 15px 10px;
  cursor: pointer;
`;
