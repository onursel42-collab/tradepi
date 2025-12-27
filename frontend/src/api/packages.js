// packages.js - Paket listesi çekme fonksiyonu
export async function getPackages() {
  // Gerçek backend entegrasyonu için URL değiştirin
  return fetch("/api/package").then(res => res.json());
}
