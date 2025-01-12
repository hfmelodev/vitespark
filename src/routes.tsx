import { Route, Routes } from 'react-router'
import { App } from './app'
import { NotFound } from './not-found'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
