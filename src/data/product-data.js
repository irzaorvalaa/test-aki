// Data produk aki untuk wilayah Cirebon dan sekitarnya
const product_data = [
  // AMARON - Premium Quality
  // Contoh produk Amaron Go
  {
    id: 1,
    title: "Amaron Go 65D26L",
    img: "https://placehold.co/400x400/10b981/white?text=Amaron+Go+65D26L&font=raleway",
    price: 950000,
    old_price: 1100000,
    category: "amaron-go", // ✅ NEW category
    rating: 5,
    specs: {
      voltage: "12V",
      capacity: "65Ah",
      warranty: "18 Bulan",
    },
    description:
      "Amaron Go adalah aki maintenance free untuk mobil sedan dan MPV dengan teknologi terkini dari Amaron.",
  },

  // Contoh produk Amaron Hi-Life
  {
    id: 2,
    title: "Amaron Hi-Life NS60LS",
    img: "https://placehold.co/400x400/059669/white?text=Amaron+Hi-Life+NS60LS&font=raleway",
    price: 1200000,
    old_price: 1400000,
    category: "amaron-hilife", // ✅ NEW category
    rating: 5,
    specs: {
      voltage: "12V",
      capacity: "45Ah",
      warranty: "24 Bulan",
    },
    description:
      "Amaron Hi-Life adalah aki premium dengan umur lebih panjang dan performa maksimal untuk kendaraan modern.",
  },

  // YUASA - Trusted Japanese Brand
  {
    id: 3,
    img: "https://placehold.co/400x400/ff4757/white?text=Yuasa+NS60&font=raleway",
    title: "Yuasa NS60",
    category: "yuasa",
    price: 800000,
    old_price: 900000,
    rating: 4,
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description:
      "Aki basah berkualitas Jepang untuk mobil sedan dengan performa stabil",
    sm_des: "Kualitas Jepang untuk sedan",
  },
  {
    id: 4,
    img: "https://placehold.co/400x400/ff4757/white?text=Yuasa+NS40ZL&font=raleway",
    title: "Yuasa NS40ZL",
    category: "yuasa",
    price: 600000,
    old_price: 700000,
    rating: 4,
    specs: {
      capacity: "35 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description: "Aki untuk mobil kompak dan city car dengan teknologi Jepang",
    sm_des: "Hemat dan berkualitas untuk mobil kecil",
  },
  {
    id: 5,
    img: "https://placehold.co/400x400/ff4757/white?text=Yuasa+N70&font=raleway",
    title: "Yuasa N70",
    category: "yuasa",
    price: 1100000,
    old_price: 1250000,
    rating: 5,
    specs: {
      capacity: "65 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description: "Aki heavy duty untuk kendaraan besar dengan daya tahan lama",
    sm_des: "Untuk kendaraan komersial dan besar",
  },
  {
    id: 6,
    img: "https://placehold.co/400x400/ff4757/white?text=Yuasa+MF+NS60&font=raleway",
    title: "Yuasa MF NS60",
    category: "yuasa",
    price: 920000,
    old_price: 1050000,
    rating: 5,
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "15 Bulan",
    },
    description: "Maintenance free dengan teknologi terkini dari Yuasa",
    sm_des: "MF series bebas perawatan",
  },

  // GS ASTRA - Local Premium
  {
    id: 7,
    img: "https://placehold.co/400x400/22c55e/white?text=GS+Astra+NS60LS&font=raleway",
    title: "GS Astra NS60LS MF",
    category: "gs",
    price: 780000,
    old_price: 880000,
    rating: 5,
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "15 Bulan",
    },
    description:
      "Aki maintenance free produksi lokal berkualitas internasional",
    sm_des: "Produk lokal berkualitas tinggi",
  },
  {
    id: 8,
    img: "https://placehold.co/400x400/22c55e/white?text=GS+Astra+NS40ZL&font=raleway",
    title: "GS Astra NS40ZL",
    category: "gs",
    price: 580000,
    old_price: 680000,
    rating: 4,
    specs: {
      capacity: "35 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description: "Aki ekonomis untuk mobil kecil dengan jaminan kualitas",
    sm_des: "Ekonomis dan terjangkau",
  },
  {
    id: 9,
    img: "https://placehold.co/400x400/22c55e/white?text=GS+Astra+N70&font=raleway",
    title: "GS Astra Premium N70",
    category: "gs",
    price: 1050000,
    old_price: 1200000,
    rating: 5,
    specs: {
      capacity: "65 Ah",
      voltage: "12V",
      warranty: "15 Bulan",
    },
    description:
      "Aki premium untuk kendaraan besar dan truk dengan daya tinggi",
    sm_des: "Premium series untuk truk",
  },
  {
    id: 10,
    img: "https://placehold.co/400x400/22c55e/white?text=GS+Astra+Gold&font=raleway",
    title: "GS Astra Gold NS60",
    category: "gs",
    price: 720000,
    old_price: 820000,
    rating: 4,
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description: "Seri Gold dengan performa optimal untuk penggunaan harian",
    sm_des: "Gold series terpercaya",
  },

  // INCOE - Budget Friendly
  {
    id: 11,
    img: "https://placehold.co/400x400/f59e0b/white?text=Incoe+Gold+NS60&font=raleway",
    title: "Incoe Gold NS60",
    category: "incoe",
    price: 720000,
    old_price: 820000,
    rating: 4,
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description:
      "Aki basah ekonomis untuk mobil sedan dengan kualitas terjamin",
    sm_des: "Pilihan ekonomis berkualitas",
  },
  {
    id: 12,
    img: "https://placehold.co/400x400/f59e0b/white?text=Incoe+Silver+N70&font=raleway",
    title: "Incoe Silver N70",
    category: "incoe",
    price: 980000,
    old_price: 1100000,
    rating: 4,
    specs: {
      capacity: "65 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description:
      "Aki untuk kendaraan komersial dan pickup dengan harga bersaing",
    sm_des: "Untuk pickup dan komersial",
  },
  {
    id: 13,
    img: "https://placehold.co/400x400/f59e0b/white?text=Incoe+Platinum&font=raleway",
    title: "Incoe Platinum NS40",
    category: "incoe",
    price: 550000,
    old_price: 650000,
    rating: 3,
    specs: {
      capacity: "35 Ah",
      voltage: "12V",
      warranty: "6 Bulan",
    },
    description: "Aki entry level untuk mobil kecil dengan harga terjangkau",
    sm_des: "Entry level terjangkau",
  },
  {
    id: 14,
    img: "https://placehold.co/400x400/f59e0b/white?text=Incoe+Super+NS60&font=raleway",
    title: "Incoe Super NS60",
    category: "incoe",
    price: 680000,
    old_price: 780000,
    rating: 4,
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "10 Bulan",
    },
    description: "Seri Super dengan performa baik untuk kendaraan standar",
    sm_des: "Super series dengan harga hemat",
  },
];

export default product_data;
