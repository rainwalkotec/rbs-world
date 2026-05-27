import Link from "next/link";

export const metadata = {
  title: "Библиотека Персонажей — Эрбес",
  description: "Игровые персонажи и жители мира Эрбес.",
};

export default function CharactersLibrary() {
  return (
    <main className="manuscript character-library-main">
      <section className="page-header">
        <span className="eyebrow">Архив лиц и судеб</span>
        <h1>Библиотека Персонажей</h1>
        <p className="lead">
          От рыцарей Балдёжного Стола до трактирных слухов, лесных легенд,
          беглых демонов и тех, кого можно встретить только при особых условиях.
        </p>
      </section>

      <section className="library-choice-grid" aria-label="Подразделы библиотеки персонажей">
        <Link className="library-choice library-choice-players" href="/characters-library/players">
          <span className="choice-kicker">Профили героев</span>
          <h2>Игровые Персонажи</h2>
          <p>
            Крупные личные страницы персонажей игроков: происхождение, класс,
            экипировка, скрытые сведения, история и особенности.
          </p>
          <span className="choice-action">Открыть профили →</span>
        </Link>

        <Link className="library-choice library-choice-residents" href="/characters-library/residents">
          <span className="choice-kicker">Горожане, слухи, легенды</span>
          <h2>Жители Эрбеса</h2>
          <p>
            Компактная библиотека NPC: второстепенные, третьестепенные и
            инициируемые персонажи с быстрым раскрытием описаний.
          </p>
          <span className="choice-action">Открыть жителей →</span>
        </Link>
      </section>
    </main>
  );
}
