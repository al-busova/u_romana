import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'Device';

export const FooterStyled = styled.footer`
  padding: 40px 0 20px ;
  background-color: ${props => props.theme.colors.background};

  > div {
    display: flex;
    align-items: flex-start;
    gap: 90px;
    padding-left: 80px;
  }
  ul {
    list-style: disc;
    ::marker {
      color: #f5ed94bb;
    }
  }
`;

export const FooterTitle = styled.h4`
  color: ${props => props.theme.colors.white};
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
`;
export const NavLinkFooter = styled(NavLink)`
  color: #f5ed94bb;
  display: inline-block;
  padding: 5px 10px 5px 0;
  font-size: 18px;
  transition: color 250ms ease;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const FooterLink = styled.a`
  color: #f5ed94bb;
  display: inline-block;
  padding: 5px 10px 5px 0;
  font-size: 18px;
  transition: color 0.25s ease;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
export const Copy = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  color: ${props => props.theme.colors.white};
`;
