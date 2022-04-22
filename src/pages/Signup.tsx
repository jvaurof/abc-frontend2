import {
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

interface FieldProps {
  name: string
  login: string
  password: string
  confirmPassword: string
  phone: string
  cpf: string
  rg: string
}

const formSchema = yup.object().shape({
  name: yup.string().required('O campo Nome é obrigatório'),
  login: yup.string().required('O campo Login é obrigatório'),
  password: yup.string().required('O campo Senha é obrigatório'),
  confirmPassword: yup
    .string()
    .required('O campo Confirmar Senha é obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
  phone: yup.string().required('O campo Telefone é obrigatório'),
  cpf: yup.string().required('O campo CPF é obrigatório'),
  rg: yup.string().required('O campo RG é obrigatório')
})

export function Signup() {
  const { register, handleSubmit, formState } = useForm<FieldProps>({
    resolver: yupResolver(formSchema)
  })

  const { errors } = formState

  const handleSignUp: SubmitHandler<FieldProps> = values => {
    console.log(values)
  }

  return (
    <Flex width="100%" height="100%" justify="center" py="10">
      <Stack
        as="form"
        width="100%"
        maxWidth={500}
        background="white"
        boxShadow="2xl"
        borderRadius="lg"
        padding="8"
        mx="4"
        spacing="6"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Heading>Cadastre-se</Heading>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="1">Pessoa Física</Radio>
            <Radio value="2">Pessoa Jurídica</Radio>
          </Stack>
        </RadioGroup>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          <Input
            id="name"
            label="Nome"
            errors={errors.name}
            register={register}
          />
          <Input
            id="login"
            label="Login"
            errors={errors.login}
            register={register}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            errors={errors.password}
            register={register}
          />
          <Input
            id="confirmPassword"
            label="Confirmar Senha"
            type="password"
            errors={errors.confirmPassword}
            register={register}
          />
          <Input
            id="phone"
            label="Telefone"
            type="phone"
            errors={errors.phone}
            register={register}
          />
          <Input id="cpf" label="CPF" errors={errors.cpf} register={register} />
          <Input id="rg" label="RG" errors={errors.rg} register={register} />
        </SimpleGrid>
        <Button type="submit" colorScheme="blue">
          Cadastrar
        </Button>
      </Stack>
    </Flex>
  )
}
