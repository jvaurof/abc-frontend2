import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine, RiDeleteBin4Line } from 'react-icons/ri'

export function Person() {
  return (
    <Flex width="100%" height="100%" justify="center" py="10">
      <Box
        bg="white"
        w="100%"
        maxWidth={1100}
        mx="auto"
        p="8"
        borderRadius="md"
      >
        <Flex justify="space-between" align="center">
          <Heading>Pessoa Física</Heading>
          <Button
            as="a"
            size="sm"
            leftIcon={<Icon as={RiAddLine} fontSize="md" />}
          >
            Cadastrar novo
          </Button>
        </Flex>
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
            <Tr>
              <Td>
                <Checkbox borderColor="gray.600" />
              </Td>
              <Td>João Marcos</Td>
              <Td>24 de abril de 2022</Td>
              <Td>
                <Stack direction="row">
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiDeleteBin4Line} fontSize="md" />}
                  >
                    Excluir
                  </Button>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox borderColor="gray.600" />
              </Td>
              <Td>João Marcos</Td>
              <Td>24 de abril de 2022</Td>
              <Td>
                <Stack direction="row">
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiDeleteBin4Line} fontSize="md" />}
                  >
                    Excluir
                  </Button>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox borderColor="gray.600" />
              </Td>
              <Td>João Marcos</Td>
              <Td>24 de abril de 2022</Td>
              <Td>
                <Stack direction="row">
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiDeleteBin4Line} fontSize="md" />}
                  >
                    Excluir
                  </Button>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox borderColor="gray.600" />
              </Td>
              <Td>João Marcos</Td>
              <Td>24 de abril de 2022</Td>
              <Td>
                <Stack direction="row">
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                  <Button
                    as="a"
                    size="sm"
                    leftIcon={<Icon as={RiDeleteBin4Line} fontSize="md" />}
                  >
                    Excluir
                  </Button>
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  )
}
