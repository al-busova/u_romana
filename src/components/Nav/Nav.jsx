import { NavLinkStyled, NavListStyled } from './Nav.styled';

export const Nav = ({ onClose }) => {
  return (
      <NavListStyled>
        <li>
          <NavLinkStyled to="/" onClick={onClose}>
            Головна
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/goods" onClick={onClose}>
            Товари та послуги
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/ourhistory" onClick={onClose}>
            Наша історія
          </NavLinkStyled>
        </li>
        {/* <li>
          <NavLinkStyled to="/contacts" onClick={onClose}>
            Контакти та про нас
          </NavLinkStyled>
        </li> */}
        <li>
          <NavLinkStyled to="/deliverypay" onClick={onClose}>
            Доставка та оплата
          </NavLinkStyled>
        </li>
      </NavListStyled>
  );
};
