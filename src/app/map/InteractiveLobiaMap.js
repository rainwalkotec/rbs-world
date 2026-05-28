"use client";

import { useMemo, useState } from "react";

const locations = [
  {
    id: "depol",
    name: "Деполь",
    type: "Столица Лобии",
    x: 47.4,
    y: 43.0,
    danger: "Высокая важность",
    description:
      "Сердце Королевства Лобия и главный центр королевской власти. Здесь сходятся дороги, слухи, интересы РБС, дворцовая память и придворные интриги.",
    details:
      "В Деполе находятся Дворец-Метрополис, Великий Дом-Маяк, королевская темница, таверна, кладбище и первые следы раскола внутри РБС.",
  },
  {
    id: "bukhin",
    name: "Букин",
    type: "Северо-восточные владения Лобии",
    x: 58.7,
    y: 34.9,
    danger: "Умеренно / школьные земли",
    description:
      "Небольшие владения к северо-востоку от Деполя, известные школами, лесными чащами и непоседливыми учениками.",
    details:
      "Экономика Букина держится на северном торговом пути, соседстве с Деполем и Москией. Раньше в его школах преподавал Трактирщик Мага.",
  },
  {
    id: "dashfurt",
    name: "Дашфурт",
    type: "Поселение Лесного Народца",
    x: 76.0,
    y: 38.5,
    danger: "Лесные земли",
    description:
      "Одно из поселений, связанных с Лесным Народцем. На карте находится у восточных границ лобийского влияния.",
    details:
      "Может служить переходной зоной между Лобией, лесными дорогами и землями, где человеческие законы действуют слабее.",
  },
  {
    id: "chekhgart",
    name: "Чехгарт",
    type: "Город королевской памяти",
    x: 58.0,
    y: 68.5,
    danger: "Низко / политически важно",
    description:
      "Город детства Бертрана фон Маннгена, где Король Роза провёл второе посвящение после первого обряда в Деполе.",
    details:
      "Из окна дома маленький Бертран видел, как Паладин и Друид хохотали вместе с Королём и разбивали мраморный стул по традиции посвящения.",
  },
  {
    id: "arrawdorf",
    name: "Арравдорф",
    type: "Поселение Лесного Народца",
    x: 25.9,
    y: 60.2,
    danger: "Лесные тропы",
    description:
      "Лесное поселение на западной стороне карты. Находится близко к дорогам, ведущим вглубь зелёных земель.",
    details:
      "Хорошее место для встреч с друидами, лесными жителями, охотниками и теми, кто не доверяет большим городам.",
  },
  {
    id: "ralfberg",
    name: "Ральфберг",
    type: "Поселение Лесного Народца",
    x: 15.8,
    y: 88.2,
    danger: "Удалённая окраина",
    description:
      "Юго-западное поселение Лесного Народца. На карте выглядит как удалённая точка за пределами главной лобийской дороги.",
    details:
      "Подходит для пограничных лесных квестов, отдыха, следов старых дорог и встреч с теми, кто ушёл от королевской жизни.",
  },
  {
    id: "pogan",
    name: "Погань",
    type: "Поселение Грибабасов",
    x: 8.8,
    y: 70.0,
    danger: "Низко, если не угрожать",
    description:
      "Поселение, связанное с грибабасами — дружелюбной расой разумных грибов, почитающих друидов и Лесной Народец.",
    details:
      "Здесь уместны торговля шампиньонами, странные бытовые сцены и мягкий юмор Эрбеса.",
  },
  {
    id: "gryazan",
    name: "Грязань",
    type: "Поселение Грибабасов",
    x: 34.0,
    y: 72.6,
    danger: "Низко / странно",
    description:
      "Грибабасское поселение, отмеченное недалеко от южной границы Лобии.",
    details:
      "Может стать точкой для грибных товаров, друидских поручений и абсурдных бытовых историй.",
  },
  {
    id: "zaytun",
    name: "Зайтун",
    type: "Амфибианское поселение",
    x: 31.5,
    y: 29.7,
    danger: "Зависит от касты",
    description:
      "Амфибианское поселение в северо-западной части карты, рядом с озёрами и болотистыми землями.",
    details:
      "Подходит для историй о высших и низших амфибианцах, торговле водой, рыбе и напряжении с Лесным Народцем.",
  },
  {
    id: "kru-zha",
    name: "Кру-Жа",
    type: "Амфибианское поселение",
    x: 27.7,
    y: 44.2,
    danger: "Неоднозначно",
    description:
      "Поселение амфибианцев западнее центральных земель. На карте расположено среди водоёмов и зелёных участков.",
    details:
      "Может быть местом встречи с низшими амфибианцами, жаболюдами или посредниками между сушей и водой.",
  },
  {
    id: "keram",
    name: "Керам",
    type: "Автономный амфибианский город",
    x: 72.1,
    y: 72.3,
    danger: "Напряжённо / последствия договора 897 года",
    description:
      "Бывшая часть Южных земель за Большой Ворлгой, заселённая в основном амфибианцами после пожаров и переселения.",
    details:
      "Керам получил высокую автономию, но бедные земли и разрушенную инфраструктуру. Его история усилила раскол Высших и Низших Амфибианцев.",
  },
  {
    id: "yuzhny",
    name: "Южный",
    type: "Речной торговый город",
    x: 73.2,
    y: 58.8,
    danger: "Торговля / охотничьи земли",
    description:
      "Когда-то великий город фарфора и мастерских, теперь торговая точка на Большой Ворлге рядом с лесом Шерр-Метт.",
    details:
      "После отделения Керама Южный потерял большую часть производств и стал менять экономику на торговлю. Осенью здесь проходит охотничий праздник Туресслёт.",
  },
  {
    id: "gangur",
    name: "Гангур",
    type: "Восточные земли",
    x: 82.5,
    y: 59.2,
    danger: "Неизвестно",
    description:
      "Восточная область на карте. Может быть землёй с неясной политической принадлежностью и местными слухами.",
    details:
      "Хорошее место для будущего расширения лора, конфликтов с соседями и новых поселений.",
  },
  {
    id: "katua-lands",
    name: "Земли Катуа",
    type: "Холмистые земли огров Катуа",
    x: 74.2,
    y: 17.6,
    danger: "Сурово / мало дорог",
    description:
      "Холмистые массивы и хребты, где огры Катуа живут рядом с редкими человеческими поселениями и стараются не вмешиваться в чужую жизнь.",
    details:
      "До переселения огров здесь лежали земли Димитро — малого северного королевства людей. Сейчас эти места не считаются полноценным государством, но на картах их часто отмечают как владение огров. Самое большое селение, Катуа-тара, известно западным хронистам как Катуа.",
    landscape: {
      src: "/images/landscapes/katua-lands.jpg",
      title: "Хребты и холмы Катуа",
      note: "Подходит для: Земли Катуа, Катуа-тары, огрские пещеры и каменные идолы",
    },
    emblem: {
      src: "/images/heraldry/katua-arms.png",
      title: "Герб Земель Катуа",
      note: "Геральдический знак огров Катуа в лобийской картографической традиции",
    },
  },
  {
    id: "aquapills",
    name: "Аквапилс",
    type: "Бисмийское поселение",
    x: 66.6,
    y: 20.6,
    danger: "Опасно / закрыто",
    description:
      "Поселение, связанное с Королевством Бисмия. В лоре Аквапилс указан как одно из поселений тёмных людей.",
    details:
      "Подходит для тёмной магии, закрытых обществ, тайных сделок и слухов о Бисмии.",
  },
  {
    id: "valuyan",
    name: "Валуян",
    type: "Поселение Грибабасов",
    x: 26.8,
    y: 12.4,
    danger: "Низко / лесное",
    description:
      "Северное поселение, связанное с грибабасами и лесными землями.",
    details:
      "Может быть мирной точкой, где игроки узнают новости леса, купят припасы или услышат странные слухи.",
  },
  {
    id: "holeskar",
    name: "Млоскар",
    type: "Культурно-развлекательная столица Лобии",
    x: 26.0,
    y: 34.5,
    danger: "Болота / городские интриги",
    description:
      "Западный город прудов, фонтанов, театра, озёрных пристаней, керамского фарфора и иностранной культуры.",
    details:
      "Построенный на болотах Млоскар в 790 году ППА стал воротами западной культуры и импорта. Его символы — Стена Стран, амфитеатр «Чайка» и старый город бело-голубых домов на заводях.",
  },
];

