export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "serif",
      backgroundColor: "#0e0b16",
      color: "#e8e2ff"
    }}>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Эрбес
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Мир древних земель, где королевства поднимаются и падают в эпохах войн, магии и забытых клятв.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          В центре мира стоит Королевство Лобия — государство, переживающее Тёмный век и удерживающее хрупкий баланс власти.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Орден Рыцарей Балдёжного Стола — элитная сила короны, выполняющая любые поручения правителя.
        </p>

        <hr style={{ margin: "40px 0", borderColor: "#2c2440" }} />

        <h2 style={{ fontSize: "28px" }}>Портал мира</h2>

        <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>

          <button style={btn}>
             Карта Эрбеса
          </button>

          <button style={btn}>
             Королевство Лобия
          </button>

          <button style={btn}>
             Орден РБС
          </button>

          <button style={btn}>
             Хроники Тёмного века
          </button>

        </div>

      </div>
    </main>
  );
}

const btn = {
  padding: "14px",
  fontSize: "16px",
  backgroundColor: "#1b1430",
  color: "#e8e2ff",
  border: "1px solid #3a2f55",
  borderRadius: "10px",
  cursor: "pointer",
  textAlign: "left"
};