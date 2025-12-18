import Layout from "@/components/Layout";
import { config, getWhatsAppLink } from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Download as DownloadIcon, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Download() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    // Não iniciar o download, apenas exibir a mensagem de manutenção
    // setDownloadStarted(true);
    // window.location.href = config.links.download;
  };

  // Auto-redirect logic could be added here if requested, but manual click is safer for UX
  useEffect(() => {
    // Optional: Analytics for page view
  }, []);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 bg-muted/20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Download {config.app.name}</h1>
            <p className="text-xl text-muted-foreground">
              Siga os passos abaixo para instalar e ativar seu aplicativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Download Card */}
            <Card className="border-none shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 text-destructive">
                  <AlertCircle className="h-10 w-10" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-destructive">Download em Manutenção</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  O link de download está temporariamente em manutenção. Para baixar o app, entre em contato com nossa equipe.
                </p>
                
                <a 
                  href={getWhatsAppLink(config.whatsapp_messages.download_maintenance)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg rounded-xl shadow-lg shadow-destructive/20 mb-4 bg-destructive hover:bg-destructive/90"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" /> Falar com a Equipe
                  </Button>
                </a>
                
                <p className="text-xs text-muted-foreground">
                  Você será redirecionado para o WhatsApp com uma mensagem pronta.
                </p>
              </CardContent>
            </Card>

            {/* Instructions */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Baixe e Instale</h3>
                  <p className="text-muted-foreground">
                    Clique no botão de download. Se seu celular pedir permissão para instalar apps de fontes desconhecidas, permita para continuar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entre em Contato</h3>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-destructive">IMPORTANTE:</span> Após instalar, o app precisa ser ativado e calibrado para sua região.
                  </p>
                  <a 
                    href={getWhatsAppLink(config.whatsapp_messages.activation)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3"
                  >
                    <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                      <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comece a Usar</h3>
                  <p className="text-muted-foreground">
                    Após a ativação pela nossa equipe, você terá 30 dias de acesso total gratuito.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-yellow-800 mb-1">Por que preciso ativar?</h4>
              <p className="text-yellow-700 text-sm">
                A tecnologia de pesagem por imagem requer uma calibragem inicial baseada no tipo de gado e luminosidade da sua região para garantir os 97% de precisão. Nossa equipe faz isso remotamente em poucos minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
