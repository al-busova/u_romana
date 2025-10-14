import styled from 'styled-components';
import { device } from 'Device';
import { NavLink } from 'react-router-dom';
;
export const BasketSection = styled.section`
  /* min-height: 400px; */
  @media ${device.desktop} {
  }
`;
export const BtnChangeCount = styled.button`
  background-color: transparent;
  @media ${device.desktop} {

  }
`;

export const NavLinkAuth = styled(NavLink)`
  display: inline-block;
  margin: 0 auto;
  padding: 5px 15px;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.fs20};
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.background};
  transition: color 250ms ease;
  &:hover,
  &.active,
  &:focus {
    color: #f9cc37;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
