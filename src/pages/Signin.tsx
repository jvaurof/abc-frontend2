import {
  Button,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../components/Form/Input'

interface FieldProps {
  login: string
  password: string
}

export function Signin() {
  const { register, handleSubmit, formState } = useForm<FieldProps>()

  const handleSignIn: SubmitHandler<FieldProps> = values => {
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Heading>Entrar</Heading>
        <Input id="login" label="Login" register={register} />
        <Input
          id="password"
          label="Senha"
          register={register}
          type="password"
        />
        <Button
          type="submit"
          isLoading={formState.isSubmitting}
          colorScheme="blue"
        >
          Entrar
        </Button>
        <ChakraLink to="/signup" as={Link} textAlign="center">
          Criar conta
        </ChakraLink>
      </Stack>
    </Flex>
  )
}
