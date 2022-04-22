import {
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack
} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export function Signup() {
  return (
    <Flex width="100vw" height="100vh" justify="center" align="center">
      <Stack
        width="100%"
        maxWidth={500}
        background="white"
        boxShadow="2xl"
        borderRadius="lg"
        padding="8"
        mx="4"
        spacing="6"
        as="form"
      >
        <Heading>Cadastre-se</Heading>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="1">Pessoa Física</Radio>
            <Radio value="2">Pessoa Jurídica</Radio>
          </Stack>
        </RadioGroup>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          <Input name="name" label="Nome" />
          <Input name="login" label="Login" />
          <Input name="password" label="Senha" type="password" />
          <Input
            name="confirmPassword"
            label="Confirmar Senha"
            type="password"
          />
          <Input name="phone" label="Telefone" type="phone" />
          <Input name="cpf" label="CPF" />
          <Input name="rg" label="RG" />
        </SimpleGrid>
        <Button type="submit" colorScheme="blue">
          Cadastrar
        </Button>
      </Stack>
    </Flex>
  )
}
