import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div>
      <h1>Header Auth</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
