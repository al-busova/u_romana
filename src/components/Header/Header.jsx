import { Navigation } from '../Navigation/Navigation';
import { TopWrapper } from './Header.styled';
import { SocialLinks } from 'components/SocialLinks/SocailLinks';
import { TopHeader } from 'components/TopHeader/TopHeader';
import { Logo } from 'components/Logo/Logo';
import { useMedia } from 'react-use';

export const Header = () => {
  const isDesktop = useMedia('(min-width: 768px)');
  return (
    <TopWrapper>
      {isDesktop && <Logo />}
      <div>
        <TopHeader />
        <SocialLinks />
        <header>
            <Navigation />
        </header>
      </div>
    </TopWrapper>
  );
};
