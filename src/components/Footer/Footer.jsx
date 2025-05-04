import {
  FooterStyled,
  FooterTitle,
  NavLinkFooter,
  FooterLink, Copy
} from './Footer.styled';
import { Container } from 'components/common/Container.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div>
          {' '}
          <FooterTitle>Основні розділи:</FooterTitle>
          <ul>
            <li>
              <NavLinkFooter>Доставка та оплата</NavLinkFooter>
            </li>
            <li>
              <NavLinkFooter>Відгуки</NavLinkFooter>
            </li>
          </ul>
        </div>
        <div>
          {' '}
          <FooterTitle>Контакти:</FooterTitle>
          <ul>
            <li>
              <FooterLink href="mailto:roman@gmail.com">
                roman@gmail.com
              </FooterLink>
            </li>
            <li>
              <FooterLink href="tel:+380996748145">+380996748145</FooterLink>
            </li>
            <li>
              <FooterLink href="tel:+380966748145">+380966748145</FooterLink>
            </li>
            <li>
              <FooterLink href="-">м. Запоріжжя, Вул. Така, 24</FooterLink>
            </li>
          </ul>
        </div>
      </Container>
      <Copy>
        © 2025 <NavLinkFooter>У_Романа</NavLinkFooter> Всі права захищені
        <span>
          Розробка <a href="https://github.com/al-busova">Al-Busova</a>
        </span>
      </Copy>
    </FooterStyled>
  );
};
