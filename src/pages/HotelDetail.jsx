import { Link, useParams } from 'react-router-dom'
import { hotels, roomTypes, formatVnd } from '../data/hotels.js'
import '../styles/pages.css'

export default function HotelDetail() {
  const { slug } = useParams()
  const hotel = hotels.find((item) => item.slug === slug)

  if (!hotel) {
    return (
      <section className="page">
        <div className="container">
          <h1>Không tìm thấy khách sạn</h1>
          <p>Đường dẫn /hotels/{slug} không tồn tại trong dữ liệu mẫu.</p>
          <Link to="/hotels" className="btn btn--primary">
            ← Về danh sách khách sạn
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="detail">
      <div className="container">
        <p className="breadcrumb">
          <Link to="/">Trang chủ</Link> / <Link to="/hotels">Khách sạn</Link> / <span>{hotel.name}</span>
        </p>

        <div className="detail__head">
          <div>
            <h1>{hotel.name}</h1>
            <p className="detail__address">📍 {hotel.address}</p>
            <ul className="hotel-card__tags">
              {hotel.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="detail__rating">
            <strong>{hotel.rating}</strong>
            <span>{hotel.reviews} đánh giá</span>
          </div>
        </div>

        <img className="detail__cover" src={hotel.image} alt={hotel.name} />

        <p className="detail__desc">{hotel.desc}</p>

        <h2 className="detail__subtitle">Các loại phòng</h2>

        <div className="room-list">
          {roomTypes.map((room) => (
            <article className="room" key={room.id}>
              <img src={room.image} alt={room.name} loading="lazy" />
              <div className="room__body">
                <h3>{room.name}</h3>
                <p className="room__meta">
                  {room.bed} · {room.size} m² · tối đa {room.capacity} khách
                </p>
                <ul className="room__features">
                  {room.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="room__side">
                <span className="room__price">{formatVnd(room.price)}</span>
                <small>/ đêm</small>
                <button type="button" className="btn btn--primary btn--block">
                  Đặt phòng
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="detail__note">
          <strong>Lưu ý:</strong> form đặt phòng (họ tên, SĐT, số lượng phòng, ngày ở) sẽ được nối với API
          backend ở buổi học tiếp theo.
        </div>
      </div>
    </section>
  )
}
