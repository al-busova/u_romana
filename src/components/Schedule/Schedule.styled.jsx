import styled from 'styled-components';
import { device } from 'Device';

export const ScheduleWrapper = styled.section`
  padding: 15px;
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.mainText};
  background-color: #f5ed94ef;
  border-radius: 16px;
  > b {
    color: ${props => props.theme.colors.background};
    font-weight: 500;
    text-align: center;
    display: block;
    margin-top: 5px;
    font-size: 13px;
  }
  @media ${device.desktop} {
  }
`;
export const ScheduleList = styled.ul`
  font-size: ${props => props.theme.fontSizes.fs16};
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media ${device.desktop} {
  }
`;
export const ScheduleItem = styled.li`
  display: flex;
  justify-content: space-between;
  @media ${device.desktop} {
  }
`;
