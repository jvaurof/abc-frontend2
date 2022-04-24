import {
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack
} from '@chakra-ui/react'
import { useState } from 'react'
import { RiAddLine, RiDeleteBin4Line, RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface HeaderProps {
  onOpenDeleteAlert: () => void
}

export function Header({ onOpenDeleteAlert }: HeaderProps) {
  const [search, setSearch] = useState('')

  return (
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
          state={{ isEditing: false }}
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
  )
}
