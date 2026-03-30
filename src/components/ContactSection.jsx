import { useState } from "react";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    message: "",
    contactType: "EMAIL",
    contactValue: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке формы");
      }

      setSuccess(true);

      setForm({
        name: "",
        message: "",
        contactType: "EMAIL",
        contactValue: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className="mx-auto grid w-full max-w-480 gap-10 px-4 py-14 md:grid-cols-2 md:items-start md:px-8 md:py-20"
    >
      <div className="space-y-8">
        <div className="space-y-4 text-[#341C11]">
          <h2 className="text-4xl font-extrabold uppercase leading-[0.94] md:text-5xl">
            Остались вопросы?
          </h2>
          <p className="text-lg font-medium leading-tight md:text-xl">
            Мы с радостью поможем вам определиться с дизайном, вкусом и форматом
            торта. Расскажем о доступных начинках, подскажем по срокам
            изготовления и поможем выбрать идеальный вариант для вашего события.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Имя"
            className="outline-none focus:border-[#663e2b] w-full border border-[#341C11] bg-transparent px-6 py-3 text-xl text-[#341C11]"
          />

          <div className="relative w-full">
            <select
              name="contactType"
              value={form.contactType}
              onChange={handleChange}
              className="appearance-none outline-none w-full px-6 py-3 pr-10 border border-[#341C11] bg-transparent text-xl text-[#341C11] focus:border-[#663e2b]"
            >
              <option value="EMAIL">Электронная почта</option>
              <option value="TELEGRAM">Телеграм</option>
              <option value="PHONE">Номер телефона</option>
            </select>

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-2 h-2 border-r-2 border-b-2 border-[#341C11] rotate-45"></div>
            </div>
          </div>

          <input
            type="text"
            name="contactValue"
            value={form.contactValue}
            onChange={handleChange}
            placeholder={
              form.contactType === "EMAIL"
                ? "Введите email"
                : form.contactType === "TELEGRAM"
                ? "Введите @username"
                : "Введите номер телефона"
            }
            className="outline-none focus:border-[#663e2b] w-full border border-[#341C11] bg-transparent px-6 py-3 text-xl text-[#341C11]"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ваш вопрос"
            className="h-28 w-full resize-none border border-[#341C11] outline-none focus:border-[#663e2b] bg-transparent px-6 py-3 text-xl text-[#341C11]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full max-w-[300px] bg-[#341C11] px-6 py-3 text-xl font-medium text-amber-50 hover:bg-[#664b3f] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Отправлено!</p>}
        </form>
      </div>

      <img
        src="/contacts.png"
        alt="Фото полароид с котиками"
        className="w-full object-cover"
      />
    </section>
  );
}

export default ContactSection;