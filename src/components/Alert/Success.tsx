import { Alert, AlertIcon, CloseButton, Slide } from '@chakra-ui/react'

interface Props {
  onToggle: () => void
  isCreated: boolean
  isOpenAlert: boolean
}

export function Success({ onToggle, isCreated, isOpenAlert }: Props) {
  return (
    <Slide direction="bottom" in={isOpenAlert} style={{ zIndex: 10 }}>
      {isCreated && (
        <Alert status="success" display="flex" justifyContent="center">
          <AlertIcon />
          Cadastro realizado com sucesso.
          <CloseButton onClick={() => onToggle()} />
        </Alert>
      )}
    </Slide>
  )
}
