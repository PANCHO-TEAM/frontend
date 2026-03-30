function OfficeSection() {
  return (
    <section
      id="office"
      className="mx-auto w-full max-w-[1376px] space-y-10 px-4 py-14 md:px-8 md:py-20"
    >
      <div className="space-y-8 text-[#341C11]">
        <h2 className="text-4xl font-extrabold uppercase leading-[0.94] md:text-5xl">
          Наш офис
        </h2>

        <div className="grid gap-8 text-lg font-medium md:grid-cols-3 md:text-xl">
          <div className="space-y-4">
            <h3 className="font-bold">Адрес</h3>
            <p className="space-y-4">Россия, 191186, Санкт-Петербург, ул. Большая Морская, 18</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Номер телефона</h3>
            <a 
            href="tel:+78121112233"
            className="space-y-4 hover:underline">+78121112233</a>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Электронная почта</h3>
            <a href="mailto:example@mail.com?subject=Вопрос&body=Здравствуйте! Меня интересует:"
            className="space-y-4 hover:underline">info@pinkcake.ru</a>
          </div>
        </div>
      </div>

      <iframe
        title="Карта офиса"
        src="https://yandex.ru/map-widget/v1/?ll=30.315635%2C59.934280&mode=whatshere&pt=30.315635,59.934280,pm2rdm&z=16"
        className="h-[556px] w-full border-0"
        loading="lazy"
      />
    </section>
  )
}

export default OfficeSection
