import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import HotelCard from '../components/HotelCard.jsx'
import Icon from '../components/Icon.jsx'
import { hotels } from '../data/hotels.js'
import '../styles/home.css'

const features = [
  {
    icon: 'hotel',
    title: 'Khách sạn đã kiểm duyệt',
    desc: 'Mỗi khách sạn đều được đội ngũ AzureStay xác minh hình ảnh, tiện ích và giá phòng trước khi đăng tải.',
  },
  {
    icon: 'tag',
    title: 'Giá tốt, không phí ẩn',
    desc: 'Giá hiển thị là giá cuối cùng cho mỗi đêm. Không phụ phí, không cộng thêm khi thanh toán.',
  },
  {
    icon: 'bolt',
    title: 'Đặt phòng 60 giây',
    desc: 'Chỉ cần họ tên, số điện thoại và khoảng ngày lưu trú — không cần tạo tài khoản.',
  },
  {
    icon: 'support',
    title: 'Hỗ trợ 24/7',
    desc: 'Tổng đài 1900 1234 trực 24/7 để xử lý đổi ngày, huỷ phòng và các sự cố khi nhận phòng.',
  },
]

export default function Home() {
  const featured = hotels.slice(0, 3)

  return (
    <>
      {/* HERO + thanh tìm kiếm */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <p className="hero__eyebrow">Hơn 1.200 khách sạn tại 24 tỉnh thành</p>
          <h1 className="hero__title">
            Tìm nơi lưu trú <span>đúng ý</span> cho chuyến đi của bạn
          </h1>
          <p className="hero__desc">
            So sánh phòng, giá và tiện ích của các khách sạn tại Việt Nam — đặt phòng nhanh chỉ với họ tên và
            số điện thoại.
          </p>

          <SearchBar />

          <div className="hero__stats">
            <div>
              <strong>1.200+</strong>
              <span>Khách sạn</span>
            </div>
            <div>
              <strong>24</strong>
              <span>Tỉnh thành</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Khách hài lòng</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Hỗ trợ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Khách sạn nổi bật */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">Được đặt nhiều nhất</span>
            <h2 className="section__title">Khách sạn nổi bật</h2>
            <p className="section__desc">
              Những khách sạn có điểm đánh giá cao nhất tháng này, phù hợp cho cả kỳ nghỉ gia đình và chuyến
              công tác.
            </p>
          </div>

          <div className="hotel-grid">
            {featured.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>

          <div className="home__more">
            <Link to="/hotels" className="btn btn--outline">
              Xem tất cả khách sạn →
            </Link>
          </div>
        </div>
      </section>

      {/* Vì sao chọn chúng tôi */}
      <section className="section section--sand">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">Vì sao chọn AzureStay</span>
            <h2 className="section__title">Đặt phòng dễ như gọi điện</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <span className="feature__icon" aria-hidden="true">
                  <Icon name={feature.icon} size={24} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA cuối trang */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>Bạn là chủ khách sạn?</h2>
            <p>
              Đăng phòng lên AzureStay để tiếp cận hàng nghìn khách du lịch mỗi tháng. Quản lý phòng, lịch
              trống và đơn đặt phòng ở một nơi duy nhất.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Đăng ký hợp tác
          </Link>
        </div>
      </section>
    </>
  )
}
