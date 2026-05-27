import Link from "next/link";
import { residentCategories } from "@/data/charactersLibrary";

export const metadata = {
  title: "Жители Эрбеса — Библиотека Персонажей",
  description: "Второстепенные, третьестепенные и инициируемые персонажи мира Эрбес.",
};

export default function ResidentsPage() {
  return (
    <main className="manuscript character-library-main">
      <Link className="back-link" href="/characters-library">← Вернуться в библиотеку</Link>

      <section className="page-header">
        <span className="eyebrow">Имена на полях хроники</span>
        <h1>Жители Эрбеса</h1>
        <p className="lead">
          Небольшие карточки персонажей, которые можно быстро раскрывать прямо
          на странице: от важных NPC до слухов, монстров и условных встреч.
        </p>
      </section>

      <section className="residents-ledger">
        {residentCategories.map((category) => (
          <section className="resident-category" key={category.title}>
            <div className="resident-category-head">
              <span className="choice-kicker">Раздел картотеки</span>
              <h2>{category.title}</h2>
              <p>{category.intro}</p>
            </div>

            <div className="resident-button-grid">
              {category.characters.map((character) => (
                <details className="resident-chip" key={character.name}>
                  <summary>
                    <span>{character.name}</span>
                    <small>{character.role}</small>
                  </summary>
                  <div className="resident-chip-body">
                    <p>{character.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
