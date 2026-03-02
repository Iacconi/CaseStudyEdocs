import { motion } from "motion/react";
import { TestTube, Users, Lightbulb } from "lucide-react";

export function UsabilityTests() {
  const testScenarios = [
    {
      scenario: "Cadastro de novo documento via QR Code",
      participants: "4 participantes",
      successRate: "100%",
      avgTime: "45 segundos",
      feedback: "Intuitivo e rápido",
    },
    {
      scenario: "Localizar documento específico",
      participants: "4 participantes",
      successRate: "100%",
      avgTime: "12 segundos",
      feedback: "Organização clara",
    },
    {
      scenario: "Adicionar documento de dependente",
      participants: "4 participantes",
      successRate: "75%",
      avgTime: "1min 20s",
      feedback: "Requer melhor sinalização visual",
    },
    {
      scenario: "Apresentar documento offline",
      participants: "2 participantes (teste offline)",
      successRate: "100%",
      avgTime: "8 segundos",
      feedback: "Funcionou perfeitamente sem internet",
    },
  ];

  const learnings = [
    {
      title: "Focar no Problema Central",
      description:
        "Usuários valorizam a centralização e o modo offline acima de features adicionais. Manter o foco no core value.",
      priority: "high",
    },
    {
      title: "Diversificar Participantes",
      description:
        "Próximas rodadas devem incluir usuários mais velhos e com menor familiaridade digital para validar acessibilidade.",
      priority: "medium",
    },
    {
      title: "Iterar em Alta Fidelidade",
      description:
        "Alguns feedbacks visuais (cores, ícones) só podem ser validados com protótipo de alta fidelidade.",
      priority: "medium",
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
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <TestTube className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Testes de Usabilidade
            </h2>
          </div>

          <div className="w-20 h-1 bg-green-600 mb-8"></div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Validação do protótipo com usuários reais, identificando pontos de fricção e 
            oportunidades de melhoria antes do desenvolvimento final.
          </p>

          {/* Test Setup */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4 Participantes
              </h3>
              <p className="text-gray-700 text-sm">
                Perfil alinhado com a persona: adultos entre 25-42 anos, usuários ativos 
                de smartphone
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cenários Mistos
              </h3>
              <p className="text-gray-700 text-sm">
                2 testes com internet ativa + 2 testes em modo offline para validar 
                funcionalidade crítica
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tarefas Práticas
              </h3>
              <p className="text-gray-700 text-sm">
                Cadastrar documento, localizar informação, adicionar dependente e 
                apresentar documento
              </p>
            </div>
          </div>

          {/* Test Results */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Resultados dos Testes
            </h3>

            <div className="space-y-4">
              {testScenarios.map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {test.scenario}
                      </h4>
                      <p className="text-sm text-gray-600">{test.participants}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Taxa de Sucesso</p>
                      <p
                        className={`text-2xl font-bold ${
                          test.successRate === "100%"
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        {test.successRate}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Tempo Médio</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {test.avgTime}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Feedback</p>
                      <p className="text-sm font-medium text-gray-900">
                        {test.feedback}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Principais Aprendizados
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {learnings.map((learning, index) => {
                const priorityColors = {
                  high: "from-red-50 to-orange-50 border-red-300",
                  medium: "from-yellow-50 to-amber-50 border-yellow-300",
                  low: "from-blue-50 to-indigo-50 border-blue-300",
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${
                      priorityColors[learning.priority as keyof typeof priorityColors]
                    } rounded-xl p-6 border-2`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💡</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          learning.priority === "high"
                            ? "bg-red-200 text-red-800"
                            : learning.priority === "medium"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-blue-200 text-blue-800"
                        }`}
                      >
                        {learning.priority === "high"
                          ? "Alta Prioridade"
                          : learning.priority === "medium"
                          ? "Média Prioridade"
                          : "Baixa Prioridade"}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {learning.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{learning.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
