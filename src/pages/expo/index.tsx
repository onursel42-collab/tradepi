import { Link } from 'umi';
import { SECTORS } from '@/data/expo';

export default function ExpoCity() {
  return (
    <div className="container">
      <div className="topbar">
        <div className="brand">
          <b>TradePi B2B — Expo City</b>
          <span>Türkiye üreticilerini dünyaya tanıtma vitrini</span>
        </div>
        <Link className="btn btnPrimary" to="/rfq">RFQ Oluştur</Link>
      </div>

      <div className="grid">
        <div className="card span12">
          <div className="h1">Expo City</div>
          <p className="p">
            Sektör binasını seç → kategori mağazalarını gör → paket/yerleşim detayına gir.
          </p>
          <div className="kpi">
            <span>✅ Sektör binaları</span>
            <span>✅ Kategori mağazaları</span>
            <span>✅ Üyelik paketleri</span>
            <span>✅ RFQ</span>
          </div>
        </div>

        {SECTORS.map((s) => (
          <Link key={s.slug} to={`/expo/${s.slug}`} className="card span6">
            <div className="tile">
              <span className="badge">SEKTÖR BİNASI</span>
              <div className="tileTitle">{s.title}</div>
              <p className="tileDesc">{s.subtitle}</p>
              <div className="kpi">
                <span>{s.categories.length} kategori</span>
                <span>Showroom + Store</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
