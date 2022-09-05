import { TransparentButton } from '@/components/atoms/TransparentButton/TransparentButton';
import ThemeToggler from '@/components/molecules/ThemeToggler/ThemeToggler';
import { useAuth } from '@/provider/AuthProvider';
import UserAvatar from '~/svg/icon-user.svg';
import Logo from '~/svg/logo.svg';

import { LogoWrapper, Panel, UserWrapper, Wrapper } from './Navbar.styles';

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Panel>
        <ThemeToggler />
        {user ? (
          <TransparentButton type='button' onClick={logOut}>
            Log Out
          </TransparentButton>
        ) : null}
        <UserWrapper>
          <UserAvatar />
        </UserWrapper>
      </Panel>
    </Wrapper>
  );
};

export default Navbar;
