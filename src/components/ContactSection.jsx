function ContactSection() {
  return (
    <section id="contacts" className="mx-auto grid w-full max-w-480 gap-10 px-4 py-14 md:grid-cols-2 md:items-start md:px-8 md:py-20">
      <div className="space-y-8">
        <div className="space-y-4 text-pink-300">
          <h2 className="text-4xl font-extrabold uppercase leading-[0.94] md:text-5xl">Остались вопросы?</h2>
          <p className="text-lg font-medium leading-tight md:text-xl">
            Остались вопросы? Мы с радостью поможем вам определиться с дизайном, вкусом и форматом торта. Расскажем о доступных начинках, подскажем по срокам изготовления и поможем выбрать идеальный вариант для вашего события.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Имя"
            className="w-full border border-pink-300 bg-transparent px-6 py-3 text-xl text-pink-300 placeholder:text-pink-300/70"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full border border-pink-300 bg-transparent px-6 py-3 text-xl text-pink-300 placeholder:text-pink-300/70"
          />
          <textarea
            placeholder="Ваш вопрос"
            className="h-28 w-full resize-none border border-pink-300 bg-transparent px-6 py-3 text-xl text-pink-300 placeholder:text-pink-300/70"
          />
          <button
            type="button"
            className="w-full max-w-[309px] bg-pink-300 px-10 py-4 text-xl font-medium text-amber-50 transition hover:brightness-95"
          >
            Отправить
          </button>
        </form>
      </div>

      <img src='/contacts.png' alt="Фото полароид с котиками" className=" w-full object-cover" />
    </section>
  )
}

export default ContactSection
