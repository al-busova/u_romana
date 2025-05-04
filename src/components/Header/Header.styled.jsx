import styled from 'styled-components';

export const HeaderStyled = styled.header`
  /* padding-top: 16px;
  @media (min-width: 768px) {
    padding-top: 24px;
  }
  @media (min-width: 1280px) {
    padding-top: 20px;
  } */
`;
export const TopWrapper = styled.div`
z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding-top: 20px;
`;
