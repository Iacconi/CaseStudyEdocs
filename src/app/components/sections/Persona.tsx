import { motion } from "motion/react";
import { User, Briefcase, Heart, MapPin, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import neideImage from "figma:asset/2f3214317546d4299d3271f829ab0282480cc0ad.png";

export function Persona() {
  const story = [
    {
      emoji: "🏃‍♀️",
      title: "Era uma vez...",
      text: "Neide, empresária e mãe de dois filhos, que vivia uma rotina corrida entre trabalho, escola e compromissos familiares.",
    },
    {
      emoji: "🏥",
      title: "Todos os dias...",
      text: "Ela precisava se deslocar rapidamente, sempre com documentos na bolsa — dela e dos filhos — para qualquer emergência.",
    },
    {
      emoji: "😰",
      title: "Até que um dia...",
      text: "Seu filho mais novo passou mal na escola. Neide correu para o hospital, mas ao chegar, percebeu que havia esquecido a carteirinha do plano de saúde em casa.",
    },
    {
      emoji: "📱",
      title: "Por causa disso...",
      text: "Tentou usar os aplicativos governamentais (e-Título, CNH Digital), mas cada documento estava em um app diferente. Nenhum permitia cadastrar os dados dos filhos.",
    },
    {
      emoji: "💡",
      title: "Por causa disso...",
      text: "Neide pensou: 'preciso de uma solução que centralize TODOS os documentos — meus e da minha família — em um só lugar'.",
    },
    {
      emoji: "✨",
      title: "Até que finalmente...",
      text: "Descobriu o e-Docs: um aplicativo que unifica todos os documentos, funciona offline e permite cadastrar dependentes. Agora, Neide tem tudo sempre à mão.",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Persona — Storytelling Pixar
            </h2>
          </div>
          
          <div className="w-20 h-1 bg-pink-600 mb-12"></div>

          {/* Persona Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200 sticky top-24">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
                  <ImageWithFallback
                    src={neideImage}
                    alt="Neide"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Neide Silva
                </h3>
                <p className="text-center text-gray-600 mb-6">37 anos</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Profissão</p>
                      <p className="text-gray-600">Empresária</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Família</p>
                      <p className="text-gray-600">Mãe de dois filhos (8 e 12 anos)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Localização</p>
                      <p className="text-gray-600">São Paulo, SP</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-pink-200">
                  <p className="text-sm text-gray-600 italic">
                    "Preciso de praticidade. Minha rotina é corrida e não tenho tempo 
                    para ficar abrindo vários apps diferentes."
                  </p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="w-8 h-8 text-pink-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    A Jornada de Neide
                  </h3>
                </div>

                <div className="space-y-6">
                  {story.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md border border-pink-100">
                          {step.emoji}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">😤</span>
                    Frustrações
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Múltiplos apps para documentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Não pode cadastrar dependentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Risco de esquecer documentos físicos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Objetivos
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Centralizar todos os documentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Ter acesso rápido quando precisar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Gerenciar docs da família</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}