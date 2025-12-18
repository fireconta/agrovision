import Layout from "@/components/Layout";
import { config, getWhatsAppLink } from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Download, Smartphone, TrendingUp, Weight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={config.images.hero_bg} 
            alt="Fazenda de gado" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Tecnologia Revolucionária
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-foreground">
              Pesagem de Gado com <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Inteligência Artificial</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Cansado de pesagens demoradas e imprecisas? A {config.app.name} traz a revolução para a pecuária brasileira. 
              Resultados rápidos, precisos e sem estresse para o animal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={getWhatsAppLink(config.whatsapp_messages.specialist)} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  Falar com Especialista <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/download">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-2xl border-2 hover:bg-muted/50 transition-all">
                  Baixar Aplicativo <Download className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" /> 97% de Precisão
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" /> Sem Estresse
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" /> 30 Dias Grátis
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Abstract Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block pointer-events-none">
          <div className="relative w-full h-full">
            <img 
              src={config.images.app_screen_1} 
              alt="App Interface" 
              className="absolute top-10 right-20 w-64 rounded-3xl shadow-2xl border-4 border-white/20 rotate-[-6deg] animate-in zoom-in duration-1000 delay-300"
            />
            <img 
              src={config.images.app_screen_2} 
              alt="Monitoring" 
              className="absolute bottom-20 right-40 w-72 rounded-3xl shadow-2xl border-4 border-white/20 rotate-[3deg] animate-in zoom-in duration-1000 delay-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Tecnologia que aumenta seus resultados</h2>
            <p className="text-lg text-muted-foreground">
              Nosso aplicativo utiliza visão computacional avançada para entregar dados precisos sobre seu rebanho em tempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Weight className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Pesagem Sem Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adeus ao estresse do gado no curral. Nossa IA calcula o peso através de imagens com 97% de precisão comparado à balança convencional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4 text-secondary-foreground">
                  <Smartphone className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Controle na Palma da Mão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Além da pesagem, tenha uma planilha completa para controle individual de cada animal (bovinos, ovinos e suínos) diretamente no seu celular.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 text-accent-foreground">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Mais Produtividade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitore o ganho de peso, identifique problemas precocemente e tome decisões baseadas em dados para maximizar o lucro da sua fazenda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={config.images.feature_main} 
                  alt="IA na Agricultura" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-2xl mb-2">Monitoramento Inteligente</p>
                    <p className="opacity-90">Tecnologia de ponta para o campo</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold mb-6">Como funciona a {config.app.name}?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Capture a Imagem</h3>
                    <p className="text-muted-foreground">Aponte a câmera do seu celular para o animal. Nosso app guia você para o ângulo perfeito.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Processamento via IA</h3>
                    <p className="text-muted-foreground">Nossos algoritmos analisam a geometria do animal em segundos, sem necessidade de internet no momento.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Resultado Imediato</h3>
                    <p className="text-muted-foreground">Receba o peso estimado com alta precisão e salve automaticamente no histórico do animal.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/download">
                  <Button size="lg" className="rounded-xl px-8 h-12">
                    Começar Teste Gratuito
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Planos Acessíveis</h2>
            <p className="text-lg text-muted-foreground">
              Comece com 30 dias totalmente gratuitos. Sem compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">Mensal</CardTitle>
                <CardDescription>Flexibilidade para seu negócio</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6">
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-muted-foreground text-xl">R$</span>
                  <span className="text-5xl font-bold text-foreground">{config.pricing.monthly.price}</span>
                  <span className="text-muted-foreground">{config.pricing.monthly.period}</span>
                </div>
                <ul className="space-y-3 text-left max-w-xs mx-auto mb-8">
                  {config.pricing.monthly.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> {feature}</li>
                  ))}
                </ul>
                <a href={getWhatsAppLink(config.whatsapp_messages.monthly_plan)} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-xl h-12" variant="outline">Assinar Mensal</Button>
                </a>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="border-2 border-primary shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MAIS POPULAR
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">Anual</CardTitle>
                <CardDescription>Maior economia para você</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6">
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-muted-foreground text-xl">R$</span>
                  <span className="text-5xl font-bold text-primary">{config.pricing.annual.price}</span>
                  <span className="text-muted-foreground">{config.pricing.annual.period}</span>
                </div>
                <p className="text-sm text-green-600 font-medium mb-6 bg-green-100 inline-block px-3 py-1 rounded-full">
                  {config.pricing.annual.discount_text}
                </p>
                <ul className="space-y-3 text-left max-w-xs mx-auto mb-8">
                  {config.pricing.annual.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> {feature}</li>
                  ))}
                </ul>
                <a href={getWhatsAppLink(config.whatsapp_messages.annual_plan)} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-xl h-12 shadow-lg shadow-primary/20">Assinar Anual</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Pronto para revolucionar sua fazenda?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Baixe agora e tenha 30 dias gratuitos para testar a tecnologia que está mudando a pecuária brasileira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download">
              <Button size="lg" variant="secondary" className="text-lg h-14 px-8 rounded-2xl shadow-xl">
                Baixar App Agora
              </Button>
            </Link>
            <a href={getWhatsAppLink(config.whatsapp_messages.general)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-2xl bg-transparent border-white text-white hover:bg-white/10">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
