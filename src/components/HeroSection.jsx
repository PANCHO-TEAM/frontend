const heroImage =
  "https://www.figma.com/api/mcp/asset/ca66977c-73ae-48f4-a72b-de6f0f78dc6f";

function HeroSection() {
  return (
    <section
      id="main"
      className="relative mx-auto grid w-full max-w-480 gap-10 px-4 pb-14 pt-4 md:grid-cols-2  md:px-8 md:pb-16"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold uppercase leading-[1.13] text-pink-300 md:text-[96px]">
            Котики на тортике
          </h1>
          <p className="max-w-[600px] text-xl font-medium leading-[1.13] text-pink-300">
            Готовим торты с котиками любой сложности - от минималистичного
            декора до детально проработанных фигурок ручной работы
          </p>
        </div>
        <button className="w-full max-w-[309px] bg-pink-300 px-10 py-4 text-xl font-medium text-amber-50 transition hover:brightness-95">
          Заказать
        </button>
      </div>

      <div className="relative">
        <div className="absolute -left-8 top-0 hidden h-[520px] w-[420px] rounded-[220px] border-2 border-dashed border-pink-200 md:block" />
        <img
          src={heroImage}
          alt="Котик-торт"
          className="relative z-10 h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
