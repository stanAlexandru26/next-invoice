import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const StyledDialogPanel = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ContentWrapper = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 0px 20px 20px 0px;
  padding: 0rem 5rem;
  overflow-y: auto;
  position: relative;
  width: 50rem;
  height: 100vh;
`;
