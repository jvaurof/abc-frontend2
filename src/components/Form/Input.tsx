import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  id: string
  label: string
  errors?: FieldError
  register?: any
}

export function Input({ id, label, errors, register, ...rest }: InputProps) {
  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} borderColor="gray.400" {...register(id)} {...rest} />

      {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
    </FormControl>
  )
}
