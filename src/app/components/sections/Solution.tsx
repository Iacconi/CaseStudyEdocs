import { motion } from "motion/react";
import { CheckCircle, WifiOff, QrCode, Users, Smartphone, Shield } from "lucide-react";
import mockupSplash from "figma:asset/339be7eba986fa4f1aa73db9e644a7cf47fdebb8.png";
import mockupHome from "figma:asset/7f407003f3fd0ec3388ebf9c7bdc1ae258bd5e7b.png";
import mockupRegister from "figma:asset/1bf0c1b4b46143a59132a0fad1df83be742cf671.png";

export function Solution() {
  const features = [
    {
      icon: WifiOff,
      title: "Funcionamento Offline",
      description: "Acesso total aos documentos sem necessidade de internet",
      color: "blue",
    },
    {
      icon: QrCode,
      title: "Cadastro por QR Code",
      description: "Leitura rápida de documentos através de QR Code ou entrada manual",
      color: "green",
    },
    {
      icon: Users,
      title: "Documentos de Dependentes",
      description: "Cadastre e gerencie documentos de toda a família",
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Interface Acessível",
      description: "Design simples, responsivo e sem gestos complexos",
      color: "orange",
    },
    {
      icon: Shield,
      title: "Segurança Reforçada",
      description: "Criptografia de ponta a ponta e autenticação biométrica",
      color: "red",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A Solução: e-Docs
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Uma plataforma mobile que centraliza todos os documentos pessoais em um único lugar, 
              com segurança, praticidade e funcionamento autônomo.
            </p>
          </div>

          {/* Hero Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 shadow-2xl">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {/* Phone Mockup 1 - Splash */}
                <div className="w-[270px] h-[600px] bg-black rounded-[2rem] shadow-2xl flex flex-col border-[12px] border-gray-900 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-2">
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white flex items-center justify-center rounded-[1rem] overflow-hidden">
                    <img 
                      src={mockupSplash} 
                      alt="e-Docs Splash Screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Phone Mockup 2 - Home */}
                <div className="w-[270px] h-[600px] bg-black rounded-[2rem] shadow-2xl flex flex-col border-[12px] border-gray-900 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-2">
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white flex items-center justify-center rounded-[1rem] overflow-hidden">
                    <img 
                      src={mockupHome} 
                      alt="e-Docs Home Screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Phone Mockup 3 - Register */}
                <div className="w-[270px] h-[600px] bg-black rounded-[2rem] shadow-2xl flex flex-col border-[12px] border-gray-900 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-2">
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white flex items-center justify-center rounded-[1rem] overflow-hidden">
                    <img 
                      src={mockupRegister} 
                      alt="e-Docs Register Screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600",
                red: "bg-red-100 text-red-600",
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 ${
                      colorClasses[feature.color as keyof typeof colorClasses]
                    } rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-2">+</h3>
              <h3 className="text-lg font-semibold mb-2">Muito mais</h3>
              <p className="text-blue-100 text-sm">
                Notificações de vencimento, compartilhamento seguro, e integração futura 
                com serviços governamentais
              </p>
            </motion.div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-semibold text-gray-900 mb-2">Simplicidade</h4>
              <p className="text-gray-600 text-sm">
                Interface intuitiva que qualquer pessoa pode usar
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600 text-sm">
                Seus dados protegidos com as melhores práticas
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-2">Praticidade</h4>
              <p className="text-gray-600 text-sm">
                Tudo que você precisa, sempre à mão
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}