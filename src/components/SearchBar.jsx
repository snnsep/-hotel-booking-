import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cities } from '../data/hotels.js'

const today = new Date().toISOString().slice(0, 10)

export default function SearchBar({ compact = false }) {
  const navigate = useNavigate()
  const [city, setCity] = useState('Tất cả')
  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(today)
  const [guests, setGuests] = useState('2')

  function handleSubmit(event) {
    event.preventDefault()
    // Đẩy điều kiện tìm kiếm lên URL: /hotels?city=...&guests=...
    const params = new URLSearchParams()
    if (city !== 'Tất cả') params.set('city', city)
    if (checkIn) params.set('checkIn', checkIn)
    if (checkOut) params.set('checkOut', checkOut)
    params.set('guests', guests)
    navigate(`/hotels?${params.toString()}`)
  }

  return (
    <form className={`search-bar ${compact ? 'search-bar--compact' : ''}`} onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="city">Điểm đến</label>
        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
          {cities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="checkIn">Nhận phòng</label>
        <input id="checkIn" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="checkOut">Trả phòng</label>
        <input id="checkOut" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="guests">Số khách</label>
        <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option value="1">1 khách</option>
          <option value="2">2 khách</option>
          <option value="3">3 khách</option>
          <option value="4">4 khách</option>
        </select>
      </div>

      <button type="submit" className="btn btn--primary search-bar__submit">
        Tìm phòng
      </button>
    </form>
  )
}
