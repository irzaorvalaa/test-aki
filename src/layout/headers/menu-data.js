const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    has_children: false,
    title: "Beranda",
    link: "/",
    sub_menus: [],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    has_children: true,
    title: "Tentang",
    link: "#",
    sub_menus: [
      { link: "/about", title: "Tentang Kami" },
      { link: "/galeri", title: "Galeri Kami" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "Produk Kami",
    link: "#",
    sub_menus: [
      { link: "/product", title: "Produk" },
      { link: "/service", title: "Layanan" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    has_children: false,
    link: "/contact",
    title: "Hubungi Kami",
    sub_menus: [],
  },
];
export default menu_data;
