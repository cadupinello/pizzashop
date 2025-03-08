import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <main className="fkex-col flex flex-1 gap-4 p-0 pt-6">
        <Outlet />
      </main>
    </div>
  )
}
