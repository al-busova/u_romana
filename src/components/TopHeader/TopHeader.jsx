import {
  ContactsWrapper,
  ContactsLink
} from './TopHeader.styled';
import { TopHeaderIcons } from 'components/TopHeaderIcons/TopHeaderIcons';

export const TopHeader = () => {
  return (
      <ContactsWrapper>
        <ContactsLink href="mailto:roman@gmail.com">
          roman@gmail.com
        </ContactsLink>
        <div>
          <ContactsLink href="tel:+380996748145">+380996748145</ContactsLink>
          <ContactsLink href="tel:+380966748145">+380966748145</ContactsLink>
        </div>
   <TopHeaderIcons/>
      </ContactsWrapper>
  );
};
