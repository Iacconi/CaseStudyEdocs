import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "figma:asset/0327e22cb3e4da0699b1491f71356e7b63f70cd3.png";

const sections = [
  { id: "hero", label: "Capa" },
  { id: "challenge", label: "Desafio" },
  { id: "objective", label: "Objetivo" },
  { id: "audience", label: "Público" },
  { id: "persona", label: "Persona" },
  { id: "journey", label: "Jornada" },
  { id: "quantitative", label: "Pesquisa Quantitativa" },
  { id: "qualitative", label: "Pesquisa Qualitativa" },
  { id: "ideation", label: "Ideação" },
  { id: "solution", label: "Solução" },
  { id: "wireframes", label: "Wireframes" },
  { id: "styleguide", label: "Guia de Estilos" },
  { id: "tests", label: "Testes" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={logoImage}
                alt="e-Docs"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">e-Docs</h1>
              <p className="text-xs text-gray-500">Case Study</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {sections.slice(0, 7).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Mais...
              </button>
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 min-w-[200px]">
                {sections.slice(7).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" />
    </>
  );
}