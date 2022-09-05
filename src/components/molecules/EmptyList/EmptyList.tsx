import { Text } from '@/components/atoms/Text/Text';
import Illustration from '~/svg/illustration-empty.svg';

import { Wrapper } from './EmptyList.styles';

const EmptyList = () => {
  return (
    <Wrapper>
      <h2>There is nothing here</h2>
      <Illustration />
      <Text>
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </Text>
    </Wrapper>
  );
};

export default EmptyList;
