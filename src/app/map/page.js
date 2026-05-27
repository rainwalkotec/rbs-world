import InteractiveLobiaMap from "./InteractiveLobiaMap";

export default function Map() {
  return (
    <main className="manuscript map-manuscript">
      <section className="page-header map-page-header">
        <span className="eyebrow">Картографический зал</span>
        <h1>Карта Лобии</h1>
        <p className="lead">
          Интерактивная копия лобийской карты. Наведи курсор на отмеченную
          точку, чтобы увидеть краткую справку, или нажми на неё, чтобы закрепить
          описание в архивной карточке.
        </p>
      </section>

      <section className="map-exhibit">
        <div className="map-title-plaque">
          <span className="map-plaque-overline">Архив королевских земель</span>
          <h2>Лобия и приграничные области</h2>
          <p>
            Карта Лобии, составленная для путеводителя по Эрбесу. Отмеченные
            точки открывают краткие сведения о городах, поселениях и спорных
            областях.
          </p>
        </div>

        <figure className="ornate-map-card">
          <div className="ornate-flourish ornate-flourish-top" aria-hidden="true">
            ❦ ❦ ❦
          </div>
          <div className="ornate-frame ornate-frame-interactive">
            <span className="frame-curl frame-curl-tl" aria-hidden="true">❧</span>
            <span className="frame-curl frame-curl-tr" aria-hidden="true">❧</span>
            <span className="frame-curl frame-curl-bl" aria-hidden="true">❧</span>
            <span className="frame-curl frame-curl-br" aria-hidden="true">❧</span>
            <InteractiveLobiaMap />
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

      <section className="map-archive-note map-glef-note">
        <div>
          <span className="small-note">Об авторе карты</span>
          <h3>Картограф Глеф</h3>
          <p>
            Глеф — знаменитый на всю Лобию картограф, чьи работы ценят за
            точность, аккуратность подписей и умение превращать спорные земли
            в понятную архивную схему. Эта карта считается одной из его
            парадных копий для королевских хроник.
          </p>
        </div>
        <div>
          <span className="small-note">Легенда создания</span>
          <h3>Великая Сессия</h3>
          <p>
            По архивной подписи, Глеф завершил эту карту после сдачи Великой
            Сессии. С тех пор карту хранят как свидетельство не только
            географического знания, но и личного подвига картографа перед
            лицом лобийской учёности.
          </p>
        </div>
      </section>
    </main>
  );
}
