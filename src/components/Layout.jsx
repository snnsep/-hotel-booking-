import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import '../styles/components.css'

export default function Layout() {
  const { pathname } = useLocation()

  // Mỗi lần đổi route thì đưa trang về đầu — hành vi quen thuộc của website thật.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
