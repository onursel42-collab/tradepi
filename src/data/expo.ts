export const SECTORS = [
  {
    id: 'tekstil',
    title: 'Tekstil & Moda',
    color: 'red',
    // Şehir ekranında bina hotspot koordinatları (responsive için yüzde)
    hotspot: { x: 12, y: 55, w: 18, h: 26 },
    categories: [
      { id: 'kumas', title: 'Kumaş', stores: 24 },
      { id: 'hazirgiyim', title: 'Hazır Giyim', stores: 18 },
      { id: 'aksesuar', title: 'Aksesuar', stores: 12 },
    ],
  },
  {
    id: 'gida',
    title: 'Gıda & Tarım',
    color: 'green',
    hotspot: { x: 38, y: 48, w: 20, h: 30 },
    categories: [
      { id: 'kuruyemis', title: 'Kuruyemiş', stores: 15 },
      { id: 'bakliyat', title: 'Bakliyat', stores: 20 },
      { id: 'zeytin', title: 'Zeytin & Yağ', stores: 11 },
    ],
  },
  // ... tüm sektörler böyle
];

export const MEMBERSHIP_PACKAGES = [
  {
    id: 'basic',
    title: 'BASIC SHOWROOM',
    price: 'Ücretsiz / Davetli',
    features: ['Firma profili', '1 showroom sayfası', 'Temel ürün vitrin'],
  },
  {
    id: 'pro',
    title: 'PRO EXPO BOOTH',
    price: 'Aylık',
    features: ['Sektör içi öne çıkma', 'RFQ paneli', 'Belge doğrulama rozeti'],
  },
  {
    id: 'enterprise',
    title: 'ENTERPRISE CITY',
    price: 'Teklif',
    features: ['Özel bina/kat', 'API entegrasyon', 'Öncelikli destek'],
  },
];
