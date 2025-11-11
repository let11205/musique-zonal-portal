import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Music } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre a Escola" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const scrollToForm = () => {
    const element = document.getElementById('agendamento');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Musique Zona Sul" className="h-10 w-10" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold gradient-text">Musique Zona Sul</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="pulse-gold" onClick={scrollToForm}>
              <Music className="w-4 h-4 mr-2" />
              Agendar Aula
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/" className="flex items-center space-x-3 mb-6">
                  <img src={logo} alt="Musique Zona Sul" className="h-8 w-8" />
                  <h2 className="text-lg font-bold gradient-text">Musique Zona Sul</h2>
                </Link>
                
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <Button className="mt-4 pulse-gold" onClick={scrollToForm}>
                  <Music className="w-4 h-4 mr-2" />
                  Agendar Aula
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;