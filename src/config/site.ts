/**
 * Business configuration. Edit this file to adapt the template to another business.
 * Components read everything (texts, services, images, links) from here.
 */
import hero from "@/assets/hero.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import cleaner from "@/assets/g-cleaner.jpg";
import kitchen from "@/assets/g-kitchen.jpg";
import office from "@/assets/g-office.jpg";
import bathroom from "@/assets/g-bathroom.jpg";
import bedroom from "@/assets/g-bedroom.jpg";

export type ServiceIcon = "home" | "building" | "users" | "hammer" | "sparkles";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: ServiceIcon;
}

export const site = {
  name: "Brilho & Cuidado",
  shortDescription:
    "Soluções de limpeza ilustrativas para habitações, escritórios e outros espaços.",
  demoNotice:
    "Website de demonstração desenvolvido para apresentação de serviços digitais. Brilho & Cuidado é uma empresa fictícia.",
  credit: { label: "Desenvolvido por Anderson Neto", url: "https://andersonneto.gt.tc/freelancer.html" },
  /** Future integration: set a real, authorised WhatsApp number (e.g. "3519XXXXXXXX"). Null = demo mode. */
  whatsappNumber: null as string | null,

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Sobre", href: "#sobre" },
    { label: "Perguntas frequentes", href: "#faq" },
    { label: "Contactos", href: "#orcamento" },
  ],

  hero: {
    eyebrow: "Serviços de limpeza para cada necessidade",
    title: "Mais tempo para o que importa. Da limpeza tratamos nós.",
    subtitle:
      "Soluções de limpeza para habitações, escritórios e outros espaços, adaptadas às suas necessidades.",
    image: heroTeam,
    imageAlt: "Equipa de dois profissionais de limpeza numa sala luminosa (imagem ilustrativa)",
  },

  services: {
    title: "Um espaço cuidado faz toda a diferença",
    subtitle: "Descubra soluções de limpeza para diferentes tipos de espaços e necessidades.",
    items: [
      { id: "Limpeza residencial", name: "Limpeza residencial", icon: "home", description: "Cuidados de limpeza para manter a sua casa confortável, organizada e agradável." },
      { id: "Limpeza de escritórios", name: "Limpeza de escritórios", icon: "building", description: "Soluções para espaços de trabalho limpos e preparados para o dia a dia." },
      { id: "Limpeza de condomínios", name: "Limpeza de condomínios", icon: "users", description: "Limpeza de zonas comuns, entradas, escadas e espaços partilhados." },
      { id: "Limpeza pós-obras", name: "Limpeza pós-obras", icon: "hammer", description: "Remoção de pó, resíduos ligeiros e sujidade após trabalhos de construção ou remodelação." },
      { id: "Limpeza profunda", name: "Limpezas profundas", icon: "sparkles", description: "Uma atenção mais detalhada às áreas que precisam de cuidados especiais." },
    ] as Service[],
  },

  steps: {
    title: "Simples do primeiro contacto ao orçamento",
    items: [
      { title: "Escolha o serviço", text: "Indique o tipo de limpeza de que precisa." },
      { title: "Conte-nos os detalhes", text: "Informe a localidade, o espaço e as suas necessidades." },
      { title: "Receba uma resposta", text: "A empresa analisa o pedido e entra em contacto para esclarecer os detalhes." },
    ],
  },

  about: {
    title: "Cuidar dos espaços é cuidar das pessoas",
    text: "Na Brilho & Cuidado, acreditamos que um ambiente limpo contribui para o conforto e o bem-estar. A nossa proposta é oferecer soluções adaptadas a diferentes espaços, com uma comunicação simples e atenção aos detalhes.",
    notice: "Empresa fictícia — conteúdo meramente demonstrativo.",
    image: aboutTeam,
    imageAlt: "Equipa de dois profissionais de limpeza a trabalhar numa sala luminosa (imagem ilustrativa)",
    points: ["Soluções adaptadas a cada espaço", "Comunicação simples e clara", "Atenção aos detalhes"],
  },

  gallery: {
    title: "Ambientes onde o cuidado faz a diferença",
    note: "Imagens ilustrativas geradas para demonstração. Não representam trabalhos reais.",
    images: [
      { src: hero, alt: "Sala de estar limpa e luminosa", caption: "Salas" },
      { src: kitchen, alt: "Cozinha moderna e organizada", caption: "Cozinhas" },
      { src: office, alt: "Espaço de escritório arrumado", caption: "Escritórios" },
      { src: bathroom, alt: "Casa de banho cuidada", caption: "Casas de banho" },
      { src: bedroom, alt: "Quarto luminoso com cama feita", caption: "Interiores luminosos" },
      { src: cleaner, alt: "Profissional a limpar o chão", caption: "Profissionais" },
    ],
  },

  quote: {
    title: "Prepare o seu pedido de orçamento",
    subtitle: "Preencha os detalhes e gere uma mensagem organizada, pronta a copiar.",
    services: [
      "Limpeza residencial",
      "Limpeza de escritórios",
      "Limpeza de condomínios",
      "Limpeza pós-obras",
      "Limpeza profunda",
      "Outro serviço",
    ],
    spaces: ["Apartamento T1", "Apartamento T2", "Apartamento T3", "Moradia", "Escritório", "Condomínio", "Outro espaço"],
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Que tipos de limpeza estão disponíveis?", a: "A proposta inclui limpezas residenciais, de escritórios, condomínios, pós-obras e limpezas profundas." },
      { q: "Como posso pedir um orçamento?", a: "Pode escolher um serviço e preencher o formulário com os detalhes do espaço." },
      { q: "O orçamento depende da dimensão do espaço?", a: "O valor pode variar conforme a dimensão, o tipo de limpeza e as necessidades específicas." },
      { q: "Posso pedir uma limpeza para uma data específica?", a: "Pode indicar a data pretendida no formulário, ficando a disponibilidade sujeita a confirmação." },
      { q: "É possível pedir uma limpeza personalizada?", a: "Sim. O formulário permite descrever necessidades adicionais." },
    ],
  },

  finalCta: {
    title: "O seu espaço merece atenção. Comece por pedir um orçamento.",
    text: "Escolha o serviço de que precisa e prepare o seu pedido em poucos passos.",
    button: "Preparar orçamento",
  },
};
