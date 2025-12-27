import React, { useMemo, useState } from "react";
import { Link } from "umi";

type Sector = {
  key: string;
  title: string;
  color: string;   // sadece arka plan tonu
  tags: string[];
};

const SECTORS: Sector[] = [
  { key: "textile", title: "Tekstil & Moda", color: "#f36b5b22", tags: ["Kumaş", "Hazır Giyim", "Aksesuar"] },
  { key: "food", title: "Gıda & Tarım", color: "#7bc47f22", tags: ["Gıda", "Tarım", "İhracat"] },
  { key: "machine", title: "Makine & Endüstri", color: "#4b89c322", tags: ["Makine", "CNC", "Ekipman"] },

  { key: "electronics", title: "Elektronik & Teknoloji", color: "#8b6bd922", tags: ["Elektronik", "IOT", "Bileşen"] },
  // merkez meydan orta hücre olacak
  { key: "auto", title: "Otomotiv & Taşımacılık", color: "#2db7b122", tags: ["Otomotiv", "Yedek Parça", "Taşıma"] },

  { key: "chem", title: "Kimya & Plastik", color: "#9aa3ab22", tags: ["Kimya", "Plastik", "Hammadde"] },
  { key: "build", title: "İnşaat & Yapı", color: "#f2a24b22", tags: ["Yapı", "Malzeme", "Proje"] },
  { key: "energy", title: "Enerji & Çevre", color: "#5fd3c522", tags: ["Enerji", "Geri Dönüşüm", "Çevre"] },

  { key: "pack", title: "Ambalaj & Baskı", color: "#ff7aa522", tags: ["Ambalaj", "Baskı", "Etiket"] },
  { key: "home", title: "İç Mekan & Ev Yaşam", color: "#e7d7b822", tags: ["Mobilya", "Dekor", "Ev"] },
  { key: "service", title: "Hizmet & Profesyonel", color: "#11111110", tags: ["Danışmanlık", "Tedarik", "Hizmet"] }
];

export default function ExpoCity() {
  const [selected, setSelected] = useState<Sector | null>(null);

  const stats = useMemo(() => {
    // şimdilik demo sayı (sonra supabase’den gelecek)
    return { companies: 120, showrooms: 48, sectors: 10 };
  }, []);

  return (
    <div className="container">
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>Expo City</div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900 }}>Sektör Haritası</h1>
        </div>
        <Link className="btn ghost" to="/">← Ana sayfa</Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12
        }}
      >
        {/* 1. satır */}
        <Tile sector={SECTORS[0]} onPick={setSelected} />
        <Tile sector={SECTORS[1]} onPick={setSelected} />
        <Tile sector={SECTORS[2]} onPick={setSelected} />

        {/* 2. satır */}
        <Tile sector={SECTORS[3]} onPick={setSelected} />

        <div className="card" style={{ textAlign: "center", padding: 18 }}>
          <div style={{ fontWeight: 900, letterSpacing: "0.12em", opacity: 0.75 }}>MERKEZ MEYDAN</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 10 }}>
            <Stat label="Şirket" value={stats.companies} />
            <Stat label="Showroom" value={stats.showrooms} />
            <Stat label="Sektör" value={stats.sectors} />
          </div>
          <div style={{ marginTop: 12, fontSize: 12, opacity: 0.75 }}>
            Bir sektöre tıkla → showroom listesi açılır.
          </div>
        </div>

        <Tile sector={SECTORS[4]} onPick={setSelected} />

        {/* 3. satır */}
        <Tile sector={SECTORS[5]} onPick={setSelected} />
        <Tile sector={SECTORS[6]} onPick={setSelected} />
        <Tile sector={SECTORS[7]} onPick={setSelected} />

        {/* 4. satır (3x3 bitti, ama ekstra 3 tile altta dursun diye grid devam) */}
        <Tile sector={SECTORS[8]} onPick={setSelected} />
        <Tile sector={SECTORS[9]} onPick={setSelected} />
        <Tile sector={SECTORS[10]} onPick={setSelected} />
      </div>

      <div style={{ marginTop: 14 }} className="card">
        {!selected ? (
          <div style={{ opacity: 0.75 }}>
            Bir sektör seç. (Şimdilik demo — sonra Supabase’den şirketleri çekeceğiz.)
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>{selected.title}</h2>
              <button className="btn ghost" onClick={() => setSelected(null)}>Kapat</button>
            </div>

            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {selected.tags.map((t) => (
                <span key={t} className="card" style={{ padding: "6px 10px", borderRadius: 999, boxShadow: "none" }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 12, opacity: 0.8 }}>
              <b>Demo Showroom Listesi</b>
              <ul style={{ marginTop: 8 }}>
                <li>Showroom A — “Şirket profili” (sonra)</li>
                <li>Showroom B — “Şirket profili” (sonra)</li>
                <li>Showroom C — “Şirket profili” (sonra)</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px){
          .container > div[style*="grid-template-columns"]{
            grid-template-columns: repeat(2, minmax(0,1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
}

function Tile({ sector, onPick }: { sector: Sector; onPick: (s: Sector) => void }) {
  return (
    <div
      className="card"
      role="button"
      onClick={() => onPick(sector)}
      style={{
        background: sector.color,
        cursor: "pointer",
        transition: "transform .12s ease, box-shadow .12s ease"
      }}
      onMouseEnter={(e) => ((e.currentTarget.style.transform = "translateY(-2px)"))}
      onMouseLeave={(e) => ((e.currentTarget.style.transform = "translateY(0px)"))}
    >
      <div style={{ fontSize: 16, fontWeight: 900 }}>{sector.title}</div>
      <div style={{ marginTop: 6, fontSize: 12, opacity: 0.75 }}>
        {sector.tags.join(" • ")}
      </div>
      <div style={{ marginTop: 10, fontWeight: 900, fontSize: 12 }}>→ Showroom’ları gör</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 26, fontWeight: 900 }}>{value}</div>
      <div style={{ fontSize: 12, opacity: 0.7 }}>{label}</div>
    </div>
  );
}
