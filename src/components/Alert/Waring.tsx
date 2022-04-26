import { Alert, AlertIcon, CloseButton, Slide } from '@chakra-ui/react'

interface Props {
  onToggle: () => void
  isOpen: boolean
}

export function Warning({ onToggle, isOpen }: Props) {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
        <CloseButton onClick={() => onToggle()} />
      </Alert>
    </Slide>
  )
}
