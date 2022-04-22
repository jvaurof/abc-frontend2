import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  id: string
  label: string
  register?: any
}

export function Input({ id, label, register, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} borderColor="gray.400" {...register(id)} {...rest} />
    </FormControl>
  )
}
