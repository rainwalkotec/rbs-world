import Link from "next/link";
import "./globals.css";
import Candles from "../Candles";

export const metadata = {
  title: "Эрбес — путеводитель по миру РБС",
  description: "Средневековый свод фракций, хроник и земель Эрбеса",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Candles />
        <div className="site-shell">
          <header className="topbar">
            <Link className="brand" href="/">
              <span className="brand-mark">Э</span>
              <span>Эрбес</span>
            </Link>

            <nav className="nav" aria-label="Главная навигация">
              <Link href="/factions">Фракции</Link>
              <Link href="/lobia">Лобия</Link>
              <Link href="/order-rbs">Орден РБС</Link>
              <Link href="/characters-library">Библиотека Персонажей</Link>
              <Link href="/locations">Локации</Link>
              <Link href="/map">Карта</Link>
              <Link href="/chronicles">Хроники</Link>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
