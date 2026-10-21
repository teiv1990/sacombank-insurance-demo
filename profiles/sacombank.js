/*
 * PROFILE DEMO: Sacombank
 * Dùng giao diện riêng (skin "sacombank" – js/skin-sacombank.js, css/skin-sacombank.css)
 * dựng lại theo bố cục app Sacombank Pay. Khách hàng và số liệu là giả định.
 */
(window.PROFILES = window.PROFILES || {})['sacombank'] = {
  id: 'sacombank',
  name: 'Sacombank – Ngân hàng TMCP Sài Gòn Thương Tín',
  appName: 'Sacombank Pay',
  logoText: 'STB',
  skin: 'sacombank',
  numberLocale: 'vi-VN',      // 5.000
  currencySuffix: 'đ',        // 5.000đ

  theme: {
    primary: '#0B56A4',
    primaryDark: '#0B56A4',
    accent: '#F37021',
    soft: '#E8F1FA',
    hero: '#0B56A4'
  },

  // Khách hàng theo tài liệu demo bồi thường iBaohiem
  customer: {
    name: 'ĐẬU NGỌC LINH',
    initials: 'NL',
    greetName: 'LINH',          // tên gọi ở lời chào trang chủ
    account: '102345678306',
    accountType: 'TK thanh toán',
    balance: 86450000,
    phone: '0912 xxx 306',
    idNumber: '0381•••••234',
    dob: '21/07/1992'
  },

  transfer: {
    method: 'Chuyển tiền nhanh 247',
    fee: 0,
    defaultNote: 'DAU NGOC LINH chuyen tien'
  },

  banks: [
    { code: 'STB', name: 'Sacombank', sub: 'NH TMCP Sai Gon Thuong Tin', color: '#0B56A4' },
    { code: 'VCB', name: 'Vietcombank', sub: 'NH TMCP Ngoai Thuong Viet Nam', color: '#0A7A3E' },
    { code: 'TCB', name: 'Techcombank', sub: 'NH TMCP Ky Thuong Viet Nam', color: '#E11D2E' },
    { code: 'BIDV', name: 'BIDV', sub: 'NH TMCP Dau Tu va Phat Trien Viet Nam', color: '#0E7C86' },
    { code: 'CTG', name: 'VietinBank', sub: 'NH TMCP Cong Thuong Viet Nam', color: '#14509B' },
    { code: 'MB', name: 'MB', sub: 'NH TMCP Quan Doi', color: '#1D3FBB' },
    { code: 'ACB', name: 'ACB', sub: 'NH TMCP A Chau', color: '#1B3C8C' },
    { code: 'VPB', name: 'VPBank', sub: 'NH TMCP Viet Nam Thinh Vuong', color: '#0A8F4C' },
    { code: 'TPB', name: 'TPBank', sub: 'NH TMCP Tien Phong', color: '#6B2D8B' },
    { code: 'MOMO', name: 'MoMo', sub: 'CTCP Dich Vu Di Dong Truc Tuyen', color: '#A50064' }
  ],

  contacts: [
    { name: 'NGUYEN THU TRANG', bank: 'VCB', account: '0071000456789' },
    { name: 'LE HOANG NAM', bank: 'STB', account: '060298765432' },
    { name: 'PHAM GIA HAN', bank: 'MOMO', account: '0907123456' },
    { name: 'CONG TY TNHH MINH PHAT', bank: 'BIDV', account: '31410009876543' }
  ],

  insurance: {
    provider: 'Công ty bảo hiểm ABC',          // Tên công ty bảo hiểm hiển thị trong app
    distributorNote: 'Phân phối qua Sacombank Pay',

    placements: {
      home:    { enabled: true, productId: 'health' },
      confirm: {
        enabled: true, productId: 'cyber', minAmount: 0, defaultChecked: true,   // công tắc bảo hiểm bật sẵn
        // Chương trình tặng kỳ đầu (số liệu, điều khoản giả định – thay bằng thể lệ thật trước khi dùng với khách)
        promo: {
          label: 'Tặng tháng đầu',
          freeFirstTerm: true,
          autoRenew: true,
          renewNote: 'Từ tháng thứ 2: 5.000đ/tháng, tự động gia hạn. Hủy bất cứ lúc nào.',
          renewShort: 'Tự động, 5.000đ/tháng từ tháng thứ 2',
          programName: 'Chương trình Tặng tháng đầu An toàn giao dịch',
          terms: [
            'Tặng 30 ngày đầu Bảo hiểm An toàn giao dịch gói Cơ bản, phí 0đ, quyền lợi đến 20.000.000đ.',
            'Từ tháng thứ 2, hợp đồng tự động gia hạn mỗi 30 ngày, phí 5.000đ/tháng trừ từ tài khoản thanh toán.',
            'Sacombank Pay gửi thông báo trước mỗi kỳ gia hạn 3 ngày.',
            'Khách hàng tắt tự động gia hạn bất cứ lúc nào tại mục Bảo hiểm của tôi, không mất phí.',
            'Mỗi khách hàng nhận ưu đãi một lần.'
          ]
        },
        consentText: ''   // không hiện ô tích đồng ý, khách bấm Xác nhận là tham gia
      },
      success: { enabled: true, productIds: ['accident', 'health'] }
    },

    products: {
      cyber: {
        name: 'Bảo hiểm An toàn giao dịch',
        short: 'An toàn giao dịch',
        icon: 'shield',
        color: '#0B56A4',
        tagline: 'Bồi thường khi bị lừa đảo, chiếm đoạt tài khoản ngân hàng',
        offerText: 'Bảo vệ tài khoản trước lừa đảo trực tuyến',
        badge: 'Tặng tháng đầu',
        plans: [
          { name: 'Cơ bản', premium: 5000, coverage: 20000000, term: 30 },
          { name: 'Nâng cao', premium: 15000, coverage: 50000000, term: 30 },
          { name: 'Toàn diện', premium: 99000, coverage: 100000000, term: 365 }
        ],
        benefits: [
          'Lừa đảo chuyển tiền, chiếm đoạt tài khoản: đến 20.000.000đ/vụ',
          'Gian lận thẻ khi thẻ bị mất, bị sao chép: đến 20.000.000đ/vụ',
          'Hạn mức năm 100.000.000đ, cộng mọi quyền lợi',
          'Yêu cầu bồi thường ngay trong app, giải quyết trong 15 ngày kể từ khi đủ hồ sơ'
        ]
      },
      accident: {
        name: 'Bảo hiểm Tai nạn cá nhân 24/7',
        short: 'Tai nạn 24/7',
        icon: 'activity',
        color: '#F97316',
        tagline: 'Chi trả tới 100 triệu khi gặp tai nạn, mọi lúc mọi nơi',
        badge: 'Từ 30.000đ/năm',
        plans: [
          { name: 'Đồng', premium: 30000, coverage: 30000000, term: 365 },
          { name: 'Bạc', premium: 60000, coverage: 60000000, term: 365 },
          { name: 'Vàng', premium: 100000, coverage: 100000000, term: 365 }
        ],
        benefits: [
          'Tử vong / thương tật toàn bộ vĩnh viễn do tai nạn: chi trả 100% số tiền bảo hiểm',
          'Thương tật bộ phận: chi trả theo tỷ lệ thương tật',
          'Chi phí y tế điều trị do tai nạn',
          'Hiệu lực ngay sau khi thanh toán, không cần khám sức khỏe'
        ]
      },
      phone: {
        hidden: true,             // không bán trong app, chỉ có trong hợp đồng khách đã có
        name: 'Bảo hiểm Rơi vỡ màn hình điện thoại',
        short: 'Rơi vỡ màn hình',
        icon: 'phone',
        color: '#0F8F8A',
        tagline: 'Sửa chữa, thay màn hình khi điện thoại bị rơi vỡ',
        plans: [
          { name: 'Tiêu chuẩn', premium: 149000, coverage: 5000000, term: 365 }
        ],
        benefits: [
          'Sửa chữa, thay màn hình do rơi vỡ: đến 5.000.000đ/vụ'
        ]
      },
      health: {
        name: 'Bảo hiểm Sức khỏe An Tâm',
        short: 'Sức khỏe An Tâm',
        icon: 'heart',
        color: '#E11D48',
        tagline: 'Nội trú, ngoại trú, bảo lãnh viện phí tại nhiều bệnh viện',
        badge: 'Từ 2.900đ/ngày',
        plans: [
          { name: 'Cơ bản', premium: 1050000, coverage: 100000000, term: 365 },
          { name: 'Nâng cao', premium: 2350000, coverage: 300000000, term: 365 },
          { name: 'Cao cấp', premium: 4800000, coverage: 1000000000, term: 365 }
        ],
        benefits: [
          'Điều trị nội trú: viện phí, phẫu thuật, phòng bệnh',
          'Điều trị ngoại trú (tùy gói)',
          'Bảo lãnh viện phí tại bệnh viện, phòng khám liên kết',
          'Tự động điền thông tin từ hồ sơ ngân hàng – mua trong 30 giây'
        ]
      }
    },

    // Kịch bản Bồi thường: hợp đồng khách đã có, lấy theo tài liệu demo bồi thường iBaohiem
    claimDemo: {
      policies: [
        // Màn Bảo hiểm của tôi hiện hợp đồng mới nhất trước: xếp ngược để An toàn giao dịch đứng đầu như tài liệu
        { productId: 'accident', no: 'TN2026-10022817', start: '2026-06-05', end: '2027-06-04', plan: { name: 'Nâng cao', coverage: 100000000 }, feeText: '120.000đ' },
        { productId: 'phone', no: 'PH2026-00881245', start: '2026-03-15', end: '2027-03-14', plan: { name: 'Tiêu chuẩn', coverage: 5000000 }, maxText: '5.000.000đ/vụ', feeText: '149.000đ' },
        { productId: 'cyber', no: 'EI2026-40693306', start: '2026-04-20', end: '2027-04-19', plan: { name: 'Cơ bản', coverage: 20000000 }, maxText: '20 triệu/vụ · 100 triệu/năm', feeText: '5.000đ/tháng' }
      ]
    }
  }
};
