import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'Device';

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow: hidden;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.fs20};
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.accent};
  padding: 8px;
  transition:  background-color 250ms ease;
  &:hover,
  &.active,
  &:focus {
    background-color: #f9cc37;
  }
  @media ${device.tablet} {
    display: block;
    padding: 22px 12px;
  }
  @media ${device.desktop} {
  }
`;
