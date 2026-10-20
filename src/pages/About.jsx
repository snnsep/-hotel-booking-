import '../styles/pages.css'

export default function About() {
  return (
    <section className="page">
      <div className="page__hero">
        <div className="container">
          <h1>Giới thiệu</h1>
          <p>AzureStay — dự án môn Lập trình Web, Học viện Công nghệ Bưu chính Viễn thông TP.HCM.</p>
        </div>
      </div>

      <div className="container about">
        <div className="about__text">
          <h2>Chúng tôi làm gì</h2>
          <p>
            AzureStay là nền tảng đặt phòng khách sạn dành cho khách du lịch trong nước. Người dùng có thể tìm
            khách sạn theo thành phố, khoảng giá, loại phòng và khoảng ngày lưu trú; xem chi tiết phòng và đặt
            phòng chỉ với họ tên cùng số điện thoại.
          </p>
          <p>
            Về phía khách sạn, hệ thống cung cấp công cụ quản lý loại phòng, lịch trống theo ngày và danh sách
            đơn đặt phòng. Quản trị viên quản lý tài khoản, danh sách khách sạn và theo dõi toàn bộ hoạt động.
          </p>

          <h2>Định hướng kỹ thuật</h2>
          <ul className="about__list">
            <li>
              <strong>Frontend:</strong> ReactJS + Vite, HTML/CSS thuần, React Router cho điều hướng.
            </li>
            <li>
              <strong>Backend:</strong> NodeJS + ExpressJS, REST API.
            </li>
            <li>
              <strong>Cơ sở dữ liệu:</strong> MySQL (khách sạn, loại phòng, đặt phòng, tài khoản).
            </li>
            <li>
              <strong>Triển khai:</strong> đóng gói Docker và deploy lên hosting.
            </li>
          </ul>
        </div>

        <aside className="about__card">
          <h3>Thông tin dự án</h3>
          <dl>
            <dt>Môn học</dt>
            <dd>Lập trình Web</dd>
            <dt>Đề tài</dt>
            <dd>Số 2 — Website booking khách sạn</dd>
            <dt>Nhóm</dt>
            <dd>2–3 sinh viên</dd>
            <dt>Học kỳ</dt>
            <dd>HK1 — 2026/2027</dd>
          </dl>
        </aside>
      </div>
    </section>
  )
}
