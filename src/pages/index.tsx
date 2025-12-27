import { Link } from "umi";

export default function Home() {
  return (
    <div className="container">
      <div className="card" style={{ padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>TradePi B2B — Expo City</h1>
            <p style={{ margin: "6px 0 0", opacity: 0.75 }}>
              Ürün satışı/ödeme/komisyon yok. Sadece şirket vitrini ve keşif.
            </p>
          </div>

          <Link className="btn" to="/expo">Expo City’ye Gir</Link>
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <span className="card" style={{ padding: "8px 10px", borderRadius: 999, boxShadow: "none" }}>✅ Showroom</span>
          <span className="card" style={{ padding: "8px 10px", borderRadius: 999, boxShadow: "none" }}>✅ Sektör Haritası</span>
          <span className="card" style={{ padding: "8px 10px", borderRadius: 999, boxShadow: "none" }}>✅ Şirket Profili</span>
          <span className="card" style={{ padding: "8px 10px", borderRadius: 999, boxShadow: "none" }}>✅ İletişim / RFQ (opsiyon)</span>
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="grid2">
        <div className="card">
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>Hızlı Keşif</h2>
          <p style={{ marginTop: 8, opacity: 0.75 }}>
            Expo City’de sektör seç, showroom’ları gör, şirket profiline gir.
          </p>
          <Link className="btn ghost" to="/expo">Sektör Haritası</Link>
        </div>

        <div className="card">
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>Kural Net</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, opacity: 0.85 }}>
            <li>Ödeme yok</li>
            <li>Sepet yok</li>
            <li>Kargo/lojistik yok</li>
            <li>Komisyon yok</li>
            <li>Satış yok — vitrin var</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 14, opacity: 0.65, fontSize: 12 }}>
        © {new Date().getFullYear()} TradePiGlobal — Expo City
      </div>
    </div>
  );
}
