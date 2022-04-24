import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  RiAddLine,
  RiPencilLine,
  RiDeleteBin4Line,
  RiEyeLine,
  RiSearchLine
} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { DeleteAlert } from '../components/Modal/DeleteAlert'
import { ViewPerson } from '../components/Modal/ViewPerson'

export function Person() {
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

  const [search, setSearch] = useState('')

  return (
    <>
      <DeleteAlert onClose={onCloseDeleteAlert} isOpen={isOpenDeleteAlert} />
      <ViewPerson onClose={onCloseViewPerson} isOpen={isOpenViewPerson} />
      <Flex width="100%" height="100%" justify="center" py="10">
        <Box
          bg="white"
          w="100%"
          maxWidth={1100}
          mx="auto"
          p="8"
          borderRadius="md"
        >
          <Stack direction="row" spacing="16">
            <Heading>Pessoa</Heading>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={RiSearchLine} fontSize="md" />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Nome"
                onChange={event => setSearch(event.target.value)}
              />
              <InputRightElement width="4.5rem" mr="1">
                <Button
                  size="sm"
                  onClick={() => {
                    if (search === '') return

                    console.log(search)
                  }}
                >
                  Buscar
                </Button>
              </InputRightElement>
            </InputGroup>

            <Stack direction="row">
              <Button
                as={Link}
                to="/signup"
                size="sm"
                leftIcon={<Icon as={RiAddLine} fontSize="md" />}
              >
                Cadastrar novo
              </Button>
              <Button
                size="sm"
                onClick={onOpenDeleteAlert}
                leftIcon={<Icon as={RiDeleteBin4Line} fontSize="md" />}
              >
                Excluir
              </Button>
            </Stack>
          </Stack>
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
        </Box>
      </Flex>
    </>
  )
}
