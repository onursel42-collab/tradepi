import { defineConfig } from 'umi';

export default defineConfig({
  title: 'TradePi B2B Showroom',
  npmClient: 'npm',
  history: { type: 'browser' },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/expo', component: '@/pages/expo/index' },
    { path: '/expo/:sector', component: '@/pages/expo/[sector]' },
    { path: '/expo/:sector/:category', component: '@/pages/expo/[sector]/[category]' },
    { path: '/rfq', component: '@/pages/rfq' },
  ],
});
