import type { ReactNode } from 'react';

import { ErrorSpan } from '@/components/atoms/ErrorSpan/ErrorSpan';

import { LabelWrapper, StyledLabel } from './LabelAndError.styles';

type LabelAndErrorProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

const LabelAndError = ({ error, label, children }: LabelAndErrorProps) => {
  return (
    <StyledLabel error={error}>
      <LabelWrapper>
        <span>{label}</span>
        {error && <ErrorSpan>{error}</ErrorSpan>}
      </LabelWrapper>
      {children}
    </StyledLabel>
  );
};

export default LabelAndError;
