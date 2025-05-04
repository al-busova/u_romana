import { useState } from 'react';
import { useMedia } from 'react-use';
import { Nav } from '../Nav/Nav';
import { Logo } from 'components/Logo/Logo';
import {
  NavigationStyled,
  BtnMenu,
  NameCompanyBox,
  IoMenuStyled,
  IoMenuCloseStyled,
  BurgerMenuBox,
} from './Navigation.styled';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablet = useMedia('(min-width: 768px)');

  const onToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <NavigationStyled>
      <BtnMenu onClick={onToggle}>
        {isMenuOpen ? <IoMenuCloseStyled /> : <IoMenuStyled />}
      </BtnMenu>
      <NameCompanyBox>
        <Logo /> <span>У_Романа</span>{' '}
      </NameCompanyBox>
      {isMenuOpen && (
        <BurgerMenuBox>
          <Nav onClose={onClose} />
        </BurgerMenuBox>
      )}
      {isTablet && <Nav />}
    </NavigationStyled>
  );
};
