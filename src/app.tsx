import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'sonner'
import { Routes } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Crypton" />
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  )
}
