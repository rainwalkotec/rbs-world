import Link from "next/link";
import { getLocationBySlug, locations } from "@/data/locations";

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  return {
    title: location ? `${location.name} — Локации Эрбеса` : "Локация Эрбеса",
  };
}

function InfoList({ title, items, variant }) {
  return (
    <section className={`atlas-detail-block ${variant || ""}`}>
      <h2>{title}</h2>
      <div className="atlas-tag-list">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <main className="manuscript">
        <section className="page-header">
          <span className="eyebrow">Запись не найдена</span>
          <h1>Такого места нет в архиве</h1>
          <Link className="button" href="/locations">Вернуться к локациям</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="manuscript atlas-detail-manuscript">
      <Link className="back-link atlas-back-link" href="/locations">← Вернуться в атлас локаций</Link>

      <section className="atlas-detail-hero">
        <div className="atlas-detail-copy">
          <span className="eyebrow">{location.type}</span>
          <h1>{location.name}</h1>
          <p className="lead">{location.summary}</p>
          <div className="atlas-detail-meta">
            <span>{location.region}</span>
            <span>{location.mood}</span>
          </div>
        </div>

        <aside className="atlas-detail-seal" aria-label="Печать локации">
          <span>{location.sigil}</span>
          <small>{location.seal}</small>
        </aside>
      </section>

      <section className="atlas-description-page">
        <div className="atlas-page-number">Запись {locations.findIndex((item) => item.slug === location.slug) + 1}</div>
        <span className="small-note">Описание места</span>
        {location.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="atlas-detail-grid">
        <InfoList title="Кто там живёт" items={location.residents} />
        <InfoList title="Связанные квесты" items={location.quests} />
        <InfoList title="Опасности" items={location.dangers} variant="danger" />
        <InfoList title="Связанные персонажи" items={location.characters} />
      </section>

      <section className="atlas-rumor-board">
        <div className="atlas-rumor-head">
          <span className="small-note">Слухи и заметки</span>
          <h2>Что говорят об этом месте</h2>
        </div>
        <div className="atlas-rumor-grid">
          {location.rumors.map((rumor, index) => (
            <article className="atlas-rumor-note" key={rumor}>
              <span>Слух {index + 1}</span>
              <p>{rumor}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
