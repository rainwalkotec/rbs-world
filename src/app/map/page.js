export default function Map() {
  return (
    <main className="manuscript map-manuscript">
      <section className="page-header map-page-header">
        <span className="eyebrow">Картографический зал</span>
        <h1>Карта Лобии</h1>
        <p className="lead">
          Перед тобой — лобийская карта, хранимая в библиотеке Эрбеса как
          официальная рукопись земель Королевства. Она оформлена как музейный
          лист из королевского архива и снабжена подписью мастера, который её
          создал.
        </p>
      </section>

      <section className="map-exhibit">
        <div className="map-title-plaque">
          <span className="map-plaque-overline">Архив королевских земель</span>
          <h2>Лобия и приграничные области</h2>
          <p>
            Карта Лобии, составленная для путеводителя по Эрбесу. Ниже размещена
            парадная копия с подписью автора.
          </p>
        </div>

        <figure className="ornate-map-card">
          <div className="ornate-flourish ornate-flourish-top" aria-hidden="true">
            ❦ ❦ ❦
          </div>
          <div className="ornate-frame">
            <span className="frame-curl frame-curl-tl" aria-hidden="true">❧</span>
            <span className="frame-curl frame-curl-tr" aria-hidden="true">❧</span>
            <span className="frame-curl frame-curl-bl" aria-hidden="true">❧</span>
            <span className="frame-curl frame-curl-br" aria-hidden="true">❧</span>
            <img
              className="framed-map-image"
              src="/images/lobia-map.png"
              alt="Карта Лобии"
            />
          </div>
          <div className="ornate-flourish ornate-flourish-bottom" aria-hidden="true">
            ❦ ❦ ❦
          </div>
          <figcaption className="map-caption">
            <strong>Карта Лобии.</strong> Выполнена знаменитым на всю Лобию
            <strong> Картографом Глефом</strong> после сдачи <em>Великой Сессии</em>.
          </figcaption>
        </figure>
      </section>

      <section className="map-archive-note">
        <div>
          <span className="small-note">Архивная помета</span>
          <h3>Происхождение карты</h3>
          <p>
            Эта карта выставлена в разделе как главный экспонат лобийского
            картографического собрания. Она подчёркивает ключевые земли,
            приграничные реки, поселения и спорные области, о которых можно
            говорить в хрониках Эрбеса.
          </p>
        </div>
        <div>
          <span className="small-note">Подпись на полях</span>
          <h3>Авторская легенда</h3>
          <p>
            В архивной традиции указано, что именно Глеф, прославленный по всей
            Лобии мастер карт и лектор географических наук, завершил этот труд
            сразу после своей Великой Сессии, чем и заслужил известность во всём
            королевстве.
          </p>
        </div>
      </section>
    </main>
  );
}
