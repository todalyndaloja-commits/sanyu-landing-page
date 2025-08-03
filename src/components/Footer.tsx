import { MessageCircle, Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-sanyu-blue mb-4">
              Sanyu
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Especialista em dropshipping da China para o Brasil. 
              Conectamos lojistas com produtos de qualidade, oferecendo 
              transparência, agilidade e suporte completo.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sanyu-blue flex-shrink-0" />
                <div>
                  <div className="font-semibold">Brasil</div>
                  <div className="text-sm text-white/70">Rua Líbero Badaró, 501, Sala 601</div>
                  <div className="text-sm text-white/70">Centro Histórico, São Paulo - SP</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sanyu-blue flex-shrink-0" />
                <div>
                  <div className="font-semibold">China</div>
                  <div className="text-sm text-white/70">411 Jianguo Building</div>
                  <div className="text-sm text-white/70">Aiguo Road, Luohu District</div>
                  <div className="text-sm text-white/70">Shenzhen City, Guangdong Province, 311100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511919532904" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-sm">WhatsApp</div>
                  <div className="text-xs text-white/60">+55 11 91953-2904</div>
                </div>
              </a>
              
              <a 
                href="mailto:sanyudropshipping@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 text-sanyu-blue" />
                <div>
                  <div className="text-sm">E-mail</div>
                  <div className="text-xs text-white/60">sanyudropshipping@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+5511919532904"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 text-sanyu-blue" />
                <div>
                  <div className="text-sm">Telefone</div>
                  <div className="text-xs text-white/60">+55 11 91953-2904</div>
                </div>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-white/80 hover:text-white transition-colors text-sm">
                Início
              </a>
              <a href="#sobre" className="block text-white/80 hover:text-white transition-colors text-sm">
                Sobre a Sanyu
              </a>
              <a href="#como-funciona" className="block text-white/80 hover:text-white transition-colors text-sm">
                Como Funciona
              </a>
              <a href="#diferenciais" className="block text-white/80 hover:text-white transition-colors text-sm">
                Diferenciais
              </a>
              <a href="#depoimentos" className="block text-white/80 hover:text-white transition-colors text-sm">
                Depoimentos
              </a>
              <a href="#faq" className="block text-white/80 hover:text-white transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © {currentYear} Sanyu. Todos os direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/sanyudropbr/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram @sanyudropbr"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61551984146005" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5511919532904" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex gap-4 text-xs text-white/60">
              <a href="#" className="hover:text-white/80 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;