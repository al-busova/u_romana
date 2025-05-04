import { ContactsWrapper, ContactsLink } from './TopHeader.styled';
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
        <div>
          <NavLink to="/basket">
            <FaShoppingBasket color="white" size="30px" />
          </NavLink>
          <IoPerson color="white" size="30px" />
        </div>
      </ContactsWrapper>
    </Container>
  );
};
