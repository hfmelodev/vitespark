import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="container flex flex-col gap-4 mx-auto">
      <h1>Header App</h1>

      <div className="flex-1 px-4">
        <Outlet />
      </div>
    </div>
  )
}
