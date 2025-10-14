import styled from 'styled-components';
import { device } from 'Device';

export const TopWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 10px 0;
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 0;
  }
`;
