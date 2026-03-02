import { motion } from "motion/react";
import { ExternalLink, Smartphone } from "lucide-react";

export function PrototypeLink() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Teste o Protótipo
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Explore a experiência completa do e-Docs interagindo com o protótipo navegável 
            no Figma. Veja todas as funcionalidades em ação!
          </p>

          <motion.a
            href="https://www.figma.com/proto/kxacQ8O4HTPwMwDMpoYou1/e-Docs?page-id=0%3A1&node-id=209-3753&viewport=827%2C79%2C0.24&t=m4Qa5aMG9tjMsbAo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=209%3A3753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Abrir Protótipo Interativo</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>

          <p className="text-sm text-blue-200 mt-6">
            Abre em uma nova aba • Navegue pelas telas e funcionalidades
          </p>
        </motion.div>
      </div>
    </div>
  );
}
