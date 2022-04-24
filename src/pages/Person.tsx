import { Flex, Stack, useDisclosure } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { DeleteAlert } from '../components/Modal/DeleteAlert'
import { ViewPerson } from '../components/Modal/ViewPerson'
import { MyTable } from '../components/MyTable'
import { Pagination } from '../components/Pagination'

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

  return (
    <>
      <DeleteAlert onClose={onCloseDeleteAlert} isOpen={isOpenDeleteAlert} />
      <ViewPerson onClose={onCloseViewPerson} isOpen={isOpenViewPerson} />
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
          <Header onOpenDeleteAlert={onOpenDeleteAlert} />
          <MyTable onOpenViewPerson={onOpenViewPerson} />
          <Pagination />
        </Stack>
      </Flex>
    </>
  )
}
