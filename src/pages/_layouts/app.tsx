import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-6 pt-6">
        <Outlet />
      </main>
    </div>
  )
}
