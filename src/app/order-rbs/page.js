export default function OrderRbs() {
  return (
    <main className="manuscript">
      <section className="page-header">
        <span className="eyebrow">Королевский кодекс</span>
        <h1>Орден Рыцарей Балдёжного Стола</h1>
        <p className="lead">
          Специальный отряд Короны Лобии, учреждённый в начале Тёмного века.
          Орден должен служить королю, но отсутствие Короля Розы и старые
          противоречия постепенно ведут рыцарей к расколу.
        </p>
      </section>

      <section className="split">
        <article className="dark-panel">
          <h2>Основание</h2>
          <p>
            Орден был создан в 901 году от прибытия Ангела в священную землю.
            Король Роза хотел, чтобы новые рыцари унаследовали традиции и славу
            Священного Лобийского Ордена.
          </p>
        </article>

        <article className="lore-card">
          <h3>Суть конфликта</h3>
          <p>
            Антагонистов в прямом смысле нет: есть конфликт интересов,
            обязательств, амбиций и страха перед будущим страны.
          </p>
          <span className="meta">Раскол внутри ордена</span>
        </article>
      </section>

      <div className="ornament">✦</div>

      <section className="card-grid">
        <article className="lore-card">
          <h3>Сторонники кодекса</h3>
          <p>Верят, что Орден обязан выполнять волю короля, даже если король исчез.</p>
        </article>
        <article className="lore-card">
          <h3>Сторонники самостоятельности</h3>
          <p>Считают, что РБС должен стать силой, способной принимать решения без трона.</p>
        </article>
        <article className="lore-card">
          <h3>Прагматики</h3>
          <p>Ищут способ сохранить влияние, порядок и собственные жизни.</p>
        </article>
        <article className="lore-card">
          <h3>Идеалисты</h3>
          <p>Пытаются удержать смысл рыцарства, даже когда страна требует грязных решений.</p>
        </article>
      </section>
    </main>
  );
}
