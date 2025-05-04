import styled from 'styled-components';
import { device } from 'Device';

export const ContactsWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
      display: flex;
      gap: 10px;
    }
  }
  @media ${device.desktop} {
    > div {
      gap: 20px;
    }
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
    padding: 15px;
    font-size: 14px;
  }
`;
