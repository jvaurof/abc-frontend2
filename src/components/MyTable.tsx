import {
  Button,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RiPencilLine, RiEyeLine, RiDeleteBin4Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { api } from '../services/api'
import { DeleteAlert } from '../components/Modal/DeleteAlert'
import { ViewPerson } from '../components/Modal/ViewPerson'

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

export function MyTable() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await api.get('/person')

    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const {
    isOpen: isOpenDeleteAlert,
    onOpen: onOpenDeleteAlert,
    onClose: onCloseDeleteAlert
  } = useDisclosure()

  const {
    isOpen: isOpenViewPerson,
    onOpen: onOpenViewPerson,
    onClose: onCloseViewPerson
  } = useDisclosure()

  const [deleteId, setDeleteId] = useState(0)
  const [selectedPerson, setSelectedPerson] = useState<FieldProps>(
    {} as FieldProps
  )

  async function handeleDelete() {
    await api.delete(`/person/${deleteId}`)
    onCloseDeleteAlert()
    fetchData()
  }

  return (
    <>
      <DeleteAlert
        onDelete={handeleDelete}
        onClose={onCloseDeleteAlert}
        isOpen={isOpenDeleteAlert}
      />
      <ViewPerson
        onClose={onCloseViewPerson}
        isOpen={isOpenViewPerson}
        person={selectedPerson}
      />

      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Pessoa</Th>
            <Th width="8"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((person: FieldProps) => (
            <Tr key={person.id}>
              <Td>{person.name}</Td>
              <Td>{person.type === 'natural' ? 'Física' : 'Jurídica'}</Td>
              <Td>
                <Stack direction="row">
                  <Button
                    size="sm"
                    onClick={() => {
                      onOpenViewPerson()
                      setSelectedPerson(person)
                    }}
                    leftIcon={<Icon as={RiEyeLine} fontSize="md" />}
                  >
                    Visualizar
                  </Button>

                  <Button
                    as={Link}
                    to="/signup"
                    state={{ isEditing: true, data: person }}
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      onOpenDeleteAlert()
                      setDeleteId(person.id)
                    }}
                    leftIcon={<Icon as={RiDeleteBin4Line} fontSize="md" />}
                  >
                    Excluir
                  </Button>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  )
}
