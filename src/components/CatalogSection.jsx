function CatalogCard({ card }) {
  const specs = [
    card.diameter ? `Диаметр: ${card.diameter}` : null,
    card.weight ? `Вес: ${card.weight}` : null,
    card.servings ? `Количество порций: ${card.servings}` : null,
    card.base ? `Основа: ${card.base}` : null,
  ].filter(Boolean);
  return (
    <article className="border-[3px] border-[#341C11] bg-[#FFFBF1] p-4">
      <img
        src={card.images[0]}
        alt={card.title}
        className="h-60 w-full object-cover md:h-[327px]"
      />
      <div className="mt-5 space-y-4 text-[#341C11]">
        <h3 className="text-3xl font-bold uppercase leading-[0.94]">
          {card.title}
        </h3>
        <div className="space-y-1 text-lg font-medium leading-tight md:text-xl">
          {specs.map((line) => (
            <p key={line}>{line}</p>
          ))}
          {card.description && <p>{card.description}</p>}
        </div>
        <a
          href="#contacts"
          className="inline-block w-full max-w-[450px] bg-[#341C11] px-6 py-4 text-xl font-medium text-amber-50 text-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#664b3f] hover:scale-105 focus:border-[#663e2b]"
        >
          Связаться
        </a>
      </div>
    </article>
  );
}

function CatalogSection({ cards, loading, error }) {
  return (
    <section
      id="catalog"
      className="mx-auto w-full max-w-480 px-4 py-14 md:px-8 md:py-20"
    >
      <h2 className="mb-10 text-4xl font-extrabold uppercase leading-[0.94] text-[#341C11] md:mb-14 md:text-5xl">
        Каталог
      </h2>

      {loading && (
        <p className="text-xl font-medium text-[#341C11]">
          Загружаем карточки...
        </p>
      )}
      {error && <p className="text-xl font-medium text-[#341C11]">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <CatalogCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CatalogSection;
