import { useContext } from 'react';

import { ThemesContext } from '@/provider/ThemeProvider';
import MoonIcon from '~/svg/icon-moon.svg';
import SunIcon from '~/svg/icon-sun.svg';

import { IconsWrapper, StyledLabel } from './ThemeToggler.styles';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemesContext);

  return (
    <StyledLabel htmlFor='dark-mode'>
      <input
        type='checkbox'
        onChange={toggleTheme}
        name='DarkMode'
        id='dark-mode'
      />
      <IconsWrapper layout transition={spring}>
        <span>
          <SunIcon></SunIcon>
        </span>
        <span>
          <MoonIcon></MoonIcon>
        </span>
      </IconsWrapper>
    </StyledLabel>
  );
};

export default ThemeToggler;
