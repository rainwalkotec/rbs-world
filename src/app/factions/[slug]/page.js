import Link from "next/link";
import { notFound } from "next/navigation";
import { factions, getFactionBySlug } from "@/data/factions";

export function generateStaticParams() {
  return factions.map((faction) => ({ slug: faction.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const faction = getFactionBySlug(slug);

  if (!faction) {
    return {
      title: "Фракция не найдена",
    };
  }

  return {
    title: `${faction.title} — Фракции Эрбеса`,
    description: faction.desc,
  };
}

function InfoList({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="info-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function FactionPage({ params }) {
  const { slug } = await params;
  const faction = getFactionBySlug(slug);

  if (!faction) {
    notFound();
  }

  const languageItems = [
    ...faction.languages.official.map((language) => `Официальный: ${language}`),
    ...faction.languages.spoken.map((language) => `Разговорный: ${language}`),
  ];

  return (
    <main className="manuscript faction-manuscript">
      <Link className="back-link" href="/factions">← Вернуться к фракциям</Link>

      <section className="faction-hero">
        <div>
          <span className="eyebrow">Летопись народа</span>
          <h1>{faction.title}</h1>
          <p className="lead">{faction.subtitle}</p>
        </div>
        <div className="faction-seal" aria-hidden="true">{faction.emblem}</div>
      </section>

      <section className="faction-layout">
        <aside className="faction-sidebar">
          <div className="stat-card">
            <span>Столица</span>
            <strong>{faction.capital}</strong>
          </div>
          <div className="stat-card">
            <span>Умение</span>
            <strong>{faction.ability.name}</strong>
          </div>
          <InfoList title="Поселения и земли" items={faction.settlements} />
          <InfoList title="Языки" items={languageItems} />
        </aside>

        <article className="faction-content">
          <section className="text-section">
            <h2>Общий лор</h2>
            {faction.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="text-section ability-panel">
            <h2>{faction.ability.name}</h2>
            <p>{faction.ability.text}</p>
          </section>

          <section className="two-column-lore">
            <InfoList title="Представители" items={faction.representatives} />
            <InfoList title="Отношения и связи" items={faction.relations} />
          </section>

          <section className="text-section names-panel">
            <h2>Названия на языках</h2>
            <p>{faction.names}</p>
          </section>
        </article>
      </section>
    </main>
  );
}