export default function InteractiveLobiaMap() {
  const [activeId, setActiveId] = useState(null);
  const active = useMemo(
    () => locations.find((location) => location.id === activeId) ?? null,
    [activeId]
  );

  return (
    <div className="interactive-map-layout">
      <div className="interactive-map-stage" aria-label="Интерактивная карта Лобии">
        <img className="framed-map-image interactive-map-image" src="/images/lobia-map.png" alt="Карта Лобии" />
        {locations.map((location) => {
          const edgeClass = [
            location.x < 18 ? "map-pin-near-left" : "",
            location.x > 82 ? "map-pin-near-right" : "",
            location.y < 18 ? "map-pin-near-top" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
          <button
            key={location.id}
            type="button"
            className={`map-pin ${edgeClass} ${activeId === location.id ? "map-pin-active" : ""}`}
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onClick={() => setActiveId(location.id)}
            aria-label={`Открыть описание: ${location.name}`}
          >
            <span className="map-pin-dot" />
            <span className="map-pin-label">{location.name}</span>
            <span className="map-pin-tooltip">
              <strong>{location.name}</strong>
              <small>{location.type}</small>
              <em>{location.description}</em>
              {location.landscape ? (
                <img
                  className="map-pin-landscape-thumb"
                  src={location.landscape.src}
                  alt={location.landscape.title}
                />
              ) : null}
            </span>
          </button>
          );
        })}
      </div>

      <aside className="map-location-card" aria-live="polite">
        {active ? (
          <>
            <span className="map-location-kicker">Выбранная точка</span>
            <h3>{active.name}</h3>
            <dl>
              <div>
                <dt>Тип</dt>
                <dd>{active.type}</dd>
              </div>
              <div>
                <dt>Статус</dt>
                <dd>{active.danger}</dd>
              </div>
            </dl>
            <p>{active.description}</p>
            <p className="map-location-detail">{active.details}</p>
            {active.landscape ? (
              <figure className="map-location-landscape">
                <img src={active.landscape.src} alt={active.landscape.title} />
                <figcaption>
                  <strong>{active.landscape.title}</strong>
                  <span>{active.landscape.note}</span>
                </figcaption>
              </figure>
            ) : null}
          </>
        ) : (
          <>
            <span className="map-location-kicker">Картографическая помета</span>
            <h3>Выбери точку</h3>
            <p>Наведи курсор на город или область, чтобы увидеть краткую подсказку.</p>
            <p className="map-location-detail">Нажми на точку, чтобы закрепить подробную запись в этой карточке.</p>
          </>
        )}
      </aside>

      {active && (active.emblem || active.landscape) ? (
        <section className="map-selected-gallery" aria-live="polite">
          {active.landscape ? (
            <figure className="map-selected-panel map-selected-panel-landscape">
              <img src={active.landscape.src} alt={active.landscape.title} />
              <figcaption>
                <span className="map-selected-panel-kicker">Ландшафт местности</span>
                <strong>{active.landscape.title}</strong>
                <p>{active.landscape.note}</p>
              </figcaption>
            </figure>
          ) : null}

          {active.emblem ? (
            <figure className="map-selected-panel map-selected-panel-emblem">
              <div className="map-selected-emblem-wrap">
                <img src={active.emblem.src} alt={active.emblem.title} />
              </div>
              <figcaption>
                <span className="map-selected-panel-kicker">Геральдика</span>
                <strong>{active.emblem.title}</strong>
                <p>{active.emblem.note}</p>
              </figcaption>
            </figure>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
