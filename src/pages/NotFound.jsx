import { Link } from 'react-router-dom'
import '../styles/pages.css'

export default function NotFound() {
  return (
    <section className="page notfound">
      <div className="container">
        <p className="notfound__code">404</p>
        <h1>Trang không tồn tại</h1>
        <p>Đường dẫn bạn truy cập không khớp với route nào trong ứng dụng.</p>
        <Link to="/" className="btn btn--primary">
          ← Về trang chủ
        </Link>
      </div>
    </section>
  )
}
