import { LeftSideStyled } from './LeftSide.styled';
import { Reviews } from 'components/Reviews/Reviews';
import { Schedule } from 'components/Schedule/Schedule';

export const LeftSide = () => {
  return (
    <LeftSideStyled>
      <Schedule />
      <Reviews />
      <p style={{backgroundColor:'violet'}}>Маркетинг?</p>
      <p style={{backgroundColor:'violet'}}>Опис ферми?</p>
    </LeftSideStyled>
  );
};
