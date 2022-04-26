import { Flex, Stack, useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Person/Header'
import { DataTable } from '../components/Person/DataTable'
// import { Pagination } from '../components/Person/Pagination'
import { Success } from '../components/Alert/Success'

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
          <DataTable />
          {/* <Pagination /> */}
        </Stack>
      </Flex>

      <Success
        onToggle={onToggle}
        isOpenAlert={isOpenAlert}
        isCreated={state?.isCreated}
      />
    </>
  )
}
