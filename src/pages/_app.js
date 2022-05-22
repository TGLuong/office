import { ChakraProvider } from '@chakra-ui/react'
import '../styles/main.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}