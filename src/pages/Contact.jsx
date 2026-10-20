import { useState } from 'react'
import '../styles/pages.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.target.reset()
  }

  return (
    <section className="page">
      <div className="page__hero">
        <div className="container">
          <h1>Liên hệ</h1>
          <p>Gửi câu hỏi hoặc yêu cầu hợp tác, chúng tôi phản hồi trong 24 giờ.</p>
        </div>
      </div>

      <div className="container contact">
        <form className="card contact__form" onSubmit={handleSubmit}>
          <h2>Gửi tin nhắn</h2>

          <div className="field">
            <label htmlFor="name">Họ và tên</label>
            <input id="name" name="name" required placeholder="Nguyễn Văn A" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="email@example.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Số điện thoại</label>
            <input id="phone" name="phone" placeholder="09xx xxx xxx" />
          </div>
          <div className="field">
            <label htmlFor="message">Nội dung</label>
            <textarea id="message" name="message" rows="4" required placeholder="Bạn cần hỗ trợ gì?" />
          </div>

          <button type="submit" className="btn btn--primary btn--block">
            Gửi tin nhắn
          </button>

          {sent && <p className="form-success">Đã ghi nhận tin nhắn (demo UI, chưa gửi tới server).</p>}
        </form>

        <div className="card contact__info">
          <h3>Thông tin liên hệ</h3>
          <p>
            <strong>Trụ sở:</strong> 11 Nguyễn Đình Chiểu, Quận 1, TP.HCM
          </p>
          <p>
            <strong>Hotline:</strong> 1900 1234 (24/7)
          </p>
          <p>
            <strong>Email:</strong> hotro@azurestay.vn
          </p>
          <p>
            <strong>Giờ làm việc:</strong> 08:00 – 18:00, Thứ 2 – Thứ 7
          </p>
        </div>
      </div>
    </section>
  )
}
