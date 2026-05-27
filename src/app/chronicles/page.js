const timeline = [
  {
    date: "Эра Первого Света",
    title: "Прибытие Ангела",
    text: "Событие, от которого позднейшие летописцы ведут сакральный отсчёт истории Эрбеса. Ангел становится точкой происхождения мифов, календаря и первых представлений о священной земле.",
  },
  {
    date: "Древнейшие века",
    title: "Основание древних цивилизаций",
    text: "На землях Эрбеса возникают первые великие культуры. Их руины, забытые символы и артефакты позднее станут предметом интереса ховридов, калатонцев и искателей древней силы.",
  },
  {
    date: "Век сокрытия",
    title: "Исчезновение Калатонцев",
    text: "Калатонцы, дочери древних богов, скрываются на забытом острове Калатонии после столкновения мира с тёмной магией. С этого момента их история превращается в легенду.",
  },
  {
    date: "Перед 901 годом",
    title: "Начало Тёмного века",
    text: "Эрбес входит в эпоху тревог, закрытых орденов, междоусобиц и магических страхов. Старые союзы слабеют, а новые силы начинают бороться за влияние.",
  },
  {
    date: "901 год",
    title: "Основание Рыцарей Балдёжного Стола",
    text: "Король Роза учреждает Орден РБС как государственный аппарат для защиты Королевства Лобия. Орден должен унаследовать славу древнего Священного Лобийского Ордена.",
  },
  {
    date: "909 год",
    title: "Текущие события кампании",
    text: "Королевство и Орден стоят у порога раскола. Рыцари, придворные силы, независимые ордена и соседние народы всё чаще сталкиваются не из-за добра и зла, а из-за интересов, страхов и власти.",
  },
];

export default function Chronicles() {
  return (
    <main className="manuscript chronicles-manuscript">
      <section className="page-header">
        <span className="eyebrow">Летописный зал</span>
        <h1>Хроники Эрбеса</h1>
        <p className="lead">
          Летописный свиток ключевых эпох Эрбеса: от прибытия Ангела до событий
          кампании 909 года, когда Орден Рыцарей Балдёжного Стола оказался на
          границе внутреннего раскола.
        </p>
      </section>

      <section className="timeline-scroll" aria-label="Хронология Эрбеса">
        <div className="scroll-roller scroll-roller-top" aria-hidden="true" />
        <div className="timeline-parchment">
          <div className="timeline-spine" aria-hidden="true" />
          {timeline.map((event, index) => (
            <article className="timeline-event" key={event.title}>
              <div className="timeline-seal" aria-hidden="true">
                {index + 1}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h2>{event.title}</h2>
                <p>{event.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="scroll-roller scroll-roller-bottom" aria-hidden="true" />
      </section>

      <section className="chronicles-footer-note">
        <span className="small-note">Помета летописца</span>
        <h2>Продолжение свитка</h2>
        <p>
          Позже сюда можно добавить точные даты войн, правления Короля Розы,
          историю Священного Лобийского Ордена, исчезновение Романа и Виктора,
          а также первые признаки раскола внутри РБС.
        </p>
      </section>
    </main>
  );
}
