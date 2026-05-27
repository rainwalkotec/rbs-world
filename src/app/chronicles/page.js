export default function Chronicles() {
  return (
    <main className="manuscript">
      <section className="page-header">
        <span className="eyebrow">Летописный зал</span>
        <h1>Хроники Эрбеса</h1>
        <p className="lead">
          История Тёмного века, становления Ордена РБС, слухов о забытых
          землях и вопросов, которые ещё ждут решения мастера.
        </p>
      </section>

      <section className="split">
        <article className="lore-card">
          <h3>901 год</h3>
          <p>
            Король учреждает Орден Рыцарей Балдёжного Стола как государственный
            аппарат для защиты Лобии.
          </p>
          <span className="meta">Начало Тёмного века</span>
        </article>

        <article className="dark-panel">
          <h2>Неразобранные главы</h2>
          <ul className="chronicle-list">
            <li>История Священного Лобийского Ордена и артефакта Короля Розы.</li>
            <li>Роль Придворного Чародея, Ю., Бисмии и Тёмной Гвардии.</li>
            <li>Тайна Романа, Виктора и колодца возле трактира.</li>
            <li>Калатония, её безмагический остров и дочери древних богов.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
