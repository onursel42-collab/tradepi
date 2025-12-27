import { useMemo, useState } from 'react';
import { history, useLocation, Link } from 'umi';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function RFQPage() {
  const q = useQuery();

  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('United States');
  const [qty, setQty] = useState('1');
  const [details, setDetails] = useState('');

  const sector = q.get('sector') || '';
  const category = q.get('category') || '';

  const submit = () => {
    // Şimdilik backend yok: formu “talep özeti” olarak üretip kullanıcıya veriyoruz.
    const summary =
`RFQ REQUEST
Company: ${company}
Country: ${country}
Qty: ${qty}
Sector: ${sector}
Category: ${category}
Details: ${details}`;

    navigator.clipboard?.writeText(summary).catch(() => {});
    alert('RFQ oluşturuldu ✅ (Özet panoya kopyalandı)');
    history.push('/expo');
  };

  return (
    <div className="container">
      <div className="topbar">
        <div className="brand">
          <b>RFQ Oluştur</b>
          <span>Talep formu (sektör/kategori seçimi otomatik gelebilir)</span>
        </div>
        <Link className="btn" to="/expo">Expo City</Link>
      </div>

      <div className="grid">
        <div className="card span12">
          <div className="h1">Talep Bilgisi</div>
          <p className="p">Bu form “tek adet” gibi küçük taleplerde bile kullanıcıyı yormayacak şekilde kısa tutuldu.</p>

          <div className="formRow">
            <input className="input" placeholder="Şirket / İsim" value={company} onChange={(e) => setCompany(e.target.value)} />
            <select className="select" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option>United States</option>
              <option>Germany</option>
              <option>United Kingdom</option>
              <option>United Arab Emirates</option>
              <option>Saudi Arabia</option>
              <option>France</option>
              <option>Italy</option>
              <option>Netherlands</option>
              <option>Canada</option>
              <option>Turkey</option>
            </select>
          </div>

          <div className="formRow" style={{ marginTop: 10 }}>
            <input className="input" placeholder="Adet (qty)" value={qty} onChange={(e) => setQty(e.target.value)} />
            <input className="input" placeholder="Sektör" value={sector} readOnly />
          </div>

          <div style={{ marginTop: 10 }}>
            <input className="input" placeholder="Kategori" value={category} readOnly />
          </div>

          <div style={{ marginTop: 10 }}>
            <textarea className="textarea" placeholder="İstek detayı (ürün, kalite, sertifika, teslimat vb.)"
              value={details} onChange={(e) => setDetails(e.target.value)} />
            <div className="small">Not: Backend entegrasyonu gelince bu RFQ otomatik ilgili mağaza/üreticilere düşecek.</div>
          </div>

          <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
            <button className="btn btnPrimary" onClick={submit}>RFQ Gönder</button>
            <Link className="btn" to="/expo">Vazgeç</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
