import { languages, countryNames, languageRegions } from "@/data/languages";

export const metadata = {
  title: "Языки Эрбеса — путеводитель",
  description: "Языки, наречия и названия народов Эрбеса в разных традициях.",
};

const columns = [
  ["country", "Народ / страна"],
  ["common", "Всеобщий"],
  ["kassifurt", "Кассифуртский"],
  ["depol", "Депольский"],
  ["forest", "Лесное Наречие"],
  ["amphibian", "Амфибианское"],
  ["dark", "Тёмное"],
  ["demonic", "Демонический"],
  ["moscian", "Москийский"],
  ["kalatonian", "Калатонский"],
];

export default function LanguagesPage() {
  return (
    <main className="manuscript languages-manuscript">
      <section className="page-header">
        <span className="eyebrow">Лингвистический архив</span>
        <h1>Языки Эрбеса</h1>
        <p className="lead">
          Свод языков, наречий и переводных названий народов. Здесь собраны
          официальные языки фракций, бытовые говоры, древние звуковые следы и
          названия стран в разных традициях Эрбеса.
        </p>
      </section>

      <section className="language-ledger">
        {languages.map((language) => (
          <article className="language-card" key={language.name}>
            <div className="language-card-head">
              <span>{language.archiveType}</span>
              <h2>{language.name}</h2>
              <strong>{language.nativeName}</strong>
            </div>
            <p className="language-status">{language.status}</p>
            <div className="language-speakers">
              {language.speakers.map((speaker) => (
                <span key={speaker}>{speaker}</span>
              ))}
            </div>
            {language.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="language-regions">
        {languageRegions.map((region) => (
          <article key={region.title}>
            <span className="small-note">Языковой пояс</span>
            <h3>{region.title}</h3>
            <p>{region.text}</p>
          </article>
        ))}
      </section>

      <section className="language-table-section">
        <div className="language-table-intro">
          <span className="eyebrow">Названия в разных традициях</span>
          <h2>Как народы называют друг друга</h2>
          <p>
            Таблица не является строгим словарём для всех жителей мира: часть
            форм — архивные, часть — дипломатические, часть — бытовые или
            искажённые. Но она помогает держать единый стиль названий на сайте.
          </p>
        </div>
        <div className="language-table-wrap">
          <table className="language-name-table">
            <thead>
              <tr>
                {columns.map(([, label]) => (
                  <th key={label}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {countryNames.map((row) => (
                <tr key={row.country}>
                  {columns.map(([key]) => (
                    <td key={key}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
