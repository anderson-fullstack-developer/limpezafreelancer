import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { AboutSection, FAQAccordion, FinalCTA, HeroSection, HowItWorksSection, ServicesSection } from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer, MobileStickyCTA } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brilho & Cuidado — Serviços de limpeza (demonstração)" },
      { name: "description", content: "Limpeza residencial, escritórios, condomínios, pós-obras e limpezas profundas. Prepare o seu pedido de orçamento em poucos passos." },
      { property: "og:title", content: "Brilho & Cuidado — Serviços de limpeza" },
      { property: "og:description", content: "Website de demonstração: serviços de limpeza com pedido de orçamento interativo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
