import { playerCharacters } from "@/data/characters";

export default function Characters() {
  return (
    <main style={styles.main}>
      <p style={styles.label}>Действующие лица</p>
      <h1 style={styles.title}>Персонажи игроков</h1>
      <p style={styles.subtitle}>
        Основной отряд, вокруг которого разворачиваются первые хроники Эрбеса.
      </p>

      <div style={styles.grid}>
        {playerCharacters.map((character) => (
          <article key={character.name} style={styles.card}>
            <h2 style={styles.cardTitle}>{character.name}</h2>
            <p style={styles.role}>{character.role}</p>

            <div style={styles.tags}>
              <span style={styles.tag}>{character.origin}</span>
              <span style={styles.tag}>{character.className}</span>
              <span style={styles.tag}>Возраст: {character.age}</span>
            </div>

            <p style={styles.desc}>{character.publicInfo}</p>
            <p style={styles.secret}><b>Скрыто:</b> {character.secretInfo}</p>
            <p style={styles.equipment}><b>Снаряжение:</b> {character.equipment}</p>
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
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" },
  card: { background: "rgba(25,18,12,0.9)", border: "1px solid rgba(255,220,170,0.14)", borderRadius: "18px", padding: "24px" },
  cardTitle: { fontSize: "32px", margin: 0 },
  role: { color: "#d6bc84", opacity: 0.75, marginTop: "8px" },
  tags: { display: "flex", flexWrap: "wrap", gap: "8px", margin: "16px 0" },
  tag: { border: "1px solid rgba(214,188,132,0.3)", borderRadius: "999px", padding: "6px 10px", fontSize: "13px", opacity: 0.85 },
  desc: { opacity: 0.88 },
  secret: { opacity: 0.74 },
  equipment: { opacity: 0.78, color: "#eadfbe" },
};
