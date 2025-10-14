import { useState } from 'react';
import { useMedia } from 'react-use';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Logo } from 'components/Logo/Logo';
import {
  NavigationStyled,
  BtnMenu,
  HeaderBoxMobile,
  IoMenuStyled,
  IoMenuCloseStyled,
  BurgerMenuBox,
} from './Navigation.styled';
import { TopHeaderIcons } from 'components/TopHeaderIcons/TopHeaderIcons';

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
      <HeaderBoxMobile>
        <NavLink to="/"> <Logo /> <span>У_Романа</span></NavLink>
        <TopHeaderIcons />
      </HeaderBoxMobile>

      {isMenuOpen && (
        <BurgerMenuBox>
          <Nav onClose={onClose} />
        </BurgerMenuBox>
      )}
      {isTablet && <Nav />}
    </NavigationStyled>
  );
};
