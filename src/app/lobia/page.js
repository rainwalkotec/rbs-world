export default function Lobia() {
  return (
    <main className="manuscript">
      <section className="page-header">
        <span className="eyebrow">Regnum Lobium</span>
        <h1>Королевство Лобия</h1>
        <p className="lead">
          Держава людей и дворфов, где принадлежность к королевству определяется
          не происхождением, а рождением. Лобия относится к соседям нейтрально,
          но её собственные рыцарские традиции переживают тяжёлый век.
        </p>
      </section>

      <section className="card-grid">
        <article className="lore-card">
          <h3>Столица</h3>
          <p>Деполь — политический и военный центр королевства.</p>
          <span className="meta">Деполь</span>
        </article>
        <article className="lore-card">
          <h3>Поселения</h3>
          <p>Чехгарт и Букин — важные точки лобийской карты.</p>
          <span className="meta">Чехгарт • Букин</span>
        </article>
        <article className="lore-card">
          <h3>Умение</h3>
          <p>Боевой Клич усиливает самого лобийца и поддерживает союзников.</p>
          <span className="meta">Боевой Клич</span>
        </article>
      </section>
    </main>
  );
}
