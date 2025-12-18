export const config = {
  app: {
    name: "AgroVision",
    logoText: "Agro",
    logoHighlight: "Vision",
    logoLetter: "A",
    description: "Revolucionando a pecuária brasileira com inteligência artificial. Pesagem precisa, rápida e sem estresse para o seu rebanho.",
    contactPhone: "(64) 99222-2564",
    contactPhoneClean: "5564992222564" // Apenas números para links
  },
  links: {
    // Link direto para download do APK
    download: "https://download1529.mediafire.com/6b6ym5j7rarg18wscONuidebP371dbfhat_fR7usVQHuT00bSy8rHY5Ix4ebGAtjKX_4kNbMlxDtvtfluMERf559advcTeaj9q4cPDVmJ6E-3Wapdg5fxWx-_5FXcJuGmrt-9shU6y7ssWXrk4MXzCaqip9u3F_K2OK8H7ITXwX5VWYk/2ua7xqksibmw6j6/Agro+Vision.apk",
  },
  whatsapp_messages: {
    general: "Olá, gostaria de saber mais sobre o AgroVision.",
    specialist: "Olá, gostaria de falar com um especialista sobre o AgroVision.",
    monthly_plan: "Olá, gostaria de assinar o plano mensal do AgroVision",
    annual_plan: "Olá, gostaria de assinar o plano anual do AgroVision",
    activation: "Olá, já baixei o app AgroVision e preciso fazer a ativação e calibragem.",
    download_maintenance: "Olá, tentei baixar o app AgroVision, mas o link está em manutenção. Gostaria de receber o link de download direto.",
  },
  pricing: {
    monthly: {
      price: "9,90",
      period: "/mês",
      features: ["Pesagens ilimitadas", "Controle de rebanho", "Suporte via WhatsApp"]
    },
    annual: {
      price: "55,90",
      period: "/ano",
      discount_text: "Economize mais de 50%",
      features: ["Todas as funcionalidades", "Prioridade no suporte", "Atualizações antecipadas"]
    }
  },
  images: {
    // Caminhos das imagens na pasta public
    hero_bg: "/images/cattle-ranch.jpg",
    app_screen_1: "/images/app-cattle.jpg",
    app_screen_2: "/images/cattle-monitoring.jpg",
    feature_main: "/images/ai-agriculture.jpg",
    cattle_tech: "/images/cattle-tech.jpg"
  }
};

// Função auxiliar para gerar link do WhatsApp
export const getWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${config.app.contactPhoneClean}?text=${encodedMessage}`;
};
