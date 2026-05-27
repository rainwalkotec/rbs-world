import OrderKnightRider from "@/OrderKnightRider";

const positions = [
  {
    title: "Королевский кодекс",
    motto: "Трон выше сомнений",
    symbol: "♛",
    tone: "royal",
    thesis:
      "Сторонники этой позиции считают, что Орден был создан волей Короля и не имеет права становиться самостоятельной политической силой. Даже отсутствие Короля Розы не отменяет присягу.",
    goal:
      "Сохранить вертикаль власти, дождаться возвращения Короля или исполнить его последнюю известную волю.",
    risk:
      "Слепое следование кодексу может превратить РБС в инструмент старых приказов, которые больше не отвечают реальности страны.",
    members: ["Рыцарь Катт", "Рыцарь Маг"],
  },
  {
    title: "Компромисс Ордена",
    motto: "Не расколоть стол",
    symbol: "⚖",
    tone: "compromise",
    thesis:
      "Эта сторона пытается удержать Орден от открытого распада. Для неё важнее не победа одной фракции, а сохранение общего дела, связей между рыцарями и возможности договориться.",
    goal:
      "Найти временный порядок, при котором Орден продолжит служить Лобии, но не станет заложником чужих амбиций.",
    risk:
      "Компромисс может оказаться слишком мягким, если остальные стороны уже готовы перейти к силовому решению.",
    members: ["Рыцарша Ю."],
  },
  {
    title: "Самостоятельность РБС",
    motto: "Стол не принадлежит трону",
    symbol: "✦",
    tone: "independent",
    thesis:
      "Сторонники самостоятельности считают, что Орден перерос роль королевского инструмента. Если корона молчит, рыцари должны сами решать, как защищать страну и людей.",
    goal:
      "Превратить РБС в независимую силу, которая отвечает не перед одним правителем, а перед землёй, народом и собственным кодексом.",
    risk:
      "Такой путь легко может быть воспринят как мятеж, даже если его сторонники искренне хотят спасти Лобию.",
    members: ["Часть молодых рыцарей", "Независимые союзники"],
  },
  {
    title: "Против Короля",
    motto: "Старая власть должна уйти",
    symbol: "☘",
    tone: "revolt",
    thesis:
      "Эта позиция видит в Короле и его наследии источник нынешнего кризиса. Для её сторонников Орден должен разорвать старую присягу и отказаться от служения трону.",
    goal:
      "Остановить влияние Короля на Орден, пересобрать власть вокруг новых принципов и не позволить старому кодексу погубить будущее.",
    risk:
      "Открытый разрыв с троном может привести к гражданскому конфликту и столкнуть рыцарей друг с другом.",
    members: ["Друид", "Паладин"],
  },
];

export default function OrderRbs() {
  return (
    <main className="manuscript order-manuscript">
      <OrderKnightRider />

      <section className="page-header order-hero">
        <span className="eyebrow">Королевский кодекс</span>
        <h1>Орден Рыцарей Балдёжного Стола</h1>
        <p className="lead">
          Специальный отряд Короны Лобии, учреждённый в начале Тёмного века.
          Орден был создан для служения Королю, но исчезновение Короля Розы,
          старые обязательства и личные амбиции превращают РБС в центр большого
          внутреннего раскола.
        </p>
      </section>

      <section className="order-banner-panel">
        <div className="order-seal">⚔</div>
        <div>
          <span className="small-note">901 год от прибытия Ангела</span>
          <h2>От королевского отряда к расколотому столу</h2>
          <p>
            Рыцари Балдёжного Стола должны были стать наследниками славы
            Священного Лобийского Ордена. Но чем дольше отсутствует Король,
            тем сильнее звучит вопрос: кому теперь служит Орден — трону,
            Лобии, самому себе или будущему, которое ещё не наступило?
          </p>
        </div>
      </section>

      <section className="order-positions-intro">
        <span className="eyebrow">Четыре взгляда</span>
        <h2>Раскол внутри Ордена</h2>
        <p>
          Внутри РБС формируются четыре позиции. Они не являются простым делением
          на добро и зло: каждая сторона защищает собственное понимание долга,
          страха, власти и рыцарской чести.
        </p>
      </section>

      <section className="order-constellation" aria-label="Связи позиций Ордена">
        <div className="constellation-line line-one" />
        <div className="constellation-line line-two" />
        <div className="constellation-line line-three" />
        <div className="constellation-line line-four" />
        {positions.map((position, index) => (
          <article
            className={`order-position-card ${position.tone}`}
            key={position.title}
            style={{ "--position-index": index }}
          >
            <div className="position-symbol" aria-hidden="true">
              {position.symbol}
            </div>
            <div className="position-content">
              <span className="position-motto">{position.motto}</span>
              <h3>{position.title}</h3>
              <p>{position.thesis}</p>
              <div className="position-detail-grid">
                <div>
                  <strong>Цель</strong>
                  <span>{position.goal}</span>
                </div>
                <div>
                  <strong>Риск</strong>
                  <span>{position.risk}</span>
                </div>
              </div>
              <div className="position-members">
                <strong>Связанные персонажи</strong>
                <div>
                  {position.members.map((member) => (
                    <span key={member}>{member}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="order-relations-scroll">
        <div className="scroll-rod top" />
        <div className="order-relations-content">
          <h2>Как эти взгляды связаны</h2>
          <div className="relations-grid">
            <article>
              <span>♛ ↔ ⚖</span>
              <h3>Кодекс и компромисс</h3>
              <p>
                Рыцарша Ю. может говорить с королевской стороной, потому что не
                отрицает присягу. Но она не хочет, чтобы Орден стал слепой рукой
                трона.
              </p>
            </article>
            <article>
              <span>⚖ ↔ ✦</span>
              <h3>Компромисс и самостоятельность</h3>
              <p>
                Эти позиции ближе друг к другу, чем кажется: обе понимают, что
                прежний порядок уже треснул. Разница в том, насколько далеко
                можно зайти без открытого разрыва.
              </p>
            </article>
            <article>
              <span>♛ ↔ ☘</span>
              <h3>Король и сопротивление</h3>
              <p>
                Самый опасный конфликт. Для Рыцаря Катта и Рыцаря Мага присяга
                остаётся законом. Для Друида и Паладина старый закон уже стал
                угрозой.
              </p>
            </article>
            <article>
              <span>✦ ↔ ☘</span>
              <h3>Самостоятельность и разрыв</h3>
              <p>
                Самостоятельность может стать мостом к реформе или первым шагом
                к восстанию. Всё зависит от того, кто первым решит перейти от
                слов к действию.
              </p>
            </article>
          </div>
        </div>
        <div className="scroll-rod bottom" />
      </section>
    </main>
  );
}
