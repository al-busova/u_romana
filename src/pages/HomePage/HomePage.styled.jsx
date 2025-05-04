import styled from 'styled-components';
import { device } from 'Device';

export const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding-top: 20px;

  @media ${device.tablet} {
   
  }
  @media ${device.desktop} {
    padding-top: 30px;
  }
`;
export const HeroStyled = styled.section`

  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const HomeTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 32px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const HomeMainTitle = styled.h1`
  margin-bottom: 25px;
  font-size: 36px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const GroupGoodsList = styled.ul`
display: flex;
gap: 20px;
align-items: flex-start;
flex-wrap: wrap;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const GroupGoodsItem = styled.li`
  flex-basis: calc((100% - 20px) / 2);
  box-shadow: ${props => props.theme.shadow.main};
  background-color: #ed9f5fd6;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 150px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const GroupGoodsTitle = styled.h3`
margin-bottom: 8px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
