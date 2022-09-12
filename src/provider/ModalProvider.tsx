import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

type ModalProviderProps = {
  children?: ReactNode;
};

interface ModalContextInterface {
  modalState: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  openModal: () => void;
}

export const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);
const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(!modalState);
  };
  const closeModal = () => {
    setModalState(false);
  };
  const openModal = () => {
    setModalState(true);
  };
  return (
    <ModalContext.Provider
      value={{ modalState, toggleModal, closeModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
