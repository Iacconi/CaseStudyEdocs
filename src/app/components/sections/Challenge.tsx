import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, Layers } from "lucide-react";
import { Card } from "../ui/card";

export function Challenge() {
  const stats = [
    {
      icon: AlertTriangle,
      color: "red",
      value: "38,6%",
      label: "das vítimas de roubo tiveram documentos subtraídos",
      source: "Fonte: SSP-SP, jan/2020",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      color: "orange",
      value: "130 mil",
      label: "novas vias de RG emitidas por ano",
      source: "Fonte: Dados de 2016",
      delay: 0.3
    },
    {
      icon: Layers,
      color: "blue",
      value: "Fragmentação",
      label: "e-Título, CNH Digital e Carteira de Trabalho Digital funcionam separadamente",
      source: "",
      delay: 0.4
    }
  ];

  const problems = [
    {
      emoji: "💰",
      title: "Alto Custo Governamental",
      description: "Emissão de segundas vias gera custos significativos para o poder público",
      color: "red",
      delay: 0.5
    },
    {
      emoji: "📱",
      title: "Baixa Praticidade",
      description: "Usuários precisam gerenciar múltiplos aplicativos diferentes",
      color: "orange",
      delay: 0.6
    },
    {
      emoji: "🔀",
      title: "Falta de Centralização",
      description: "Não existe uma solução única que unifique todos os documentos digitais",
      color: "blue",
      delay: 0.7
    }
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Desafio
          </h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>

          <motion.p 
            className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Criar um aplicativo de carteira digital que permita às pessoas terem sempre 
            seus documentos pessoais acessíveis de forma segura, reduzindo riscos de perda, 
            roubo e burocracias relacionadas à segunda via de documentos.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className={`p-8 border-l-4 border-l-${stat.color}-500 hover:shadow-xl transition-all h-full`}>
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className={`text-3xl font-bold text-${stat.color}-600 mb-2`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-gray-600">
                        {stat.label}
                      </p>
                      {stat.source && (
                        <p className="text-sm text-gray-500 mt-2">{stat.source}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-white rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Principais Problemas Identificados
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: problem.delay }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-${problem.color}-100 rounded-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl">{problem.emoji}</span>
                  </motion.div>
                  <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}