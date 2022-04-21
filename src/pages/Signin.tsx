import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react'

export function Signin() {
  return (
    <Flex width="100vw" height="100vh" justify="center" align="center">
      <Stack
        width="100%"
        maxWidth={360}
        background="white"
        boxShadow="2xl"
        borderRadius="lg"
        padding="8"
        spacing="4"
      >
        <Heading>Entrar</Heading>
        <FormControl>
          <FormLabel htmlFor="login">Login</FormLabel>
          <Input id="login" borderColor="gray.400" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input id="password" type="password" borderColor="gray.400" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Entrar
        </Button>
      </Stack>
    </Flex>
  )
}
