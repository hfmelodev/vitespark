import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div>
      <h1>Header App</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
