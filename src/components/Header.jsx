import { MENU } from "../lib/menu-const";

function TopRibbon() {
  const text = "САМЫЕ ВКУСНЫЕ ТОРТЫ У НАС";

  return (
    <div className="overflow-hidden bg-[#341C11] py-2">
      <div className="flex min-w-max animate-[marquee_20s_linear_infinite] gap-16 px-4 text-2xl font-bold text-amber-50 md:text-[40px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-480 items-center justify-between px-4 py-5 md:px-8">
      <a
        href="#main"
        className="text-3xl font-extrabold uppercase text-[#341C11] md:text-4xl"
      >
        <img
          src="/logo_kit.svg"
          alt="Cats on Cakes"
          className="h-10 w-auto md:h-12"
        />
      </a>
      <nav>
        <ul className="hidden items-center gap-8 text-xl font-medium text-[#341C11] md:flex">
          {MENU.map((item) => (
            <li key={item.label}>
              <a className="transition hover:opacity-75" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Header, TopRibbon };
