import { motion } from "motion/react";
import { Calendar, Layers, Target, CreditCard, IdCard, FileText, Shield, Smartphone } from "lucide-react";
import { Badge } from "../ui/badge";
import logoImage from "figma:asset/0327e22cb3e4da0699b1491f71356e7b63f70cd3.png";

export function Hero() {
  const documentCards = [
    { icon: IdCard, label: "RG", color: "bg-emerald-500", delay: 0.2 },
    { icon: CreditCard, label: "CPF", color: "bg-blue-500", delay: 0.3 },
    { icon: FileText, label: "CNH", color: "bg-purple-500", delay: 0.4 },
    { icon: Shield, label: "Título", color: "bg-orange-500", delay: 0.5 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      {/* Floating document cards - background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-32 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[15%] w-28 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[5%] w-24 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-blue-500/30 text-white border-blue-400/30 text-sm px-4 py-1">
              UX/UI Design • Case Study
            </Badge>

            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              e-Docs
            </h1>
            
            <p className="text-2xl lg:text-3xl text-blue-100 mb-6 font-medium">
              Seus documentos pessoais,<br />
              sempre à mão
            </p>

            <p className="text-lg text-blue-100/90 mb-10 leading-relaxed max-w-xl">
              Aplicativo de carteira digital que centraliza todos os seus documentos 
              pessoais em um só lugar. Seguro, prático e funciona offline.
            </p>

            {/* Document type badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              {documentCards.map((doc, index) => (
                <motion.div
                  key={doc.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: doc.delay }}
                  className={`${doc.color} rounded-full px-4 py-2 flex items-center gap-2 shadow-lg`}
                >
                  <doc.icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{doc.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Project info cards */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <Calendar className="w-6 h-6 mb-2 text-blue-200" />
                <h3 className="font-semibold text-sm mb-1">Prazo</h3>
                <p className="text-blue-100 text-xs">2 semanas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <Target className="w-6 h-6 mb-2 text-blue-200" />
                <h3 className="font-semibold text-sm mb-1">Contexto</h3>
                <p className="text-blue-100 text-xs">Conceitual</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <Layers className="w-6 h-6 mb-2 text-blue-200" />
                <h3 className="font-semibold text-sm mb-1">Categoria</h3>
                <p className="text-blue-100 text-xs">Mobile App</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Main Phone Mockup */}
            <div className="relative">
              {/* Phone device */}
              <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-10"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 p-6 pt-10">
                  {/* App Header */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                          src={logoImage}
                          alt="e-Docs"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-gray-900 font-bold text-sm">e-Docs</div>
                        <div className="text-gray-500 text-xs">4 documentos</div>
                      </div>
                    </div>
                  </div>

                  {/* Document Cards */}
                  <div className="space-y-3">
                    {/* RG Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 shadow-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <IdCard className="w-4 h-4 text-white" />
                        <span className="text-white text-xs font-semibold">RG</span>
                      </div>
                      <div className="text-white/80 text-[10px]">Identidade</div>
                    </motion.div>

                    {/* CPF Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 shadow-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="w-4 h-4 text-white" />
                        <span className="text-white text-xs font-semibold">CPF</span>
                      </div>
                      <div className="text-white/80 text-[10px]">Cadastro de Pessoa Física</div>
                    </motion.div>

                    {/* CNH Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 shadow-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-white" />
                        <span className="text-white text-xs font-semibold">CNH</span>
                      </div>
                      <div className="text-white/80 text-[10px]">Carteira de Motorista</div>
                    </motion.div>

                    {/* Título Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-3 shadow-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-white" />
                        <span className="text-white text-xs font-semibold">Título</span>
                      </div>
                      <div className="text-white/80 text-[10px]">Título de Eleitor</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating icon - Smartphone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-12 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Smartphone className="w-8 h-8 text-blue-600" />
              </motion.div>

              {/* Floating icon - Shield */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-20 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Shield className="w-7 h-7 text-emerald-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}