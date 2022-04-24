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
import { Link } from 'react-router-dom'

interface MyTableProps {
  onOpenViewPerson: () => void
}

const people = [
  {
    id: '123',
    name: 'John',
    date: '24/04/1993'
  },
  {
    id: '1235',
    name: 'John',
    date: '24/04/1993'
  }
]

export function MyTable({ onOpenViewPerson }: MyTableProps) {
  return (
    <Table>
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
        {people.map(person => (
          <Tr key={person.id}>
            <Td>
              <Checkbox borderColor="gray.600" />
            </Td>
            <Td>{person.name}</Td>
            <Td>{person.date}</Td>
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
                  as={Link}
                  to="/signup"
                  state={{ isEditing: true }}
                  size="sm"
                  leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                >
                  Editar
                </Button>
              </Stack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
