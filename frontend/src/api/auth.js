// auth.js - Basit örnek login/register fonksiyonları
export async function login(username, password) {
  // Gerçek backend entegrasyonu için URL değiştirin
  return fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then(res => res.json());
}

export async function register(username, password) {
  // Gerçek backend entegrasyonu için URL değiştirin
  return fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then(res => res.json());
}
