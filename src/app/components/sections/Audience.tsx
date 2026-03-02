import { motion } from "motion/react";
import { Users, Smartphone, Clock, Shield } from "lucide-react";

export function Audience() {
  const demographics = [
    { emoji: "👥", title: "Faixa Etária", value: "18 a 45 anos", delay: 0.3 },
    { emoji: "🌍", title: "Gênero", value: "Homens e mulheres", delay: 0.4 },
    { emoji: "📍", title: "Localização", value: "Regiões urbanas do Brasil", delay: 0.5 }
  ];

  const behaviors = [
    {
      icon: Smartphone,
      title: "Usuários de Smartphone",
      description: "Possuem smartphone e o utilizam diariamente para resolver questões pessoais e profissionais",
      color: "blue",
      delay: 0.6
    },
    {
      icon: Clock,
      title: "Rotina Agitada",
      description: "Trabalho, família, estudos — precisam de soluções rápidas e que economizem tempo",
      color: "green",
      delay: 0.7
    },
    {
      icon: Zap,
      title: "Buscam Praticidade",
      description: "Valorizam aplicativos simples, intuitivos e que resolvam problemas reais do cotidiano",
      color: "purple",
      delay: 0.8
    },
    {
      icon: Shield,
      title: "Expostos a Riscos",
      description: "Podem sofrer com perda ou roubo de documentos físicos, gerando transtornos e custos",
      color: "red",
      delay: 0.9
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
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Público-Alvo
            </motion.h2>
          </div>
          
          <motion.div 
            className="w-20 h-1 bg-purple-600 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-md mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Perfil Demográfico
                </h3>
                <div className="space-y-4">
                  {demographics.map((demo, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: demo.delay }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-2xl">{demo.emoji}</span>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{demo.title}</h4>
                        <p className="text-gray-600">{demo.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 text-white shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Por que este público?
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  Este grupo representa a maior parcela de usuários de smartphones no Brasil, 
                  são digitalmente ativos, têm rotina agitada e valorizam soluções que 
                  tragam praticidade e segurança ao seu dia a dia.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Características Comportamentais
              </motion.h3>
              
              <div className="space-y-4">
                {behaviors.map((behavior, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: behavior.delay }}
                    whileHover={{ x: -5, scale: 1.02 }}
                    className={`bg-white rounded-xl p-6 shadow-md border-l-4 border-l-${behavior.color}-500 cursor-pointer`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <behavior.icon className={`w-6 h-6 text-${behavior.color}-600 flex-shrink-0 mt-1`} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {behavior.title}
                        </h4>
                        <p className="text-gray-600">
                          {behavior.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}