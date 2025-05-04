import styled from 'styled-components';
import { device } from 'Device';

export const Container = styled.div`
  padding: 0 10px 0 10px;
  min-width: 320px;
  @media ${device.mobileOnly} {
    margin: 0 auto;
  }
  @media ${device.tablet} {
    min-width: 577px;
    padding: 0 25px;
  }
  @media ${device.desktop} {
    /* margin: 0 auto; */
    width: 955px;
  }
`;
