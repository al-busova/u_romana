import styled from 'styled-components';
import { device } from 'Device';

export const GoodsSection = styled.section`
  padding-bottom: 30px;
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const GoodsTitle = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs32};
  }
`;
export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  > li {
    flex-basis: calc((100% - 40px) / 3);
    max-height: 320px;
  }
  @media ${device.tablet} {
  }
`;
export const GoodLink = styled.a`
  display: block;
  border: 0.5px solid brown;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  height: 100%;
  box-shadow: ${p => p.theme.shadow.main};
  &:hover, &:focus {
    transform: scale(1.05);
  }
  @media ${device.tablet} {
  }
`;
export const GoodImgThumb = styled.div`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  > img {
    object-position: center;
   object-fit: cover;
   width: 100%;
   height: 100%;
  }
  @media ${device.tablet} {
  }
`;
export const GoodTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.fs16};
  color: ${p => p.theme.colors.mainText};
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 46px ;
  @media ${device.tablet} {
  }
`;
export const GoodPrice = styled.p`
  font-size: ${p => p.theme.fontSizes.fs16};
  color: ${p => p.theme.colors.background};
  margin-bottom: 6px;
  font-weight: ${p => p.theme.fontWeights.fw700};
  @media ${device.tablet} {
  }
`;
export const GoodAvailability = styled.p`
  font-size: ${p => p.theme.fontSizes.fs12};
  color: ${p => p.theme.colors.mainText};
  margin-bottom: 6px;
  @media ${device.tablet} {
  }
`;
export const GoodAvailabilityN = styled.p`
  font-size: ${p => p.theme.fontSizes.fs12};
  color: gray;
  margin-bottom: 6px;
  @media ${device.tablet} {
  }
`;
export const BtnCard = styled.button`
  font-size: ${p => p.theme.fontSizes.fs16};
  background-color: ${p => p.theme.colors.accent};
  margin: 0 auto;
  margin-top: 6px;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  @media ${device.tablet} {
  }
`;