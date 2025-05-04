import styled from 'styled-components';
import { device } from 'Device';

export const ContactsWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    > div {
      display: flex;
      gap: 10px;
    }
  }
  @media ${device.desktop} {
  }
`;
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
export const ContactsLink = styled.a`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  transition: color 0.25s ease;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs12};
    padding: 10px;
  }
  @media ${device.desktop} {
    padding: 15px 10px;
    font-size: 14px;
  }
`;
