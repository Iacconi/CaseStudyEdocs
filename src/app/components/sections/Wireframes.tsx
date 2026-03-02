import { motion } from "motion/react";
import { Layout } from "lucide-react";

export function Wireframes() {
  const wireframes = [
    { id: 1, label: "HOME", delay: 0.5 },
    { id: 2, label: "QR SCAN", delay: 0.6 },
    { id: 3, label: "DOCUMENT", delay: 0.7 }
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
            <motion.div 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Layout className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Wireframes e MVP
            </motion.h2>
          </div>
          
          <motion.div 
            className="w-20 h-1 bg-gray-800 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>

          <div className="max-w-4xl space-y-6 text-gray-700 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Após a etapa do rabiscoframe, na qual refleti qual seria a estrutura do app e do primeiro teste de usabilidade, 
              foi observado o que era preciso ser melhorado para atender as necessidades dos usuários. Com isso, foi o momento 
              de criar o wireframe do app.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Com o "esqueleto" das telas, foi criado o MVP com mais agilidade, sem dedicar tanto tempo em refinamentos visuais. 
              Pesquisas indicam que os wireframes ajudam a evitar a aversão à perda; o que pode ocasionar um apego ao que foi 
              desenvolvido até então — ignorando as reais necessidades dos usuários.
            </motion.p>
          </div>

          {/* Wireframe Examples */}
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 border border-gray-200 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Telas Principais (Wireframes)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Home Screen */}
              <motion.div 
                className="bg-white rounded-lg p-4 border-2 border-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-xs text-gray-500 mb-3 font-mono">HOME</div>
                <div className="space-y-2">
                  <div className="h-12 bg-gray-200 rounded flex items-center px-3">
                    <div className="w-8 h-8 bg-gray-400 rounded mr-2"></div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-400 rounded w-1/2 mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded w-1/3"></div>
                    </div>
                  </div>
                  <div className="h-4"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                </div>
              </motion.div>

              {/* QR Scan Screen */}
              <motion.div 
                className="bg-white rounded-lg p-4 border-2 border-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-xs text-gray-500 mb-3 font-mono">QR SCAN</div>
                <div className="space-y-2">
                  <div className="h-48 bg-gray-800 rounded flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-white rounded"></div>
                  </div>
                  <div className="h-4"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              </motion.div>

              {/* Document Detail Screen */}
              <motion.div 
                className="bg-white rounded-lg p-4 border-2 border-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-xs text-gray-500 mb-3 font-mono">DOCUMENT</div>
                <div className="space-y-2">
                  <div className="h-32 bg-gray-200 rounded"></div>
                  <div className="h-4"></div>
                  <div className="h-3 bg-gray-400 rounded w-1/3"></div>
                  <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4"></div>
                  <div className="h-10 bg-blue-200 rounded"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}