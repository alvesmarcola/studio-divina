import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  Hero, Marquee, Studio, Services, Gallery, Highlight, BookingCTA, Location, Instagram, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Divina — Salão de Beleza & Estética em Canela/RS" },
      { name: "description", content: "Cabelos, unhas, estética e beleza em Canela/RS. Agende seu horário no Studio Divina pelo WhatsApp." },
      { property: "og:title", content: "Studio Divina — Salão de Beleza & Estética" },
      { property: "og:description", content: "Beleza que combina com você. Av. Osvaldo Aranha, 680 — Canela/RS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Studio />
        <Services />
        <Gallery />
        <Highlight />
        <BookingCTA />
        <Location />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
