const assets = {
  aboutImage1:
    "/cat1.png",
  aboutImage2:
    "/cat2.png",
  aboutImage3:
    "/сat3.png",
  aboutImage4:
    "/cat4.png",
};

const aboutImages = [
  {
    src: assets.aboutImage1,
    alt: "Торт с фигуркой кота",
    rotate: "-rotate-[12deg]",
  },
  { src: assets.aboutImage2, alt: "Круглый торт", rotate: "rotate-[8deg]" },
  { src: assets.aboutImage3, alt: "Мини торт", rotate: "-rotate-[6deg]" },
  {
    src: assets.aboutImage4,
    alt: "Красный торт",
    rotate: "rotate-[6deg]",
  },
];

function AboutSection() {
  return (
    <section id="about" className="bg-[#341C11] py-14 text-amber-50 md:py-20">
      <div className="mx-auto w-full max-w-480 space-y-10 px-4 md:px-8">
        <div className="mx-auto max-w-[840px] space-y-5 text-center">
          <h2 className="text-4xl font-extrabold uppercase leading-[0.94] md:text-5xl">
            О нас
          </h2>
          <p className="text-lg font-medium leading-tight md:text-xl">
            Мы создаем торты по фотографиям ваших питомцев, бережно передавая их
            особенности, характер и настроение. По одному снимку или целой серии
            фото мы воссоздаем детали - окрас, взгляд, любимую позу - чтобы торт
            стал трогательной и персональной частью вашего праздника.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutImages.map((image) => (
            <div
              key={image.src}
              className={`overflow-hidden bg-[#f7edd7] transition transform hover:scale-110 p-3 ${image.rotate}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover md:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
