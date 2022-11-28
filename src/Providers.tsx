import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from 'state'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import powTheme from 'style/theme'

interface IProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

function Providers(props: IProps) {
  const { children } = props
  return (
    <ThemeProvider theme={powTheme}>
      <Provider store={store}>
        <HelmetProvider>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </PersistGate>
        </HelmetProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default Providers
