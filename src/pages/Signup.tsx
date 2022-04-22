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
    <Flex width="100%" height="100%" justify="center" py="10">
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
          <Input id="name" label="Nome" />
          <Input id="login" label="Login" />
          <Input id="password" label="Senha" type="password" />
          <Input id="confirmPassword" label="Confirmar Senha" type="password" />
          <Input id="phone" label="Telefone" type="phone" />
          <Input id="cpf" label="CPF" />
          <Input id="rg" label="RG" />
        </SimpleGrid>
        <Button type="submit" colorScheme="blue">
          Cadastrar
        </Button>
      </Stack>
    </Flex>
  )
}
