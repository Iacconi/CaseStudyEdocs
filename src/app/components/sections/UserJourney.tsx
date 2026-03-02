import { motion } from "motion/react";
import { Frown, Meh, Smile, TrendingDown, TrendingUp } from "lucide-react";

export function UserJourney() {
  const journeySteps = [
    {
      phase: "Preparação",
      action: "Organizar documentos antes de sair",
      emotion: "meh",
      pain: "Precisa lembrar de pegar todos os documentos físicos",
      opportunity: "App centralizado que elimina essa preocupação",
    },
    {
      phase: "Emergência",
      action: "Filho passa mal, corre para hospital",
      emotion: "sad",
      pain: "Esqueceu documentos em casa, ansiedade e estresse",
      opportunity: "Documentos sempre disponíveis no celular",
    },
    {
      phase: "Tentativa de Solução",
      action: "Tenta usar apps governamentais",
      emotion: "sad",
      pain: "Múltiplos apps, não pode cadastrar dependentes",
      opportunity: "Plataforma única com perfis múltiplos",
    },
    {
      phase: "Descoberta",
      action: "Encontra o e-Docs",
      emotion: "happy",
      pain: "Tempo para configurar e aprender",
      opportunity: "Onboarding simples e intuitivo",
    },
    {
      phase: "Uso Regular",
      action: "Acessa documentos quando precisa",
      emotion: "happy",
      pain: "Nenhum — funciona offline e tem todos os docs",
      opportunity: "Compartilhar experiência com outros pais",
    },
  ];

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case "sad":
        return <Frown className="w-6 h-6 text-red-600" />;
      case "meh":
        return <Meh className="w-6 h-6 text-yellow-600" />;
      case "happy":
        return <Smile className="w-6 h-6 text-green-600" />;
      default:
        return <Meh className="w-6 h-6 text-gray-600" />;
    }
  };

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "sad":
        return "bg-red-100 border-red-300";
      case "meh":
        return "bg-yellow-100 border-yellow-300";
      case "happy":
        return "bg-green-100 border-green-300";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Jornada do Usuário
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Mapeamento da jornada antes e depois da solução, identificando pontos de dor, 
            emoções e oportunidades de melhoria.
          </p>

          {/* Emotion Chart */}
          <div className="bg-white rounded-xl p-8 mb-12 shadow-md">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Nível de Satisfação ao Longo da Jornada
              </h3>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-red-600" />
                  <span className="text-gray-600">Frustração</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">Satisfação</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              {/* Emotion Line */}
              <div className="flex items-end justify-between h-40 mb-4 relative">
                {journeySteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-end flex-1 relative"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${getEmotionColor(
                        step.emotion
                      )} relative z-10`}
                      style={{
                        marginBottom:
                          step.emotion === "happy"
                            ? "80px"
                            : step.emotion === "meh"
                            ? "40px"
                            : "0px",
                      }}
                    >
                      {getEmotionIcon(step.emotion)}
                    </motion.div>
                  </div>
                ))}
                {/* Connecting Line - dentro do card */}
                <div className="absolute left-0 right-0 h-0.5 bg-gray-300 top-1/2 -translate-y-1/2 mx-8" />
              </div>

              {/* Phase Labels */}
              <div className="flex justify-between">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex-1 text-center px-2">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {step.phase}
                    </p>
                    <p className="text-xs text-gray-600">{step.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Details */}
          <div className="space-y-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border-l-4"
                style={{
                  borderLeftColor:
                    step.emotion === "happy"
                      ? "#10b981"
                      : step.emotion === "meh"
                      ? "#f59e0b"
                      : "#ef4444",
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-4xl font-bold text-gray-200">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-lg">{step.phase}</span>
                      </h4>
                      <p className="text-gray-600">{step.action}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                        <span className="text-red-600">•</span>
                        Ponto de Dor
                      </h4>
                      <p className="text-gray-600">{step.pain}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <span className="text-blue-600">💡</span>
                        Oportunidade
                      </h4>
                      <p className="text-gray-600">{step.opportunity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}