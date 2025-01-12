import { useState } from 'react'
import { Button } from './components/ui/button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Button type="button" onClick={() => setCount(count => count + 1)}>
        count is {count}
      </Button>
      <p>
        Edit <code>src/app.tsx</code> and save
      </p>
    </div>
  )
}
