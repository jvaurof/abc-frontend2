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
import { useDisclosure } from '@chakra-ui/hooks'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Input } from '../components/Form/Input'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Warning } from '../components/Alert/Waring'

interface FieldProps {
  id: number
  name: string
  login: string
  password: string
  confirmPassword: string
  phone: string
  cpf: string
  rg: string
  cnpj: string
  state_registration: string
  type: 'natural' | 'juridical'
}

interface LocationStateProps {
  isEditing: boolean
  data: FieldProps
}

export function Register() {
  const [isPersonNatural, setIsPersonNatural] = useState(true)

  const formSchema = yup.object().shape({
    name: yup.string().required('O campo Nome é obrigatório'),
    login: yup.string().required('O campo Login é obrigatório'),
    password: yup.string().required('O campo Senha é obrigatório'),
    confirmPassword: yup
      .string()
      .required('O campo Confirmar Senha é obrigatório')
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
    phone: yup.string().required('O campo Telefone é obrigatório'),
    cpf: isPersonNatural
      ? yup.string().required('O campo CPF é obrigatório')
      : yup.string(),
    rg: isPersonNatural
      ? yup.string().required('O campo RG é obrigatório')
      : yup.string(),
    cnpj: !isPersonNatural
      ? yup.string().required('O campo CNPJ é obrigatório')
      : yup.string(),
    state_registration: !isPersonNatural
      ? yup.string().required('O campo Inscrição estadual é obrigatório')
      : yup.string()
  })

  const { register, handleSubmit, formState, setValue } = useForm<FieldProps>({
    resolver: yupResolver(formSchema)
  })
  const { errors } = formState
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()
  const state = location.state as LocationStateProps
  const navigate = useNavigate()

  const handleSignUp: SubmitHandler<FieldProps> = async values => {
    let response
    if (state.isEditing) {
      response = await api.put(`/person/${state.data.id}`, values)
    } else {
      response = await api.post('/person', values)
    }

    if (response.status === 200) {
      navigate('/', { state: { isCreated: true } })
    }

    onToggle()
  }

  useEffect(() => {
    if (state && state.isEditing) {
      setValue('name', state.data.name)
      setValue('login', state.data.login)
      setValue('password', state.data.password)
      setValue('confirmPassword', state.data.password)
      setValue('phone', state.data.phone)
      setValue('rg', state.data.rg ?? '')
      setValue('cpf', state.data.cpf ?? '')
      setValue('cnpj', state.data.cnpj ?? '')
      setValue('state_registration', state.data.state_registration ?? '')
      setValue('type', state.data.type)

      setIsPersonNatural(state.data.type === 'natural')
    }
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
          <Heading>{state.isEditing ? 'Editar' : 'Cadastrar'}</Heading>

          <RadioGroup
            defaultValue={state.isEditing ? state.data.type : 'natural'}
            onChange={() => {
              setIsPersonNatural(!isPersonNatural)
            }}
          >
            <Stack direction="row">
              <Radio
                isReadOnly={state.isEditing}
                value="natural"
                {...register('type')}
              >
                Pessoa Física
              </Radio>
              <Radio
                isReadOnly={state.isEditing}
                value="juridical"
                {...register('type')}
              >
                Pessoa Jurídica
              </Radio>
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

            {isPersonNatural ? (
              <>
                <Input
                  id="cpf"
                  label="CPF"
                  errors={errors.cpf}
                  register={register}
                />

                <Input
                  id="rg"
                  label="RG"
                  errors={errors.rg}
                  register={register}
                />
              </>
            ) : (
              <>
                <Input
                  id="cnpj"
                  label="CNPJ"
                  errors={errors.cnpj}
                  register={register}
                />
                <Input
                  id="state_registration"
                  label="Inscrição estadual"
                  errors={errors.state_registration}
                  register={register}
                />
              </>
            )}
          </SimpleGrid>
          <Stack direction="row">
            <Button
              as={Link}
              to="/"
              isLoading={formState.isSubmitting}
              colorScheme="blue"
              flex={1}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              colorScheme="blue"
              flex={1}
            >
              Salvar
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Warning isOpen={isOpen} onToggle={onToggle} />
    </>
  )
}
