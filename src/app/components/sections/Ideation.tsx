import { motion } from "motion/react";
import { Sparkles, Zap, TrendingUp } from "lucide-react";
import crazy8Image from "figma:asset/b89581c787d09cff763a672bff0fd5d9aae75f9c.png";

export function Ideation() {
  const priorityItems = {
    highImpactLowEffort: [
      { name: "Modo Offline", delay: 0.5 },
      { name: "Cadastro QR Code", delay: 0.6 },
      { name: "Visualização de Docs", delay: 0.7 }
    ],
    highImpactHighEffort: [
      { name: "Integração Gov.br", delay: 0.5 },
      { name: "Backup na Nuvem", delay: 0.6 }
    ],
    lowImpactLowEffort: [
      { name: "Dark Mode", delay: 0.5 },
      { name: "Customização", delay: 0.6 }
    ],
    lowImpactHighEffort: [
      { name: "Gamificação", delay: 0.5 },
      { name: "Rede Social", delay: 0.6 }
    ]
  };

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
            <motion.div 
              className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ideação
            </motion.h2>
          </div>
          
          <motion.div 
            className="w-20 h-1 bg-yellow-500 mb-8"
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
            Processo criativo estruturado para gerar múltiplas soluções rapidamente, 
            priorizando ideias com base em impacto e viabilidade.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Crazy 8's */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Crazy 8's</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Técnica de brainstorming onde cada participante esboça 8 ideias diferentes 
                em 8 minutos — 1 minuto por ideia — forçando rapidez e criatividade.
              </p>
              <div className="bg-white rounded-lg p-6">
                <motion.img 
                  src={crazy8Image} 
                  alt="Crazy 8's sketches" 
                  className="w-full h-auto rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Resultado:</strong> 32 ideias geradas em uma sessão com 4 designers
                </p>
              </div>
            </motion.div>

            {/* Prototyping Flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fluxo de Prototipagem
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Rabiscoframes", desc: "Esboços rápidos à mão para validar layout e hierarquia visual", delay: 0.3 },
                  { title: "Protótipo em Papel", desc: "Versões físicas das telas principais para teste de usabilidade inicial", delay: 0.4 },
                  { title: "Teste com Marvel", desc: "Digitalização dos protótipos para testes clicáveis e interativos", delay: 0.5 },
                  { title: "Iteração", desc: "Ajustes baseados em feedback antes de partir para wireframes digitais", delay: 0.6 }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.delay }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Prioritization Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="w-6 h-6 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">
                Matriz de Priorização
              </h3>
            </div>
            <p className="text-gray-700 mb-8">
              Classificação de funcionalidades com base em <strong>impacto para o usuário</strong> vs. <strong>esforço de desenvolvimento</strong>
            </p>

            <div className="bg-white rounded-xl p-4 lg:p-8 border border-gray-300 overflow-hidden">
              {/* Axis Labels */}
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs font-bold text-gray-600">Alto Impacto</div>
                <div className="text-xs text-gray-500">Baixo Esforço → Alto Esforço</div>
              </div>

              {/* Grid Matrix */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-2">
                {/* High Impact, Low Effort - GREEN */}
                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-400 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🎯</span>
                    <h4 className="font-bold text-green-900 text-sm">
                      PRIORIDADE MÁXIMA
                    </h4>
                  </div>
                  <div className="space-y-1.5">
                    {priorityItems.highImpactLowEffort.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-md p-2 shadow-sm border border-green-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        <p className="font-semibold text-xs text-gray-900">{item.name}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[10px] text-green-700 mt-2 font-medium italic">Alto impacto + Baixo esforço</p>
                </motion.div>

                {/* High Impact, High Effort - YELLOW */}
                <motion.div 
                  className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 border-2 border-yellow-400 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚡</span>
                    <h4 className="font-bold text-yellow-900 text-sm">
                      FAZER DEPOIS
                    </h4>
                  </div>
                  <div className="space-y-1.5">
                    {priorityItems.highImpactHighEffort.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-md p-2 shadow-sm border border-yellow-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        <p className="font-semibold text-xs text-gray-900">{item.name}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[10px] text-yellow-700 mt-2 font-medium italic">Alto impacto + Alto esforço</p>
                </motion.div>

                {/* Low Impact, Low Effort - BLUE */}
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-400 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💡</span>
                    <h4 className="font-bold text-blue-900 text-sm">
                      WINS RÁPIDOS
                    </h4>
                  </div>
                  <div className="space-y-1.5">
                    {priorityItems.lowImpactLowEffort.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-md p-2 shadow-sm border border-blue-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        <p className="font-semibold text-xs text-gray-900">{item.name}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[10px] text-blue-700 mt-2 font-medium italic">Baixo impacto + Baixo esforço</p>
                </motion.div>

                {/* Low Impact, High Effort - GRAY */}
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border-2 border-gray-400 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">❌</span>
                    <h4 className="font-bold text-gray-900 text-sm">
                      NÃO FAZER AGORA
                    </h4>
                  </div>
                  <div className="space-y-1.5">
                    {priorityItems.lowImpactHighEffort.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-md p-2 shadow-sm border border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        <p className="font-semibold text-xs text-gray-900">{item.name}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-700 mt-2 font-medium italic">Baixo impacto + Alto esforço</p>
                </motion.div>
              </div>

              {/* Bottom Label */}
              <div className="text-center mt-2">
                <div className="text-xs font-bold text-gray-600">Baixo Impacto</div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-5 border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                <span className="text-base">📊</span>
                Como Interpretar a Matriz
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-sm">🎯</span>
                  <p className="text-gray-700">
                    <strong className="text-green-700">Prioridade Máxima:</strong> Implementar primeiro - máximo valor com mínimo esforço
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm">⚡</span>
                  <p className="text-gray-700">
                    <strong className="text-yellow-700">Fazer Depois:</strong> Planejar para sprints futuras - alto valor mas requer mais recursos
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm">💡</span>
                  <p className="text-gray-700">
                    <strong className="text-blue-700">Wins Rápidos:</strong> Pequenas melhorias que podem ser feitas quando houver tempo
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm">❌</span>
                  <p className="text-gray-700">
                    <strong className="text-gray-700">Não Fazer Agora:</strong> Evitar - baixo retorno sobre investimento
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}