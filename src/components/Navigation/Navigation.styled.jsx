import styled from 'styled-components';
import { device } from 'Device';
import { IoMenu, IoClose } from 'react-icons/io5';

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  @media ${device.desktop} {
    position: relative;
    justify-content: center;
  }
`;
export const BtnMenu = styled.button`
  background-color: transparent;
  border: none;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.desktop} {
  }
`;
const IconMenu = ({ className }) => <IoMenu className={className} />;
export const IoMenuStyled = styled(IconMenu)`
  width: 30px;
  height: 30px;
  color: ${props => props.theme.colors.white};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
  }
  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`;
const IconMenuClose = ({ className }) => <IoClose className={className} />;
export const IoMenuCloseStyled = styled(IconMenuClose)`
  width: 30px;
  height: 30px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.colors.white};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
  }
  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`;
export const HeaderBoxMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  > a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.fs16};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 600;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const BurgerMenuBox = styled.div`
  position: absolute;
  left: -10px;
  top: 40px;
  background-color: ${props => props.theme.colors.background};
  width: 100vw;
  padding: 10px;
  z-index: 10;
`;