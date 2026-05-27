import Link from "next/link";
import HomeAtmosphere from "../HomeAtmosphere";

export default function Home() {
  return (
    <>
      <HomeAtmosphere />
      <main className="manuscript home-manuscript">
      <section className="hero-grid home-hero-reveal">
        <div className="page-header">
          <span className="eyebrow">Путеводитель по вселенной</span>
          <h1>Эрбес</h1>
          <p className="lead">
            Средневековый свод земель, народов и тёмных хроник мира, где Орден
            Рыцарей Балдёжного Стола служит Короне Лобии — пока сама страна
            медленно подходит к расколу.
          </p>

          <div className="cta-row">
            <Link className="button" href="/factions">Открыть архив фракций</Link>
            <Link className="button-dark" href="/map">Смотреть карту</Link>
          </div>
        </div>

        <aside className="hero-panel animated-hero-panel">
          <span className="eyebrow">Тёмный век • 909 год</span>
          <h2>Рукопись РБС</h2>
          <div className="ornament">✦</div>
          <p>
            Здесь собраны сведения о Лобии, Лесном Народце, Бисмии,
            Ховридах, Моско, Амфибианцах и тех, кого лучше не встречать
            без оружия, свитка или очень хорошей причины.
          </p>
        </aside>
      </section>

      <div className="ornament">✦</div>

      <section className="card-grid animated-card-grid">
        <Link className="lore-card" href="/lobia">
          <h3>Королевство Лобия</h3>
          <p>Деполь, корона, рыцари и старые обязательства перед страной.</p>
          <span className="meta">Войти в Лобию</span>
        </Link>

        <Link className="lore-card" href="/order-rbs">
          <h3>Орден РБС</h3>
          <p>Новоучреждённый орден, который пытается унаследовать славу прошлого.</p>
          <span className="meta">Открыть кодекс</span>
        </Link>

        <Link className="lore-card" href="/characters-library">
          <h3>Библиотека Персонажей</h3>
          <p>Игровые герои, жители Эрбеса, слухи, условные встречи и личные дела РБС.</p>
          <span className="meta">Открыть картотеку</span>
        </Link>

        <Link className="lore-card" href="/locations">
          <h3>Локации Эрбеса</h3>
          <p>Города, таверны, кладбища, чащи, мастерские и тайные места кампании.</p>
          <span className="meta">Открыть атлас</span>
        </Link>

        <Link className="lore-card" href="/chronicles">
          <h3>Хроники</h3>
          <p>Записи Тёмного века, слухи, пророчества и незавершённые главы.</p>
          <span className="meta">Читать летопись</span>
        </Link>
      </section>

      <section className="scroll-atmosphere-chapter">
        <span className="eyebrow">Смена стражи</span>
        <h2>Когда рассвет входит в архив</h2>
        <p>
          Пролистай рукопись ниже: ночная зала постепенно светлеет, звёзды уходят,
          свечи гаснут, а над воском поднимается тонкий дымок. Так Эрбес встречает
          новый день — не громко, а как старая летопись, которую открыли на рассвете.
        </p>
      </section>
    </main>
    </>
  );
}
