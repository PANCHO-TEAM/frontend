import { MENU } from "../lib/menu-const";

function FooterSection() {
  return (
    <footer className="bg-pink-300">
      <div className="mx-auto w-full max-w-480 space-y-20 px-4 py-10 md:px-8 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <a
            href="#main"
            className="text-4xl font-extrabold uppercase text-amber-50 md:text-5xl"
          >
            <img
              src="/logo.svg"
              alt="Cats on Cakes"
              className="min-h-40 w-auto md:h-12"
            />
          </a>

          <ul className="flex flex-wrap gap-8 text-lg font-medium text-amber-50 md:text-xl">
            {MENU.map((item) => (
              <li key={item.label}>
                <a className="transition hover:opacity-80" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 text-sm text-amber-50/80 md:flex-row md:items-end md:justify-between md:text-base">
          <p>Адрес: Россия, 191186, Санкт-Петербург, ул. Большая Морская, 18</p>
          <p>Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
