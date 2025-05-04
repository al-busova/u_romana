import styled from 'styled-components';
import { device } from 'Device';

export const ReviewSection = styled.section`
  margin-top: 15px;
  padding: 15px 10px;
  background-color: #f5ed94ef;
  border-radius: 16px;
  @media ${device.desktop} {
  }
`;
export const ReviewList = styled.ul`
  font-size: ${props => props.theme.fontSizes.fs16};
  @media ${device.desktop} {
  }
`;
export const ReviewItem = styled.li`
  position: relative;
  padding: 10px 5px;
  box-shadow: ${props => props.theme.shadow.main};

  @media ${device.desktop} {
  }
`;
export const ReviewName = styled.p`
  font-size: 16px;
  font-weight: 600;
  @media ${device.desktop} {
  }
`;
export const ReviewRate = styled.p`
  font-size: 12px;
  margin-bottom: -3px;
  @media ${device.desktop} {
  }
`;
export const ReviewDate = styled.p`
  font-size: 14px;
  position: absolute;
  top: 10px;
  right: 10px;
  @media ${device.desktop} {
  }
`;
export const ReviewText = styled.p`
  font-style: italic;
  font-size: 14px;
  @media ${device.desktop} {
  }
`;
export const RateWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const RateBody = styled.div`
  position: relative;
  &::before {
    content: '★★★★★';
    display: block;
  }
`;
export const RateActive = styled.div`
  position: absolute;
  width: ${props => {
    if (props.rate === 0) {
      return `0%`;
    }
    if (props.rate === 1) {
      return `20%`;
    }
    if (props.rate === 2) {
      return `40%`;
    }
    if (props.rate === 3) {
      return `60%`;
    }
    if (props.rate === 4) {
      return `80%`;
    }
    if (props.rate === 5) {
      return `100%`;
    }
  }};
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  &::before {
    content: '★★★★★';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: ${props => props.theme.colors.accent};
  }
`;
export const InputBoxStyled = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const InputStyled = styled.input`
  opacity: 0;
`;
