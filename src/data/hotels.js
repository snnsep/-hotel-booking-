// Dữ liệu mẫu cho trang chủ & trang danh sách khách sạn.
// Ở các buổi sau dữ liệu này sẽ được thay bằng API từ backend (Express + MySQL).
export const hotels = [
  {
    slug: 'azure-bay-resort-da-nang',
    name: 'Azure Bay Resort',
    city: 'Đà Nẵng',
    address: 'Võ Nguyên Giáp, Sơn Trà, Đà Nẵng',
    price: 1850000,
    rating: 4.8,
    reviews: 412,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    tags: ['Hồ bơi vô cực', 'Sát biển', 'Bữa sáng'],
    desc: 'Khu nghỉ dưỡng hướng biển với hồ bơi vô cực nhìn ra vịnh Đà Nẵng, cách bãi Mỹ Khê 2 phút đi bộ.',
  },
  {
    slug: 'lotus-hotel-ha-noi',
    name: 'Lotus Boutique Hotel',
    city: 'Hà Nội',
    address: 'Hàng Bạc, Hoàn Kiếm, Hà Nội',
    price: 920000,
    rating: 4.6,
    reviews: 268,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
    tags: ['Trung tâm phố cổ', 'View hồ', 'Đưa đón sân bay'],
    desc: 'Khách sạn boutique trong khu phố cổ, phòng ốc ấm cúng, ban công nhìn ra phố Hàng Bạc.',
  },
  {
    slug: 'saigon-riverside-hotel',
    name: 'Saigon Riverside Hotel',
    city: 'TP. Hồ Chí Minh',
    address: 'Tôn Đức Thắng, Quận 1, TP.HCM',
    price: 1350000,
    rating: 4.5,
    reviews: 531,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
    tags: ['View sông', 'Rooftop bar', 'Phòng gym'],
    desc: 'Toà nhà 18 tầng bên bờ sông Sài Gòn, rooftop bar ngắm thành phố về đêm.',
  },
  {
    slug: 'pine-hill-dalat',
    name: 'Pine Hill Retreat',
    city: 'Đà Lạt',
    address: 'Trần Phú, Phường 3, Đà Lạt',
    price: 780000,
    rating: 4.7,
    reviews: 189,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
    tags: ['View đồi thông', 'Lò sưởi', 'Yên tĩnh'],
    desc: 'Biệt thự gỗ giữa đồi thông, có lò sưởi trong phòng và vườn hoa riêng.',
  },
  {
    slug: 'nha-trang-sunrise',
    name: 'Sunrise Nha Trang',
    city: 'Nha Trang',
    address: 'Trần Phú, Lộc Thọ, Nha Trang',
    price: 1120000,
    rating: 4.4,
    reviews: 623,
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80',
    tags: ['Bãi biển riêng', 'Bữa sáng', 'Spa'],
    desc: 'Khách sạn sát biển với bãi tắm riêng và khu spa – xông hơi đạt chuẩn 4 sao.',
  },
  {
    slug: 'phu-quoc-pearl-villas',
    name: 'Pearl Island Villas',
    city: 'Phú Quốc',
    address: 'Bãi Trường, Dương Đông, Phú Quốc',
    price: 2450000,
    rating: 4.9,
    reviews: 97,
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=80',
    tags: ['Villa riêng', 'Hồ bơi riêng', 'Sát biển'],
    desc: 'Chuỗi villa riêng hướng hoàng hôn, mỗi villa có hồ bơi và sân vườn riêng.',
  },
]

export const roomTypes = [
  {
    id: 'standard',
    name: 'Phòng Standard',
    bed: '1 giường đôi',
    size: 22,
    price: 920000,
    capacity: 2,
    features: ['Điều hoà', 'Wi-Fi', 'TV 40"', 'Nóng lạnh'],
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deluxe',
    name: 'Phòng Deluxe hướng biển',
    bed: '1 giường King',
    size: 32,
    price: 1450000,
    capacity: 2,
    features: ['Ban công', 'Bồn tắm', 'Minibar', 'Bữa sáng'],
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'suite',
    name: 'Suite gia đình',
    bed: '1 King + 2 Single',
    size: 48,
    price: 2350000,
    capacity: 4,
    features: ['2 phòng ngủ', 'Bếp nhỏ', 'Sofa', 'View biển'],
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
  },
]

export const cities = ['Tất cả', 'Hà Nội', 'Đà Nẵng', 'Nha Trang', 'Đà Lạt', 'Phú Quốc', 'TP. Hồ Chí Minh']

export function formatVnd(value) {
  return value.toLocaleString('vi-VN') + ' ₫'
}
