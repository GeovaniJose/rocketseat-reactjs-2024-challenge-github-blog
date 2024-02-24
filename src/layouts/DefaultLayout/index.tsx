import { Header } from '../../components/Header'

import { LayoutContent } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />

      <LayoutContent>
        <h1>Github Blog</h1>
      </LayoutContent>
    </>
  )
}
