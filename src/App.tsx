import { ThemeProvider } from 'styled-components'

import { DefaultLayout } from './layouts/DefaultLayout'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <DefaultLayout />
    </ThemeProvider>
  )
}
