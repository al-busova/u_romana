import styled from 'styled-components';
import { device } from 'Device';
import bg from '../../staticImages/bg_spots2.avif';

export const MainBody = styled.div`
  display: flex;
  padding-top: 135px;
`;
export const LeftSideStyled = styled.div`
  display: none;
  flex-shrink: 0;
  background-image: url('${bg}');
  background-size: cover;
  @media ${device.tablet} {
    display: block;
    width: 175px;
    padding: 30px 15px 0 20px;
  }
  @media ${device.desktop} {
    width: 309px;
  }
`;
export const LeftSideTitle = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.fs20};
  font-weight: 600;
  margin-bottom: 8px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
