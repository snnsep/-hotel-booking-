import { Link } from 'react-router-dom'
import { formatVnd } from '../data/hotels.js'

export default function HotelCard({ hotel }) {
  return (
    <article className="hotel-card">
      <Link to={`/hotels/${hotel.slug}`} className="hotel-card__media">
        <img src={hotel.image} alt={hotel.name} loading="lazy" />
        <span className="hotel-card__city">{hotel.city}</span>
      </Link>

      <div className="hotel-card__body">
        <div className="hotel-card__top">
          <h3 className="hotel-card__title">
            <Link to={`/hotels/${hotel.slug}`}>{hotel.name}</Link>
          </h3>
          <span className="hotel-card__rating">★ {hotel.rating}</span>
        </div>

        <p className="hotel-card__address">{hotel.address}</p>

        <ul className="hotel-card__tags">
          {hotel.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="hotel-card__footer">
          <div>
            <span className="hotel-card__price">{formatVnd(hotel.price)}</span>
            <small> / đêm</small>
          </div>
          <Link to={`/hotels/${hotel.slug}`} className="btn btn--primary hotel-card__btn">
            Xem phòng
          </Link>
        </div>
      </div>
    </article>
  )
}
