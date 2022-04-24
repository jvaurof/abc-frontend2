import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Table,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'

interface ViewPersonProps {
  isOpen: boolean
  onClose: () => void
}

export function ViewPerson({ isOpen, onClose }: ViewPersonProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb="6">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Table variant="simple">
            <Tr>
              <Th>Nome</Th>
              <Td>João</Td>
            </Tr>
            <Tr>
              <Th>Login</Th>
              <Td>João</Td>
            </Tr>
            <Tr>
              <Th>Senha</Th>
              <Td>João</Td>
            </Tr>
            <Tr>
              <Th>Telefone</Th>
              <Td>João</Td>
            </Tr>
            <Tr>
              <Th>CPF</Th>
              <Td>João</Td>
            </Tr>
            <Tr>
              <Th>RG</Th>
              <Td>João</Td>
            </Tr>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
