import type { ReactNode } from 'react';

import Navbar from '@/components/organisms/Navbar/Navbar';

import { LayoutContainer, Wrapper } from './MainTemplate.styles';

type MainTemplateProps = {
  children?: ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Wrapper>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </Wrapper>
  );
};

export default MainTemplate;
