import Link from "next/link"
import { Smartphone, Instagram, MapPin, Clock, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">
                CH <span className="text-primary">SMARTPHONES</span>
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Celulares 100% originais, seminovos, com garantia de 90 dias e preço justo.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-background/70 hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link href="/estoque" className="text-background/70 hover:text-primary transition-colors text-sm">
                Estoque
              </Link>
              <Link href="/sobre" className="text-background/70 hover:text-primary transition-colors text-sm">
                Sobre
              </Link>
              <Link href="/contato" className="text-background/70 hover:text-primary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5579996482391"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 (79) 99648-2391
              </a>
              <a
                href="https://instagram.com/ch_smartphones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @ch_smartphones
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Endereco</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Rua São Cristóvão, 461, Loja 15<br />
                  Edifício Futuro - Centro<br />
                  Aracaju - SE, 49010-904
                </span>
              </div>
              <div className="flex items-start gap-2 text-background/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Seg-Sex: 09h - 18h<br />
                  Sabado: 09h - 15h
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} CH SMARTPHONES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
