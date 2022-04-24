import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Flex direction="row" justify="space-between" align="center">
      <Box>
        <Text>1 - 10 de 100</Text>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="blue"
          isDisabled
          _disabled={{ bg: 'blue.500', cursor: 'default' }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          _hover={{ bg: 'blue.500', color: 'white' }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          _hover={{ bg: 'blue.500', color: 'white' }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          _hover={{ bg: 'blue.500', color: 'white' }}
        >
          4
        </Button>
      </Stack>
    </Flex>
  )
}
