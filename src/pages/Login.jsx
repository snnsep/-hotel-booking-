import { useState } from 'react'
import '../styles/pages.css'

export default function Login() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page login">
      <div className="container login__inner">
        <div className="card login__card">
          <h1>Đăng nhập</h1>
          <p className="login__desc">Dành cho quản trị viên và chủ khách sạn.</p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="account">Tên đăng nhập</label>
              <input id="account" name="account" required autoComplete="username" placeholder="admin" />
            </div>
            <div className="field">
              <label htmlFor="password">Mật khẩu</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="btn btn--primary btn--block">
              Đăng nhập
            </button>
          </form>

          {submitted && (
            <p className="form-success">Đây là giao diện demo — xác thực JWT sẽ nối ở buổi backend.</p>
          )}
        </div>
      </div>
    </section>
  )
}
