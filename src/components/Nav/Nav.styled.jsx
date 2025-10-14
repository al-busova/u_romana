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
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.white};
  padding: 8px 20px;
  @media (max-width: 767px) {
    transition: color 250ms ease;
    &:hover,
    &.active,
    &:focus {
      color: ${props => props.theme.colors.accent};
    }
    &.active {
      text-decoration: underline;
    }
  }
  @media ${device.tablet} {
    padding: 22px 12px;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.fs20};
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.accent};
    transition: background-color 250ms ease;
    &:hover,
    &.active,
    &:focus {
      background-color: #f9cc37;
    }
  }
  @media ${device.desktop} {
    padding: 22px 18px;
  }
`;
