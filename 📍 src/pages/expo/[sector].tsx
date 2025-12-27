import { useParams, Link } from "umi";

export default function SectorPage() {
  const { sector } = useParams();

  return (
    <div style={{ padding: 24 }}>
      <h2>{sector.toUpperCase()} SEKTÖRÜ</h2>
      <p>Bu sektördeki Türk üreticilerinin showroomları</p>

      <div style={{ marginTop: 20 }}>
        <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
          <h3>Örnek Firma AŞ</h3>
          <p>Türkiye / İstanbul</p>
          <Link to={`/showroom/ornek-firma`}>Showroom’a Gir</Link>
        </div>
      </div>
    </div>
  );
}
