import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import HotelCard from '../components/HotelCard.jsx'
import { hotels, cities } from '../data/hotels.js'
import '../styles/pages.css'

const PAGE_SIZE = 4
const priceOptions = [
  { value: 'all', label: 'Mọi mức giá' },
  { value: '1000000', label: 'Dưới 1 triệu' },
  { value: '1500000', label: 'Dưới 1,5 triệu' },
  { value: '2000000', label: 'Dưới 2 triệu' },
]
const sortOptions = [
  { value: 'popular', label: 'Phổ biến nhất' },
  { value: 'price-asc', label: 'Giá thấp → cao' },
  { value: 'price-desc', label: 'Giá cao → thấp' },
  { value: 'rating', label: 'Điểm đánh giá' },
]

export default function Hotels() {
  // Đọc điều kiện tìm kiếm từ URL (?city=...&guests=...) do SearchBar đẩy lên
  const [searchParams] = useSearchParams()
  const [city, setCity] = useState(searchParams.get('city') || 'Tất cả')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('popular')
  const [keyword, setKeyword] = useState('')
  const [page, setPage] = useState(1)

  const guests = Number(searchParams.get('guests') || 2)

  const filtered = useMemo(() => {
    const list = hotels.filter((hotel) => {
      const matchCity = city === 'Tất cả' || hotel.city === city
      const matchPrice = price === 'all' || hotel.price <= Number(price)
      const matchKeyword =
        keyword.trim() === '' ||
        hotel.name.toLowerCase().includes(keyword.trim().toLowerCase()) ||
        hotel.address.toLowerCase().includes(keyword.trim().toLowerCase())
      return matchCity && matchPrice && matchKeyword
    })

    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating)
      default:
        return [...list].sort((a, b) => b.reviews - a.reviews)
    }
  }, [city, price, sort, keyword])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function resetPage(setter) {
    return (value) => {
      setter(value)
      setPage(1)
    }
  }

  return (
    <section className="page">
      <div className="page__hero">
        <div className="container">
          <h1>Khách sạn tại Việt Nam</h1>
          <p>
            Tìm thấy <strong>{filtered.length}</strong> khách sạn phù hợp — {guests} khách mỗi phòng.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <div className="field">
            <label htmlFor="kw">Tìm theo tên</label>
            <input
              id="kw"
              type="search"
              placeholder="Ví dụ: Azure, Đà Lạt..."
              value={keyword}
              onChange={(e) => resetPage(setKeyword)(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="f-city">Thành phố</label>
            <select id="f-city" value={city} onChange={(e) => resetPage(setCity)(e.target.value)}>
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="f-price">Mức giá</label>
            <select id="f-price" value={price} onChange={(e) => resetPage(setPrice)(e.target.value)}>
              {priceOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="f-sort">Sắp xếp</label>
            <select id="f-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              {sortOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="empty">Không tìm thấy khách sạn nào khớp điều kiện lọc.</p>
        ) : (
          <div className="hotel-grid">
            {visible.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="pagination" aria-label="Phân trang">
            <button
              type="button"
              className="pagination__btn"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
            >
              ← Trước
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={'pagination__btn' + (n === currentPage ? ' is-active' : '')}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="pagination__btn"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
            >
              Sau →
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}
