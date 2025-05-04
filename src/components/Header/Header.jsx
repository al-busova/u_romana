import { Navigation } from '../Navigation/Navigation';
import { HeaderStyled, TopWrapper } from './Header.styled';
import { SocialLinks } from 'components/SocialLinks/SocailLinks';
import { TopHeader } from 'components/TopHeader/TopHeader';
import { Container } from 'components/common/Container.styled';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <TopWrapper>
      <Logo />
      <div >
        <TopHeader />
        <SocialLinks />
        <HeaderStyled>
          <Container>
            <Navigation />
          </Container>
        </HeaderStyled>
      </div>
    </TopWrapper>
  );
};
