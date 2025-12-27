import { defineConfig } from "umi";

export default defineConfig({
  title: "TradePi B2B Showroom",
  npmClient: "npm",
  // sayfa routing otomatik (src/pages)
  history: { type: "browser" }
});
