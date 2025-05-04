import {
  SocialLinksItem,
  SocialLinksList,
  SocialLink,
  StyledFacebook,
  StyledInstagram,
  StyledViber,
  StyledTelegram
} from './SocailLinks.styled';
export const SocialLinks = () => {
  return (
    <SocialLinksList>
      <SocialLinksItem>
        <SocialLink href="https://www.facebook.com/" target='_blank'>
          <StyledFacebook />
        </SocialLink>
      </SocialLinksItem>
      <SocialLinksItem>
        <SocialLink href="https://www.instagram.com/" target='_blank'>
          <StyledInstagram />
        </SocialLink>
      </SocialLinksItem>
      <SocialLinksItem>
        <SocialLink href="https://www.viber.com/" target='_blank'>
          <StyledViber />
        </SocialLink>
      </SocialLinksItem>
      <SocialLinksItem>
        <SocialLink href="https://web.telegram.org/a/" target='_blank'>
          <StyledTelegram />
        </SocialLink>
      </SocialLinksItem>
    </SocialLinksList>
  );
};
