import styled from 'styled-components';
import { device } from 'Device';

export const ImgLogo = styled.img`
  width: 40px;
  display: inline;
  @media ${device.tablet} {
    display: block;
    width: 100px;
  }
  @media ${device.desktop} {
  margin-right: 60px;
  }
`;
