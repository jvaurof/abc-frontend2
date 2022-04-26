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

interface FieldProps {
  id: number
  name: string
  login: string
  password: string
  confirmPassword: string
  phone: string
  cpf: string
  rg: string
  cnpj: string
  state_registration: string
  type: 'natural' | 'juridical'
}

interface ViewPersonProps {
  isOpen: boolean
  onClose: () => void
  person: FieldProps
}

export function ViewPerson({ isOpen, onClose, person }: ViewPersonProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb="6">
        <ModalHeader>
          {person.type === 'natural' ? 'Pessoa Física' : 'Pessoa Jurídica'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Table variant="simple">
            <Tr>
              <Th>Nome</Th>
              <Td>{person.name}</Td>
            </Tr>
            <Tr>
              <Th>Login</Th>
              <Td>{person.login}</Td>
            </Tr>
            <Tr>
              <Th>Telefone</Th>
              <Td>{person.phone}</Td>
            </Tr>
            {person.type === 'natural' ? (
              <>
                <Tr>
                  <Th>CPF</Th>
                  <Td>{person.cpf}</Td>
                </Tr>
                <Tr>
                  <Th>RG</Th>
                  <Td>{person.rg}</Td>
                </Tr>
              </>
            ) : (
              <>
                <Tr>
                  <Th>CNPJ</Th>
                  <Td>{person.cnpj}</Td>
                </Tr>
                <Tr>
                  <Th>Inscrição estadual</Th>
                  <Td>{person.state_registration}</Td>
                </Tr>
              </>
            )}
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
