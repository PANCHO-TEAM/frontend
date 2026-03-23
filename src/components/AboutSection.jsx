const assets = {
  aboutImage1:
    "https://www.figma.com/api/mcp/asset/4925cd3e-8296-49cc-a01e-926f00af9757",
  aboutImage2:
    "https://www.figma.com/api/mcp/asset/614e151f-6c3a-4fb9-a59a-249d805ba737",
  aboutImage3:
    "https://www.figma.com/api/mcp/asset/82e536d3-6be9-4f86-9d46-ef36a24f57f5",
  aboutImage4:
    "https://www.figma.com/api/mcp/asset/36de8d94-9cf3-43ae-9b69-da077ca2c5b6",
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
    <section id="about" className="bg-pink-300 py-14 text-amber-50 md:py-20">
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
              className={`overflow-hidden bg-[#f7edd7] p-3 ${image.rotate}`}
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
