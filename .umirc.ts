import { defineConfig } from 'umi';

export default defineConfig({
  title: 'TradePi B2B Expo City',

  npmClient: 'npm',

  history: {
    type: 'hash', // 🔥 EN KRİTİK SATIR
  },

  routes: [
    { path: '/', redirect: '/expo' },
  ],
});
