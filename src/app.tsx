import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router'
import { Router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | ViteSpark" />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  )
}
