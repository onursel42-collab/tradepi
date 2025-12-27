import { sectors } from "@/data/sectors";
import { Link } from "umi";

export default function ExpoCity() {
  return (
    <div style={{ padding: 24 }}>
      <h1>TradePi B2B – Expo City</h1>
      <p>Türkiye üreticileri için dijital fuar alanı</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 16 }}>
        {sectors.map((s) => (
          <Link key={s.id} to={`/expo/${s.id}`}>
            <div style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 20,
              background: "#fafafa",
              cursor: "pointer"
            }}>
              <h3>{s.name}</h3>
              <p>Showroomları keşfet</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
