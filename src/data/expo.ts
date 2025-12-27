export type PackageTier = 'FREE' | 'PRO' | 'EXPO';

export type Category = {
  slug: string;
  title: string;
  short: string;
  packageTiers: PackageTier[];
};

export type Sector = {
  slug: string;
  title: string;
  subtitle: string;
  categories: Category[];
};

export const PACKAGE_INFO: Record<PackageTier, { title: string; priceHint: string; bullets: string[] }> = {
  FREE: {
    title: 'Starter (Free)',
    priceHint: 'Tanıtım amaçlı',
    bullets: [
      '1 showroom kartı',
      'Temel firma profili',
      'RFQ alma / gönderme',
      'Sınırlı görünürlük',
    ],
  },
  PRO: {
    title: 'Pro Showroom',
    priceHint: 'Aylık / Yıllık',
    bullets: [
      'Daha yüksek görünürlük',
      'Ürün + belge alanları geniş',
      'Kategori vitrini önceliği',
      'RFQ yönetimi (panel)',
    ],
  },
  EXPO: {
    title: 'Expo City Store',
    priceHint: 'Premium',
    bullets: [
      'Sektör binasında “mağaza” slotu',
      'Öne çıkan vitrin + marka alanı',
      'Ülke hedefleme + vitrin etiketleri',
      'Öncelikli destek / doğrulama',
    ],
  },
};

export const SECTORS: Sector[] = [
  {
    slug: 'tekstil-moda',
    title: 'Tekstil & Moda',
    subtitle: 'Üretici markalar ve tedarikçiler',
    categories: [
      { slug: 'hazir-giyim', title: 'Hazır Giyim', short: 'Toptan/üretim', packageTiers: ['FREE','PRO','EXPO'] },
      { slug: 'kumas', title: 'Kumaş', short: 'Dokuma/örme', packageTiers: ['PRO','EXPO'] },
      { slug: 'ayakkabi', title: 'Ayakkabı', short: 'OEM/ODM', packageTiers: ['FREE','PRO','EXPO'] },
    ],
  },
  {
    slug: 'gida-tarim',
    title: 'Gıda & Tarım',
    subtitle: 'İhracat odaklı üretim',
    categories: [
      { slug: 'kuruyemis', title: 'Kuruyemiş', short: 'Toplu satış', packageTiers: ['FREE','PRO','EXPO'] },
      { slug: 'bakliyat', title: 'Bakliyat', short: 'Konteyner', packageTiers: ['PRO','EXPO'] },
      { slug: 'zeytin-zeytinyagi', title: 'Zeytin & Zeytinyağı', short: 'Markalı/Private Label', packageTiers: ['FREE','PRO','EXPO'] },
    ],
  },
  {
    slug: 'makine-endustri',
    title: 'Makine & Endüstri',
    subtitle: 'İmalat / otomasyon',
    categories: [
      { slug: 'cnc', title: 'CNC & Tezgah', short: 'Yedek parça', packageTiers: ['PRO','EXPO'] },
      { slug: 'otomasyon', title: 'Otomasyon', short: 'Hat/robotik', packageTiers: ['PRO','EXPO'] },
      { slug: 'yedek-parca', title: 'Yedek Parça', short: 'B2B tedarik', packageTiers: ['FREE','PRO','EXPO'] },
    ],
  },
  {
    slug: 'elektronik-teknoloji',
    title: 'Elektronik & Teknoloji',
    subtitle: 'Bileşenler / üretim',
    categories: [
      { slug: 'led-aydinlatma', title: 'LED & Aydınlatma', short: 'Tedarik', packageTiers: ['FREE','PRO','EXPO'] },
      { slug: 'pcb', title: 'PCB / Kart Üretimi', short: 'OEM', packageTiers: ['PRO','EXPO'] },
      { slug: 'aksesuar', title: 'Aksesuar', short: 'B2B ürünler', packageTiers: ['FREE','PRO','EXPO'] },
    ],
  },
];
