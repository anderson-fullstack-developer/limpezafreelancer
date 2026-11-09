import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { AboutSection, FAQAccordion, FinalCTA, HeroSection, HowItWorksSection, ServicesSection } from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer, MobileStickyCTA } from "@/components/site/Footer";

const SITE_URL = "https://brilho-e-cuidado-beige.vercel.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brilho & Cuidado — Serviços de limpeza (demonstração)" },
      { name: "description", content: "Limpeza residencial, escritórios, condomínios, pós-obras e limpezas profundas. Prepare o seu pedido de orçamento em poucos passos." },
      { property: "og:title", content: "Brilho & Cuidado — Serviços de limpeza" },
      { property: "og:description", content: "Limpeza de casas, escritórios, condomínios e pós-obras. Peça o seu orçamento em poucos passos." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Brilho & Cuidado" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:url", content: SITE_URL },
      // Square logo: WhatsApp shows it as a small thumbnail next to the link.
      { property: "og:image", content: `${SITE_URL}/og-logo.jpg` },
      { property: "og:image:secure_url", content: `${SITE_URL}/og-logo.jpg` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      { property: "og:image:alt", content: "Brilho & Cuidado — serviços de limpeza" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: `${SITE_URL}/og-logo.jpg` },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#servicos" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">Saltar para o conteúdo</a>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <Gallery />
        <QuoteForm />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
