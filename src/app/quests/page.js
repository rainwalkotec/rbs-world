export default function Quests() {
  return (
    <main style={styles.main}>
      <p style={styles.label}>Журнал мастера</p>
      <h1 style={styles.title}>Квесты</h1>

      <article style={styles.quest}>
        <p style={styles.status}>Статус: сырой, но возможный</p>
        <h2 style={styles.questTitle}>Депольская ночь</h2>
        <p>
          Первый крупный квест кампании. Герои встречаются в таверне «У Маги и Зины», получают от Ю. задание добыть рецепт Фуфного зелья и доставить его друидам.
        </p>

        <div style={styles.columns}>
          <section>
            <h3>Ключевые локации</h3>
            <ul>
              <li>таверна «У Маги и Зины»;</li>
              <li>улицы Деполя;</li>
              <li>лачуга алхимика Ильи;</li>
              <li>гараж Ярослава;</li>
              <li>городские ворота;</li>
              <li>чаща Шерр-метт;</li>
              <li>лесная стоянка друида.</li>
            </ul>
          </section>

          <section>
            <h3>Варианты выхода из города</h3>
            <ul>
              <li>пройти через ворота с документами ховрида;</li>
              <li>уехать на мотокарете «Балейка»;</li>
              <li>улететь на ГЕЕ-2;</li>
              <li>прорываться, скрываться или договариваться.</li>
            </ul>
          </section>
        </div>

        <div style={styles.rewardBox}>
          <h3>Награды и последствия</h3>
          <p>
            Друид выдаёт каждому по 2 золотых и варит одно зелье Фуфа на будущее. Победа над колдуном может принести посох с роем ежей и проклятый золотой кинжал с рубином.
          </p>
        </div>
      </article>
    </main>
  );
}

const styles = {
  main: { padding: "70px 40px", minHeight: "100vh" },
  label: { color: "#d6bc84", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.75 },
  title: { fontSize: "62px", margin: "8px 0 32px" },
  quest: { maxWidth: "1050px", background: "rgba(25,18,12,0.9)", border: "1px solid rgba(255,220,170,0.14)", borderRadius: "20px", padding: "30px" },
  status: { color: "#d6bc84", opacity: 0.72, margin: 0 },
  questTitle: { fontSize: "42px", margin: "8px 0 12px" },
  columns: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "20px" },
  rewardBox: { marginTop: "24px", padding: "18px", border: "1px solid rgba(214,188,132,0.2)", borderRadius: "14px", background: "rgba(214,188,132,0.04)" },
};
