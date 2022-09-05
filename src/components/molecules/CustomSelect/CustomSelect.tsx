// @ts-nocheck
// TODO search for StyledSelect typescript error
import React from 'react';
import type { Props } from 'react-select';

import LabelAndError from '../LabelAndError/LabelAndError';
import { StyledSelect } from './CustomSelect.styles';

type SelectProps = Props & {
  label: string;
  error?: string;
};

const CustomSelect = React.forwardRef<any, SelectProps>(
  ({ label, error, ...props }: SelectProps, ref) => {
    return (
      <LabelAndError label={label} error={error}>
        <StyledSelect
          error={error}
          ref={ref}
          {...props}
          classNamePrefix='react-select'
        ></StyledSelect>
      </LabelAndError>
    );
  }
);
CustomSelect.displayName = 'Custom Select';

export default CustomSelect;
