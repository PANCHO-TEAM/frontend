import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CatalogSection from "./components/CatalogSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { Header, TopRibbon } from "./components/Header";
import HeroSection from "./components/HeroSection";
import OfficeSection from "./components/OfficeSection";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function normalizeCard(item, index) {
  return {
    id: item.id ?? `${item.title ?? "card"}-${index}`,
    title: item.title ?? "Без названия",
    description: item.description ?? "",
    diameter: item.diameter ?? "10-12 см",
    weight: item.weight ?? "350-500 г",
    servings: item.servings ?? "1-2",
    base: item.base ?? "бисквит",
    imageUrl: item.imageUrl ?? item.image ?? "",
  };
}

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCards() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE_URL}/api/products`);

        if (!response.ok) {
          throw new Error(`API вернул ${response.status}`);
        }

        const payload = await response.json();
        const normalized = Array.isArray(payload)
          ? payload.map(normalizeCard)
          : [];

        setCards(normalized);
      } catch {
        setError("Не удалось загрузить карточки с бэкенда");
        setCards([]);
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, []);

  return (
    <div
      className="bg-[#fffbf1] font-['Inter',sans-serif] text-[#fe94d4] "
      id="reviews"
    >
      <TopRibbon />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CatalogSection cards={cards} loading={loading} error={error} />
        <ContactSection />
        <OfficeSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
