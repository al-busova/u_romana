import styled from 'styled-components';
import { device } from 'Device';
import { FaFacebook, FaInstagram, FaViber, FaTelegram } from 'react-icons/fa';

export const SocialLinksList = styled.ul`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #5a412de0;
  border-radius: 16px;
  z-index: 2;
  @media ${device.desktop} {
    border-radius: 20px;
  }
`;

export const SocialLinksItem = styled.li`
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const SocialLink = styled.a`
  display: block;
  padding: 5px;
  @media ${device.desktop} {
    padding: 8px;
  }
`;


const IconFacebook = ({ className }) => <FaFacebook className={className} />;
export const StyledFacebook = styled(IconFacebook)`
  color: ${props => props.theme.colors.accent};
  width: 25px;
  height: 25px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`;
const IconInstagram = ({ className }) => <FaInstagram className={className} />;
export const StyledInstagram = styled(IconInstagram)`
  color: ${props => props.theme.colors.accent};
  width: 25px;
  height: 25px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`;
const IconViber = ({ className }) => <FaViber className={className} />;
export const StyledViber = styled(IconViber)`
  color: ${props => props.theme.colors.accent};
  width: 25px;
  height: 25px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`;
const IconTelegram = ({ className }) => <FaTelegram className={className} />;
export const StyledTelegram = styled(IconTelegram)`
  color: ${props => props.theme.colors.accent};
  width: 25px;
  height: 25px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`;
