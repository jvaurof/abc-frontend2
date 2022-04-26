import {
  Alert,
  AlertIcon,
  CloseButton,
  Flex,
  Slide,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { MyTable } from '../components/MyTable'
import { Pagination } from '../components/Pagination'

interface LocationStateProps {
  isCreated: boolean
}

export function Person() {
  const { isOpen: isOpenAlert, onToggle } = useDisclosure()
  const location = useLocation()
  const state = location.state as LocationStateProps

  useEffect(() => {
    if (state?.isCreated) {
      return onToggle()
    }
  }, [state?.isCreated])

  return (
    <>
      <Flex width="100%" height="100%" justify="center" py="10">
        <Stack
          bg="white"
          w="100%"
          maxWidth={1100}
          mx="auto"
          p="8"
          borderRadius="md"
          spacing="10"
        >
          <Header />
          <MyTable />
          <Pagination />
        </Stack>
      </Flex>

      <Slide direction="bottom" in={isOpenAlert} style={{ zIndex: 10 }}>
        {state?.isCreated && (
          <Alert status="success" display="flex" justifyContent="center">
            <AlertIcon />
            Cadastro realizado com sucesso.
            <CloseButton onClick={() => onToggle()} />
          </Alert>
        )}
      </Slide>
    </>
  )
}
