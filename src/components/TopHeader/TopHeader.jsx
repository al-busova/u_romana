import {
  ContactsWrapper,
  ContactsLink,
  WrapperIcons,
} from './TopHeader.styled';
import { Container } from 'components/common/Container.styled';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const TopHeader = () => {
  return (
    <Container>
      <ContactsWrapper>
        <ContactsLink href="mailto:roman@gmail.com">
          roman@gmail.com
        </ContactsLink>
        <div>
          <ContactsLink href="tel:+380996748145">+380996748145</ContactsLink>
          <ContactsLink href="tel:+380966748145">+380966748145</ContactsLink>
        </div>
        <WrapperIcons>
          <NavLink to="/basket">
            <FaShoppingBasket color="white" />
          </NavLink>
          <NavLink to="/profile">
            <IoPerson color="white" />{' '}
          </NavLink>
        </WrapperIcons>
      </ContactsWrapper>
    </Container>
  );
};
