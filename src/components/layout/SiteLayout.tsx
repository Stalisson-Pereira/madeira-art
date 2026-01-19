import { Outlet } from 'react-router-dom'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'

export default function SiteLayout() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="min-h-[calc(100dvh-64px)]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

