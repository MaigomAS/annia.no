import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function AppShell() {
  return (
    <div className="min-h-screen bg-radial-fjord font-body text-bone">
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:48px_48px] opacity-70" />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
