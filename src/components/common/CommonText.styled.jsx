import styled from 'styled-components';
import { device } from 'Device';

export const PageTitle = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs32};
  }
`;
