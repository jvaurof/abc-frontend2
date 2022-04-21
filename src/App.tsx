import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Hello World</h1>
    </ChakraProvider>
  )
}

export default App
