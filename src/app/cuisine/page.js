import { diningRules, taverns } from "@/data/cuisine";

export const metadata = {
  title: "Кухня Эрбеса — меню и игровые эффекты",
  description: "Меню таверны Маги и Зины, кафе Керемета и ресторана Ильи Лазера с игровыми эффектами еды и напитков.",
};

function EffectBlock({ effect }) {
  return (
    <article className="cuisine-effect-card">
      <span className="small-note">{effect.trigger}</span>
      <h4>{effect.name}</h4>
      <ul>
        {effect.table.map((row) => (
          <li key={row}>{row}</li>
        ))}
      </ul>
    </article>
  );
}

function MenuSection({ section }) {
  return (
    <article className="cuisine-menu-section">
      <h4>{section.section}</h4>
      <div className="cuisine-dish-list">
        {section.items.map((item) => (
          <div className="cuisine-dish" key={`${section.section}-${item.name}`}>
            <strong>{item.name}</strong>
            {item.note ? <p>{item.note}</p> : null}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function CuisinePage() {
  return (
    <main className="manuscript cuisine-manuscript">
      <section className="page-header cuisine-header">
        <span className="eyebrow">Кулинарный архив</span>
        <h1>Кухня Эрбеса</h1>
        <p className="lead">
          Меню, трактирные эффекты и странные блюда, которые могут спасти
          героя, испортить репутацию, начать драку или превратить ужин в
          полноценную сцену приключения.
        </p>
      </section>

      <section className="cuisine-rules-panel">
        <span className="small-note">Правило трапезы</span>
        <h2>Как еда работает в игре</h2>
        <div className="cuisine-rules-grid">
          {diningRules.map((rule) => (
            <p key={rule}>{rule}</p>
          ))}
        </div>
      </section>

      <section className="cuisine-ledger">
        {taverns.map((tavern) => (
          <article className="cuisine-tavern-card" key={tavern.slug}>
            <header className="cuisine-tavern-head">
              <div>
                <span className="eyebrow">{tavern.location}</span>
                <h2>{tavern.name}</h2>
                <p>{tavern.tagline}</p>
              </div>
              <strong>{tavern.priceNote}</strong>
            </header>

            <p className="cuisine-mood">{tavern.mood}</p>

            <div className="cuisine-rule-list">
              {tavern.rules.map((rule) => (
                <span key={rule}>{rule}</span>
              ))}
            </div>

            <div className="cuisine-effects-grid">
              {tavern.effects.map((effect) => (
                <EffectBlock effect={effect} key={effect.name} />
              ))}
            </div>

            <div className="cuisine-menu-grid">
              {tavern.menu.map((section) => (
                <MenuSection section={section} key={`${tavern.slug}-${section.section}`} />
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
