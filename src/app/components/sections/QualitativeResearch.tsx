import { motion } from "motion/react";
import { MessageSquare, Lightbulb, AlertCircle, Quote } from "lucide-react";

export function QualitativeResearch() {
  const concerns = [
    {
      icon: "📡",
      title: "Medo de Falta de Internet",
      description: "E se meu pacote de dados acabar quando eu precisar apresentar o documento?",
      impact: "high",
    },
    {
      icon: "🔋",
      title: "Celular Descarregar",
      description: "E se a bateria acabar no momento que mais preciso?",
      impact: "high",
    },
    {
      icon: "🚫",
      title: "Desconfiança na Aceitação",
      description: "Será que todos os lugares aceitam a versão digital?",
      impact: "medium",
    },
    {
      icon: "🔒",
      title: "Segurança de Dados",
      description: "Meus documentos estão realmente seguros no aplicativo?",
      impact: "high",
    },
    {
      icon: "❓",
      title: "Validade Legal",
      description: "O documento digital tem o mesmo valor que o físico?",
      impact: "medium",
    },
  ];

  const opportunities = [
    {
      title: "Funcionamento Offline",
      description: "Garantir acesso total aos documentos sem necessidade de internet",
      color: "blue",
    },
    {
      title: "Política Clara de Privacidade",
      description: "Transparência sobre coleta, uso e armazenamento de dados",
      color: "purple",
    },
    {
      title: "Educação do Usuário",
      description: "Onboarding que explique validade legal e segurança",
      color: "green",
    },
    {
      title: "Segurança Reforçada",
      description: "Criptografia, biometria e autenticação em múltiplas camadas",
      color: "orange",
    },
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
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Pesquisa Qualitativa
            </h2>
          </div>
          
          <div className="w-20 h-1 bg-purple-600 mb-8"></div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Entrevistas em profundidade revelaram medos, dúvidas e resistências em relação 
            ao uso de documentos digitais, orientando decisões de design.
          </p>

          {/* User Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 lg:p-12 text-white mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-purple-400 opacity-20">
              <Quote className="w-40 h-40" />
            </div>
            <div className="relative">
              <Quote className="w-10 h-10 mb-4 text-purple-300" />
              <blockquote className="text-2xl lg:text-3xl font-medium mb-6 leading-relaxed">
                "...se o aplicativo depender da internet e meu pacote de internet ter acabado? 
                E se meu celular descarregar?"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Andressa</p>
                  <p className="text-purple-200 text-sm">Participante da pesquisa</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Concerns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Principais Preocupações Identificadas
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concerns.map((concern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 border-2 ${
                    concern.impact === "high"
                      ? "border-red-200 hover:border-red-400"
                      : "border-orange-200 hover:border-orange-400"
                  } transition-colors`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{concern.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {concern.title}
                        </h4>
                        {concern.impact === "high" && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                            Alta
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm italic">
                        "{concern.description}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Oportunidades de Design
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opportunity, index) => {
                const colorClasses = {
                  blue: "from-blue-50 to-blue-100 border-blue-300",
                  purple: "from-purple-50 to-purple-100 border-purple-300",
                  green: "from-green-50 to-green-100 border-green-300",
                  orange: "from-orange-50 to-orange-100 border-orange-300",
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${
                      colorClasses[opportunity.color as keyof typeof colorClasses]
                    } rounded-xl p-6 border-2`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">💡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {opportunity.title}
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {opportunity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Principais Aprendizados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Confiança é crítica:</strong> usuários precisam sentir segurança 
                  antes de adotar completamente a solução digital
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Autonomia importa:</strong> funcionar offline é um requisito, 
                  não uma funcionalidade extra
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Educação é necessária:</strong> muitos desconhecem a validade 
                  legal dos documentos digitais
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Transparência gera valor:</strong> política de privacidade 
                  clara e acessível reduz resistências
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
