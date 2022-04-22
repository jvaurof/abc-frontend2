import {
  Button,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Form/Input'

export function Signin() {
  return (
    <Flex width="100vw" height="100vh" justify="center" align="center">
      <Stack
        as="form"
        width="100%"
        maxWidth={360}
        background="white"
        boxShadow="2xl"
        borderRadius="lg"
        padding="8"
        spacing="4"
      >
        <Heading>Entrar</Heading>
        <Input name="login" label="Login" />
        <Input name="password" label="Senha" type="password" />
        <Button type="submit" colorScheme="blue">
          Entrar
        </Button>
        <ChakraLink to="/signup" as={Link} textAlign="center">
          Criar conta
        </ChakraLink>
      </Stack>
    </Flex>
  )
}
