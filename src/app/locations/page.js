import Link from "next/link";
import { locationCategories, locations } from "@/data/locations";

export const metadata = {
  title: "Локации Эрбеса — атлас мест",
  description: "Пополняемый атлас городов, таверн, кладбищ, лесов и тайных мест мира Эрбес.",
};

function Sigil({ location }) {
  return (
    <div className="atlas-sigil" aria-hidden="true">
      <span>{location.sigil}</span>
      <small>{location.seal}</small>
    </div>
  );
}

export default function LocationsPage() {
  return (
    <main className="manuscript locations-atlas-manuscript">
      <section className="page-header locations-atlas-header">
        <span className="eyebrow">Пополняемый атлас</span>
        <h1>Локации Эрбеса</h1>
        <p className="lead">
          Не просто список мест, а архивная картотека мира: города, таверны,
          кладбища, лесные тропы, мастерские и подозрительные провалы, где
          обычная дорога превращается в сцену кампании.
        </p>
      </section>

      <section className="atlas-library-intro" aria-label="Состояние архива">
        <article>
          <span>{locations.length}</span>
          <p>записей уже внесено в атлас</p>
        </article>
        <article>
          <span>6</span>
          <p>видов сведений у каждой локации</p>
        </article>
        <article>
          <span>∞</span>
          <p>мест можно добавлять дальше</p>
        </article>
      </section>

      <section className="atlas-catalog">
        {locationCategories.map((category, categoryIndex) => {
          const items = locations.filter((location) => location.category === category.title);

          return (
            <article className="atlas-category-sheet" key={category.title}>
              <div className="atlas-category-spine" aria-hidden="true">
                <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
              </div>

              <div className="atlas-category-content">
                <header className="atlas-category-header">
                  <span className="small-note">Раздел картотеки</span>
                  <h2>{category.title}</h2>
                  <p>{category.note}</p>
                </header>

                <div className="atlas-entry-grid">
                  {items.map((location) => (
                    <Link className="atlas-entry-card" href={`/locations/${location.slug}`} key={location.slug}>
                      <Sigil location={location} />
                      <div className="atlas-entry-copy">
                        <span className="atlas-entry-type">{location.type}</span>
                        <h3>{location.name}</h3>
                        <p>{location.summary}</p>
                        <dl>
                          <div>
                            <dt>Регион</dt>
                            <dd>{location.region}</dd>
                          </div>
                          <div>
                            <dt>Настроение</dt>
                            <dd>{location.mood}</dd>
                          </div>
                        </dl>
                        <span className="atlas-open-mark">Открыть архивную запись</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
