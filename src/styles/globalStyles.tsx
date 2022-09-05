import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
	
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

body {
	font-family: 'Spartan', sans-serif;
	font-weight: 500;
  min-height:100vh;
  background-color: ${({ theme }) => theme.colors.neutral[100]}
	}
`;

export default GlobalStyle;
