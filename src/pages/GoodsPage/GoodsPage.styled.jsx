import styled from 'styled-components';
import { device } from 'Device';

export const GoodsSection = styled.section`
padding-bottom: 30px;
`;
export const WrapperTitle = styled.div`
display:flex;
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
flex-basis: calc((100% - 40px)/3);
height: 180px;
 }
  @media ${device.tablet} {
   
  }
`;
export const GoodLink = styled.a`
display: block;
border: 1px solid brown;
padding: 10px;
width: 100%;
height: 100%;
  @media ${device.tablet} {
  }
`;