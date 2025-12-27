import { Link, useParams } from 'umi';
import { SECTORS } from '@/data/expo';

export default function SectorPage() {
  const params = useParams();
  const sectorSlug = String(params.sector || '');
  const sector = SECTORS.find((s) => s.slug === sectorSlug);

  if (!sector) {
    return (
      <div className="container">
        <div className="topbar">
          <div className="brand">
            <b>Sektör bulunamadı</b>
            <span>Expo City</span>
          </div>
          <Link className="btn" to="/expo">Expo City</Link>
        </div>
        <div className="card" style={{ marginTop: 14 }}>
          Bu sektör yok. <Link to="/expo">Expo City’e dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="topbar">
        <div className="brand">
          <b>{sector.title}</b>
          <span>{sector.subtitle}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link className="btn" to="/expo">Expo City</Link>
          <Link className="btn btnPrimary" to="/rfq">RFQ Oluştur</Link>
        </div>
      </div>

      <div className="grid">
        <div className="card span12">
          <div className="h1">Kategori Mağazaları</div>
          <p className="p">Bu sektörde kategori seç, mağazaya gir.</p>
        </div>

        {sector.categories.map((c) => (
          <Link
            key={c.slug}
            to={`/expo/${sector.slug}/${c.slug}`}
            className="card span6"
          >
            <div className="tile">
              <span className="badge">KATEGORİ MAĞAZASI</span>
              <div className="tileTitle">{c.title}</div>
              <p className="tileDesc">{c.short}</p>
              <div className="kpi">
                <span>Paket: {c.packageTiers.join(' / ')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
