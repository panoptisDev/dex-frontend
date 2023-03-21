import { Modal, ModalBody, ModalCloseButton, ModalContent } from '@chakra-ui/modal';
import { Heading, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pool: any;
  description?: () => ReactNode;
};

export function PoolAboutThisProjectModal({ isOpen, onClose, pool, description }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay
          bg={`radial-gradient(circle at center,
          #4132D0 0%,
          rgba(0,0,0, 0.8) 70% )`}
        />
        <ModalContent
          bgColor="rgba(0, 0, 0, 0.8)"
          boxShadow="0 0 10px #5BC0F8, 0 0 20px #4A4AF6"
          borderRadius="16px"
          mb="2"
          padding="4"
        >
          <ModalCloseButton />

          <ModalHeader className="bg">
            <Heading size="lg" noOfLines={1}>
              About {pool.name}
            </Heading>
          </ModalHeader>
          <ModalBody className="bg" pb="2">{description()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
