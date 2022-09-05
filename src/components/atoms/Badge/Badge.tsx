import type { Status } from '@/types/Invoice';

import { Wrapper } from './Badge.styles';

export type BadgeProps = {
  variant: Status;
  className?: string;
};

const Badge = ({ variant, className }: BadgeProps) => {
  return (
    <Wrapper className={className} variant={variant}>
      <span></span>
      {variant}
    </Wrapper>
  );
};

export default Badge;
