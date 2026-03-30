const heroImage =
  "/cat_in_cake.png";


function HeroSection() {
  return (
    <section
      id="main"
      className="relative mx-auto grid w-full max-w-480 gap-10 px-4 pb-14 pt-4 md:grid-cols-2  md:px-8 md:pb-16"
    >
      <div className="space-y-8 relative ">
        <div className="space-y-4"> 
          <h1 className="text-6xl font-extrabold uppercase leading-[1.13] text-[#341C11] md:text-[96px]">
            Котики на тортике
          </h1>
          <p className="max-w-[600px] text-xl font-medium leading-[1.13] text-[#341C11]">
            Готовим торты с котиками любой сложности - от минималистичного
            декора до детально проработанных фигурок ручной работы
          </p>
          
        </div>
        <a
          href="#catalog"
          className="inline-block w-full max-w-[400px] bg-[#341C11] px-6 py-4 text-xl font-medium text-amber-50 text-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#664b3f] hover:scale-105 focus:border-[#663e2b]"
        >
          Заказать
        </a>
      </div>

      <div className="relative">
        <div className="absolute -left-8 top-0 hidden h-[520px] w-[420px] rounded-[220px] border-2 border-dashed border-[#341C11] md:block" />
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
