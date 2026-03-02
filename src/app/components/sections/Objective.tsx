import { motion } from "motion/react";
import { Target, Smartphone, WifiOff, Users, Zap, Rocket } from "lucide-react";

export function Objective() {
  const objectives = [
    {
      icon: Smartphone,
      title: "Centralização Total",
      description: "Unificar todos os documentos pessoais em um único aplicativo",
      color: "blue",
    },
    {
      icon: WifiOff,
      title: "Modo Offline",
      description: "Funcionar sem conexão com a internet",
      color: "green",
    },
    {
      icon: Users,
      title: "Múltiplos Perfis",
      description: "Cadastrar documentos de dependentes e familiares",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Simplicidade",
      description: "Interface intuitiva e acessível para todos os públicos",
      color: "yellow",
    },
    {
      icon: Rocket,
      title: "Desenvolvimento Ágil",
      description: "MVP desenvolvido em apenas 2 semanas",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    yellow: "bg-yellow-100 text-yellow-600",
    orange: "bg-orange-100 text-orange-600",
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
              className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Objetivo do Projeto
            </motion.h2>
          </div>
          
          <motion.div 
            className="w-20 h-1 bg-blue-600 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>

          <motion.p 
            className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Desenvolver uma plataforma mobile inteligente que centralize documentos pessoais, 
            ofereça segurança, praticidade e funcione de forma autônoma, sem depender de 
            conectividade constante.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
              >
                <motion.div
                  className={`w-14 h-14 ${
                    colorClasses[objective.color as keyof typeof colorClasses]
                  } rounded-lg flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <objective.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {objective.title}
                </h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white flex flex-col justify-center shadow-lg cursor-pointer"
            >
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                MVP em 2 semanas
              </motion.h3>
              <motion.p 
                className="text-blue-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Foco em entregar valor rapidamente, validando hipóteses e iterando com base em 
                feedback real dos usuários.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}