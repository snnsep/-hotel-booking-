import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/hotels', label: 'Khách sạn' },
  { to: '/about-us', label: 'Giới thiệu' },
  { to: '/contact', label: 'Liên hệ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">AZ</span>
          <span>
            <strong>AzureStay</strong>
            <small>Đặt phòng khách sạn</small>
          </span>
        </Link>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => 'navbar__link' + (isActive ? ' is-active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/login" className="btn btn--primary navbar__cta" onClick={() => setOpen(false)}>
            Đăng nhập
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
