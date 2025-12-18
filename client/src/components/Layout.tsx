import { config, getWhatsAppLink } from "@/config";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Funcionalidades", path: "/#features" },
    { name: "Planos", path: "/#pricing" },
    { name: "Download", path: "/download" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                {config.app.logoLetter}
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-foreground">
                {config.app.logoText}<span className="text-primary">{config.app.logoHighlight}</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href={getWhatsAppLink(config.whatsapp_messages.general)}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                Fale Conosco
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-lg font-medium p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href={getWhatsAppLink(config.whatsapp_messages.general)}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full rounded-xl py-6 text-lg shadow-lg">
                Fale Conosco
              </Button>
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-muted/50 border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {config.app.logoLetter}
                </div>
                <span className="font-heading font-bold text-xl">
                  {config.app.logoText}<span className="text-primary">{config.app.logoHighlight}</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-md">
                {config.app.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
                <li><a href="/#features" className="text-muted-foreground hover:text-primary transition-colors">Funcionalidades</a></li>
                <li><a href="/#pricing" className="text-muted-foreground hover:text-primary transition-colors">Planos</a></li>
                <li><a href="/download" className="text-muted-foreground hover:text-primary transition-colors">Baixar App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href={getWhatsAppLink(config.whatsapp_messages.general)} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    WhatsApp: {config.app.contactPhone}
                  </a>
                </li>
                <li className="text-muted-foreground">Suporte 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {config.app.name}. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Termos de Uso</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
