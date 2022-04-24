import {
  Alert,
  AlertIcon,
  Button,
  CloseButton,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Slide,
  Link as ChakraLink
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDisclosure } from '@chakra-ui/hooks'
import { Link, useLocation } from 'react-router-dom'
import { Input } from '../components/Form/Input'
import { useEffect } from 'react'

interface FieldProps {
  name: string
  login: string
  password: string
  confirmPassword: string
  phone: string
  cpf: string
  rg: string
}

interface LocationStateProps {
  isEditing: boolean
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
  const { register, handleSubmit, formState, setValue } = useForm<FieldProps>({
    resolver: yupResolver(formSchema)
  })
  const { errors } = formState
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()
  const state = location.state as LocationStateProps

  const handleSignUp: SubmitHandler<FieldProps> = values => {
    console.log(values)
    onToggle()
  }

  useEffect(() => {
    if (state && state.isEditing) {
      setValue('name', 'abc')
      setValue('login', 'log')
      setValue('password', '123')
      setValue('confirmPassword', '123')
      setValue('phone', '1235')
      setValue('rg', '999')
      setValue('cpf', '544')
    }
    console.log('2')
  }, [state, setValue])

  return (
    <>
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
            <Input
              id="cpf"
              label="CPF"
              errors={errors.cpf}
              register={register}
            />
            <Input id="rg" label="RG" errors={errors.rg} register={register} />
          </SimpleGrid>
          <Button
            type="submit"
            isLoading={formState.isSubmitting}
            colorScheme="blue"
          >
            Cadastrar
          </Button>
        </Stack>
      </Flex>

      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Alert status="success" display="flex" justifyContent="center">
          <AlertIcon />
          Cadastro realizado com sucesso!
          <ChakraLink to="/" as={Link} mx="1">
            Clique aqui
          </ChakraLink>
          para ir para página de Login
          <CloseButton onClick={() => onToggle()} />
        </Alert>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Slide>
    </>
  )
}
