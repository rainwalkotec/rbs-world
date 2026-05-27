import Link from "next/link";
import { playerCharacters } from "@/data/charactersLibrary";

export const metadata = {
  title: "Игровые Персонажи — Библиотека Эрбеса",
  description: "Профили персонажей игроков кампании Эрбес.",
};

function AvatarPlaceholder({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="avatar-placeholder" aria-hidden="true">
      <div className="avatar-head">{initials}</div>
      <div className="avatar-body" />
    </div>
  );
}

function DetailList({ title, items }) {
  return (
    <div className="profile-detail-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PlayerCharactersPage() {
  return (
    <main className="manuscript character-library-main">
      <Link className="back-link" href="/characters-library">← Вернуться в библиотеку</Link>

      <section className="page-header">
        <span className="eyebrow">Личные дела РБС</span>
        <h1>Игровые Персонажи</h1>
        <p className="lead">
          Полные профили героев кампании: публичные версии, скрытые сведения,
          происхождение, экипировка и личные истории.
        </p>
      </section>

      <section className="player-profile-grid">
        {playerCharacters.map((character) => (
          <article className="player-profile-card" key={character.slug}>
            <div className="profile-topline">
              <AvatarPlaceholder name={character.name} />
              <div>
                <span className="choice-kicker">{character.role}</span>
                <h2>{character.name}</h2>
                <p className="profile-summary">{character.short}</p>
              </div>
            </div>

            <div className="profile-stats-row">
              <span><strong>Класс:</strong> {character.className}</span>
              <span><strong>Раса:</strong> {character.race}</span>
              <span><strong>Возраст:</strong> {character.age}</span>
              <span><strong>Происхождение:</strong> {character.origin}</span>
            </div>

            <div className="profile-foldout">
              <section>
                <h3>Публичная информация</h3>
                <p>{character.publicInfo}</p>
              </section>
              <section>
                <h3>Скрытая информация</h3>
                <p>{character.hiddenInfo}</p>
              </section>
              <section>
                <h3>История</h3>
                {character.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <div className="profile-two-columns">
                <DetailList title="Оружие" items={character.weapons} />
                <DetailList title="Экипировка" items={character.equipment} />
              </div>

              <div className="profile-tags" aria-label="Особенности персонажа">
                {character.traits.map((trait) => (
                  <span key={trait}>{trait}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
