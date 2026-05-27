import Link from "next/link";
import { factions } from "@/data/factions";

export const metadata = {
  title: "Фракции Эрбеса",
  description: "Архив народов, держав и рас мира Эрбес.",
};

export default function Factions() {
  return (
    <main className="manuscript">
      <section className="page-header">
        <span className="eyebrow">Архив народов</span>
        <h1>Фракции Эрбеса</h1>
        <p className="lead">
          Великие державы, лесные роды, забытые расы, подземные гильдии и
          народы, о которых в Лобии предпочитают говорить шёпотом.
        </p>
      </section>

      <section className="card-grid">
        {factions.map((faction) => (
          <Link
            className="lore-card faction-card"
            href={`/factions/${faction.slug}`}
            key={faction.slug}
            aria-label={`Открыть страницу: ${faction.title}`}
          >
            <span className="card-emblem" aria-hidden="true">{faction.emblem}</span>
            <h3>{faction.title}</h3>
            <p>{faction.desc}</p>
            <span className="meta">{faction.extra}</span>
            <span className="read-more">Открыть летопись →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
