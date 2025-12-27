import { Link, useParams, history } from 'umi';
import { SECTORS, PACKAGE_INFO } from '@/data/expo';

export default function CategoryStore() {
  const params = useParams();
  const sectorSlug = String(params.sector || '');
  const categorySlug = String(params.category || '');

  const sector = SECTORS.find((s) => s.slug === sectorSlug);
  const category = sector?.categories.find((c) => c.slug === categorySlug);

  if (!sector || !category) {
    return (
      <div className="container">
        <div className="topbar">
          <div className="brand">
            <b>Mağaza bulunamadı</b>
            <span>Expo City</span>
          </div>
          <Link className="btn" to="/expo">Expo City</Link>
        </div>
        <div className="card" style={{ marginTop: 14 }}>
          Bu sayfa yok. <Link to="/expo">Expo City’e dön</Link>
        </div>
      </div>
    );
  }

  const goRFQ = () => {
    const q = new URLSearchParams({
      sector: sector.title,
      category: category.title,
    });
    history.push(`/rfq?${q.toString()}`);
  };

  return (
    <div className="container">
      <div className="topbar">
        <div className="brand">
          <b>{sector.title} → {category.title}</b>
          <span>Kategori mağazası / Paket yerleşimleri</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link className="btn" to={`/expo/${sector.slug}`}>Sektöre dön</Link>
          <button className="btn btnPrimary" onClick={goRFQ}>Bu kategori için RFQ</button>
        </div>
      </div>

      <div className="grid">
        <div className="card span12">
          <div className="h1">Üyelik Paketleri</div>
          <p className="p">
            Bu mağazada üreticiler paket seçerek vitrine yerleşir. Alıcılar RFQ ile talep açar.
          </p>
        </div>

        {category.packageTiers.map((tier) => {
          const p = PACKAGE_INFO[tier];
          return (
            <div key={tier} className="card span4">
              <div className="tile">
                <span className="badge">{tier}</span>
                <div className="tileTitle">{p.title}</div>
                <p className="tileDesc">{p.priceHint}</p>
                <div className="hr" />
                <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', fontSize: 13 }}>
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="hr" />
                <button className="btn" onClick={goRFQ} style={{ width: '100%' }}>
                  RFQ ile Talep Başlat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
