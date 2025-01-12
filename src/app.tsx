import { Route, Routes } from 'react-router'
import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { NotFound } from './not-found'
import { Auth } from './pages/auth'
import { Home } from './pages/home'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="mypage" element={<h1>MyPage</h1>} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Auth />} />
        <Route path="login" element={<h1>Login</h1>} />
      </Route>

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
