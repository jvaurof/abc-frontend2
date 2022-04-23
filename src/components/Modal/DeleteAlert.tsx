import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle
} from '@chakra-ui/react'

interface DeleteAlertProps {
  isOpen: boolean
  onClose: () => void
}

export function DeleteAlert({ isOpen, onClose }: DeleteAlertProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody bg="orange.100">
          <Alert
            status="warning"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for submitting your application. Our team will get back to
              you soon.
            </AlertDescription>
          </Alert>
        </ModalBody>

        <ModalFooter bg="orange.100" justifyContent="center">
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="red">Confirmar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
