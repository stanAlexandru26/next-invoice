import React from 'react';

import { Input } from '@/components/atoms/Input/Input';

import LabelAndError from '../LabelAndError/LabelAndError';

type LabeledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  isTransparent?: boolean;
};

const LabeledInput = React.forwardRef<HTMLInputElement, LabeledInputProps>(
  ({ label, error, ...props }: LabeledInputProps, ref) => {
    return (
      <LabelAndError label={label} error={error}>
        <Input error={error} ref={ref} {...props} />
      </LabelAndError>
    );
  }
);

LabeledInput.displayName = 'Labeled Input';
export default LabeledInput;
