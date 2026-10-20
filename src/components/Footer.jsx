import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="footer__brand">AzureStay</div>
          <p className="footer__text">
            Nền tảng đặt phòng khách sạn cho khách du lịch Việt Nam — tìm phòng theo thành phố, mức giá và
            khoảng ngày lưu trú.
          </p>
        </div>

        <div className="footer__col">
          <h4>Khám phá</h4>
          <ul>
            <li>
              <Link to="/hotels">Danh sách khách sạn</Link>
            </li>
            <li>
              <Link to="/about-us">Về chúng tôi</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>
              <Link to="/login">Đăng nhập quản trị</Link>
            </li>
            <li>Hotline: 1900 1234</li>
            <li>hotro@azurestay.vn</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© 2026 AzureStay — Bài tập lớn môn Lập trình Web, PTIT HCM.</span>
        </div>
      </div>
    </footer>
  )
}
