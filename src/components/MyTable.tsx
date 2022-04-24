import {
  Button,
  Checkbox,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { RiPencilLine, RiEyeLine } from 'react-icons/ri'

interface MyTableProps {
  onOpenViewPerson: () => void
}

export function MyTable({ onOpenViewPerson }: MyTableProps) {
  return (
    <Table mt="10">
      <Thead>
        <Tr>
          <Th>
            <Checkbox borderColor="gray.600" />
          </Th>
          <Th>Nome</Th>
          <Th>Data de cadastro</Th>
          <Th width="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Checkbox borderColor="gray.600" />
          </Td>
          <Td>João Marcos</Td>
          <Td>24 de abril de 2022</Td>
          <Td>
            <Stack direction="row">
              <Button
                size="sm"
                onClick={onOpenViewPerson}
                leftIcon={<Icon as={RiEyeLine} fontSize="md" />}
              >
                Visualizar
              </Button>
              <Button
                size="sm"
                leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
              >
                Editar
              </Button>
            </Stack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
