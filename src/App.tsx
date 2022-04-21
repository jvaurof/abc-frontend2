import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { Signin } from './pages/Signin'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Signin />
    </ChakraProvider>
  )
}

export default App
