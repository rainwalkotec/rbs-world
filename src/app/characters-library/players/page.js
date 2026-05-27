import Link from "next/link";
import { playerCharacters } from "@/data/charactersLibrary";

export const metadata = {
  title: "Игровые Персонажи — Библиотека Эрбеса",
  description: "Полные профили персонажей игроков кампании Эрбес.",
};

function AvatarPlaceholder({ name, tone }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className={`avatar-placeholder player-avatar ${tone ? `avatar-${tone}` : ""}`} aria-hidden="true">
      <div className="avatar-head">{initials}</div>
      <div className="avatar-shoulders" />
    </div>
  );
}

function MetaGrid({ items }) {
  return (
    <dl className="player-meta-grid">
      {items.map(([label, value]) => (
        <div className="player-meta-item" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TextBlock({ title, paragraphs, className = "" }) {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <section className={`player-scroll-block ${className}`}>
      <h3>{title}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

function DetailList({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="player-list-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Abilities({ abilities }) {
  if (!abilities || abilities.length === 0) return null;

  return (
    <section className="player-abilities-block">
      <h3>Способности</h3>
      <div className="player-abilities-grid">
        {abilities.map((ability) => (
          <article className="ability-parchment" key={ability.name}>
            <strong>{ability.name}</strong>
            <p>{ability.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HiddenInfo({ character }) {
  const hidden = character.hiddenInfo || [];

  if (hidden.length === 0) {
    return (
      <section className="player-hidden-empty">
        <h3>Скрытая информация</h3>
        <p>В архиве нет отдельной закрытой записи по этому персонажу.</p>
      </section>
    );
  }

  return (
    <section className="player-secret-vault">
      <input
        className="secret-toggle-input"
        type="checkbox"
        id={`secret-${character.slug}`}
      />
      <div className="secret-vault-head">
        <div>
          <span className="secret-seal">Закрытая печать</span>
          <h3>Скрытая информация</h3>
          <p>Эта часть дела скрыта от игроков и раскрывается только по решению мастера.</p>
        </div>
        <label className="secret-toggle" htmlFor={`secret-${character.slug}`}>
          <span className="toggle-track"><span className="toggle-knob" /></span>
          <span className="toggle-text">Показать тайну</span>
        </label>
      </div>
      <div className="secret-content">
        {hidden.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default function PlayerCharactersPage() {
  return (
    <main className="manuscript character-library-main player-dossiers-main">
      <Link className="back-link" href="/characters-library">← Вернуться в библиотеку</Link>

      <section className="page-header">
        <span className="eyebrow">Личные дела РБС</span>
        <h1>Игровые Персонажи</h1>
        <p className="lead">
          Полные досье героев кампании: происхождение, публичная версия,
          скрытые сведения, способности, связи, экипировка и личные особенности.
        </p>
      </section>

      <section className="player-dossier-stack">
        {playerCharacters.map((character) => (
          <article className="player-dossier-card" key={character.slug}>
            <div className="dossier-side-mark" aria-hidden="true">{character.dossierMark}</div>

            <header className="player-dossier-header">
              <AvatarPlaceholder name={character.name} tone={character.avatarTone} />
              <div className="player-dossier-title">
                <span className="choice-kicker">{character.role}</span>
                <h2>{character.name}</h2>
                <p>{character.short}</p>
                <div className="profile-tags" aria-label="Особенности персонажа">
                  {character.traits.map((trait) => (
                    <span key={trait}>{trait}</span>
                  ))}
                </div>
              </div>
            </header>

            <MetaGrid items={character.meta} />

            <div className="player-dossier-layout">
              <div className="player-dossier-maincol">
                <TextBlock title="Публичная информация" paragraphs={character.publicInfo} />
                <HiddenInfo character={character} />
                <TextBlock title="История персонажа" paragraphs={character.story} />
                <Abilities abilities={character.abilities} />
              </div>

              <aside className="player-dossier-aside">
                <DetailList title="Оружие" items={character.weapons} />
                <DetailList title="Экипировка" items={character.equipment} />
                <DetailList title="Состояния и слабости" items={character.conditions} />
                <DetailList title="Связи" items={character.bonds} />
              </aside>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
