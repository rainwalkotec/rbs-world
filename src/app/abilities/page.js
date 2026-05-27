import { abilities } from "@/data/abilities";

export default function Abilities() {
  return (
    <main style={styles.main}>
      <p style={styles.label}>Справочник механик</p>
      <h1 style={styles.title}>Умения фракций</h1>
      <p style={styles.subtitle}>
        Боевые, сюжетные и расовые особенности народов Эрбеса.
      </p>

      <div style={styles.list}>
        {abilities.map((ability) => (
          <article key={`${ability.faction}-${ability.name}`} style={styles.card}>
            <div>
              <h2 style={styles.cardTitle}>{ability.name}</h2>
              <p style={styles.faction}>{ability.faction}</p>
            </div>
            <p style={styles.desc}>{ability.desc}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

const styles = {
  main: { padding: "70px 40px", minHeight: "100vh" },
  label: { color: "#d6bc84", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.75 },
  title: { fontSize: "62px", margin: "8px 0 12px" },
  subtitle: { opacity: 0.78, fontSize: "18px", marginBottom: "36px" },
  list: { display: "grid", gap: "18px", maxWidth: "1000px" },
  card: {
    display: "grid",
    gridTemplateColumns: "minmax(220px, 320px) 1fr",
    gap: "22px",
    background: "rgba(25,18,12,0.9)",
    border: "1px solid rgba(255,220,170,0.14)",
    borderRadius: "16px",
    padding: "22px",
  },
  cardTitle: { fontSize: "28px", margin: 0 },
  faction: { color: "#d6bc84", opacity: 0.7, margin: "8px 0 0" },
  desc: { margin: 0, opacity: 0.86 },
};
