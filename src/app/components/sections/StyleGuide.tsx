import { motion } from "motion/react";
import { Palette, Type, Component } from "lucide-react";

export function StyleGuide() {
  const colors = {
    primary: [
      { name: "Blue 50", hex: "#eff6ff", usage: "Backgrounds" },
      { name: "Blue 100", hex: "#dbeafe", usage: "Hover states" },
      { name: "Blue 600", hex: "#2563eb", usage: "Primary actions" },
      { name: "Blue 700", hex: "#1d4ed8", usage: "Active states" },
      { name: "Blue 900", hex: "#1e3a8a", usage: "Dark accents" },
    ],
    neutral: [
      { name: "Gray 50", hex: "#f9fafb", usage: "Backgrounds" },
      { name: "Gray 100", hex: "#f3f4f6", usage: "Cards" },
      { name: "Gray 600", hex: "#4b5563", usage: "Secondary text" },
      { name: "Gray 900", hex: "#111827", usage: "Headings" },
    ],
  };

  const typographySizes = [
    { name: "H1", size: "48px", weight: "700", example: "Título Principal" },
    { name: "H2", size: "36px", weight: "700", example: "Seção" },
    { name: "H3", size: "24px", weight: "600", example: "Subsection" },
    { name: "Body", size: "16px", weight: "400", example: "Texto de corpo" },
    { name: "Small", size: "14px", weight: "400", example: "Texto auxiliar" },
    { name: "Caption", size: "12px", weight: "400", example: "Legendas" },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Palette className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Guia de Estilos
            </motion.h2>
          </div>

          <motion.div
            className="w-20 h-1 bg-pink-600 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>

          <motion.p
            className="text-xl text-gray-700 mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Sistema de design escalável e consistente, priorizando acessibilidade,
            legibilidade e experiência coesa em todas as plataformas.
          </motion.p>

          {/* Logo and Branding */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md mb-12 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Identidade Visual
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Nome</h4>
                <motion.div
                  className="bg-gray-50 rounded-lg p-6 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-5xl font-bold text-blue-600">e-Docs</p>
                  <p className="text-gray-600 mt-2">Documentos Eletrônicos</p>
                </motion.div>

                <h4 className="font-semibold text-gray-900 mb-4">Logo</h4>
                <div className="flex items-center gap-6">
                  <motion.div
                    className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer"
                    initial={{ opacity: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white text-4xl font-bold">e</span>
                  </motion.div>
                  <motion.div
                    className="w-24 h-24 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer"
                    initial={{ opacity: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-blue-600 text-4xl font-bold">e</span>
                  </motion.div>
                  <motion.div
                    className="w-24 h-24 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer"
                    initial={{ opacity: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white text-4xl font-bold">e</span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="font-semibold text-gray-900 mb-4">Conceito do Logo</h4>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-gray-700 mb-4">
                    A letra <strong>"e"</strong> representa tanto "eletrônico" quanto a ideia
                    de centralização e acessibilidade. O design minimalista reflete simplicidade
                    e modernidade.
                  </p>
                  <p className="text-gray-700">
                    A forma arredondada transmite segurança e acolhimento, valores essenciais
                    para um aplicativo que lida com documentos pessoais.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <strong>Azul:</strong> Confiança, segurança e acessibilidade
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <strong>Forma arredondada:</strong> Amigável e acessível
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Color Palette */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-pink-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Paleta de Cores
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Cores Primárias</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {colors.primary.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div
                        className="h-24 rounded-lg shadow-md border border-gray-200"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="font-semibold text-sm text-gray-900">{color.name}</p>
                      <p className="text-xs text-gray-600 font-mono">{color.hex}</p>
                      <p className="text-xs text-gray-500">{color.usage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Cores Neutras</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {colors.neutral.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div
                        className="h-24 rounded-lg shadow-md border border-gray-200"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="font-semibold text-sm text-gray-900">{color.name}</p>
                      <p className="text-xs text-gray-600 font-mono">{color.hex}</p>
                      <p className="text-xs text-gray-500">{color.usage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Por que Azul como cor primária?
                </h4>
                <p className="text-gray-700 text-sm">
                  O azul é universalmente associado a <strong>confiança</strong>,
                  <strong> segurança</strong> e <strong>profissionalismo</strong>.
                  Além disso, possui excelente contraste para acessibilidade e é neutro
                  em termos culturais, funcionando bem para públicos diversos.
                </p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Type className="w-6 h-6 text-pink-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Tipografia
              </h3>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Família Tipográfica</h4>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">Roboto</p>
                <p className="text-gray-600">
                  Fonte sans-serif moderna, legível e otimizada para telas. Oferece
                  excelente legibilidade em diferentes tamanhos e pesos.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Escala Tipográfica</h4>
              <p className="text-sm text-gray-600 mb-4">
                Escala modular <strong>Major Third (4:5)</strong> — Base: 12px
              </p>
              <div className="space-y-4">
                {typographySizes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        {type.name} — {type.size} / {type.weight}
                      </p>
                      <p
                        className="text-gray-900"
                        style={{
                          fontSize: type.size,
                          fontWeight: type.weight,
                        }}
                      >
                        {type.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-xl">♿</span>
                Foco em Acessibilidade
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Contraste mínimo de 4.5:1 para textos normais (WCAG AA)</li>
                <li>• Tamanho mínimo de fonte: 14px para corpo de texto</li>
                <li>• Espaçamento adequado entre linhas (line-height: 1.5)</li>
                <li>• Suporte a ampliação até 200% sem quebra de layout</li>
              </ul>
            </div>
          </div>

          {/* Components */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Component className="w-6 h-6 text-pink-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Componentes
              </h3>
            </div>

            <p className="text-gray-700 mb-6">
              Sistema de componentes reutilizáveis, escaláveis e documentados para
              garantir consistência em toda a aplicação.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buttons */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Buttons</h4>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Primary Button
                  </button>
                  <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Secondary Button
                  </button>
                  <button className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                    Tertiary Button
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Cards</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <p className="font-semibold text-gray-900">Card Title</p>
                    <p className="text-sm text-gray-600">Card description text</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                    <p className="font-semibold text-gray-900">Elevated Card</p>
                    <p className="text-sm text-gray-600">More emphasis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Princípios dos Componentes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-purple-900 mb-1">Escaláveis</p>
                  <p>Adaptam-se a diferentes contextos e tamanhos de tela</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-900 mb-1">Documentados</p>
                  <p>Casos de uso e variações claramente definidos</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-900 mb-1">Reutilizáveis</p>
                  <p>Mantêm consistência visual em toda a aplicação</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}