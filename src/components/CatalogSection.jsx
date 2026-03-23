function CatalogCard({ card }) {
  const specs = [
    card.diameter ? `Диаметр: ${card.diameter}` : null,
    card.weight ? `Вес: ${card.weight}` : null,
    card.servings ? `Количество порций: ${card.servings}` : null,
    card.base ? `Основа: ${card.base}` : null,
  ].filter(Boolean)

  return (
    <article className="border-[3px] border-pink-300 p-4">
      <img
        src={card.imageUrl}
        alt={card.title}
        className="h-60 w-full object-cover md:h-[327px]"
      />
      <div className="mt-5 space-y-4 text-pink-300">
        <h3 className="text-3xl font-bold uppercase leading-[0.94]">{card.title}</h3>
        <div className="space-y-1 text-lg font-medium leading-tight md:text-xl">
          {specs.map((line) => (
            <p key={line}>{line}</p>
          ))}
          {card.description && <p>{card.description}</p>}
        </div>
        <button className="w-full bg-pink-300 px-6 py-4 text-xl font-medium text-amber-50 transition hover:brightness-95">
          Связаться
        </button>
      </div>
    </article>
  )
}

function CatalogSection({ cards, loading, error }) {
  return (
    <section id="catalog" className="mx-auto w-full max-w-480 px-4 py-14 md:px-8 md:py-20">
      <h2 className="mb-10 text-4xl font-extrabold uppercase leading-[0.94] text-pink-300 md:mb-14 md:text-5xl">
        Каталог
      </h2>

      {loading && <p className="text-xl font-medium text-pink-300">Загружаем карточки...</p>}
      {error && <p className="text-xl font-medium text-pink-300">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <CatalogCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CatalogSection
