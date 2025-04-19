import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { Button } from './components/ui/button'

export function NotFound() {
  return (
    <>
      <Helmet title="404" />

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="mt-4 text-xl">Página não encontrada</p>
          <p className="mt-2">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Button asChild className="mt-4">
            <Link
              to="/"
              className="mt-6 inline-block rounded px-6 py-2 shadow transition font-medium"
            >
              Voltar para o início
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
