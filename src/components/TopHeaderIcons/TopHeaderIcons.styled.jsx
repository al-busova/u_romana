import styled from 'styled-components';
import { device } from 'Device';

export const WrapperIcons = styled.div`
  transition: fill 0.25s ease;
  svg {
    padding: 5px;
    width: 35px;
    height: 35px;
  }
  svg:hover,
  svg:focus {
    cursor: pointer;
    fill: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
