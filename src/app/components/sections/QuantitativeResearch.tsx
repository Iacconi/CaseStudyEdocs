import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp } from "lucide-react";

export function QuantitativeResearch() {
  const lostDocumentsData = [
    { name: "Sim", value: 75, color: "#ef4444" },
    { name: "Não", value: 25, color: "#10b981" },
  ];

  const documentsCarriedData = [
    { name: "RG", value: 92 },
    { name: "CPF", value: 88 },
    { name: "CNH", value: 65 },
    { name: "Título", value: 45 },
    { name: "Cart. SUS", value: 38 },
    { name: "Cart. Estudante", value: 28 },
  ];

  const digitalAdoptionData = [
    { name: "Usam versão digital", value: 18, color: "#3b82f6" },
    { name: "Só versão física", value: 82, color: "#94a3b8" },
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
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Pesquisa Quantitativa
            </h2>
          </div>
          
          <div className="w-20 h-1 bg-indigo-600 mb-8"></div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Dados coletados com 200 participantes, validando hipóteses sobre comportamento 
            de uso de documentos físicos e digitais.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Lost Documents Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Já perderam ou tiveram documentos furtados?
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={lostDocumentsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {lostDocumentsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-900">
                  <span className="font-bold text-2xl">75%</span> dos participantes já 
                  sofreram com perda ou roubo de documentos
                </p>
              </div>
            </motion.div>

            {/* Digital Adoption Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Adesão a Documentos Digitais
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={digitalAdoptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {digitalAdoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-900">
                  Apenas <span className="font-bold text-2xl">18%</span> utilizam 
                  versões digitais regularmente
                </p>
              </div>
            </motion.div>
          </div>

          {/* Documents Carried */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Documentos Mais Portados no Dia a Dia
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={documentsCarriedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {documentsCarriedData.map((doc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    <span className="font-semibold">{doc.name}</span> — {doc.value}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Alta Demanda</h4>
              <p className="text-gray-600 text-sm">
                A maioria dos usuários carrega múltiplos documentos diariamente, 
                mostrando necessidade de centralização
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl mb-3">⚠️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Risco Elevado</h4>
              <p className="text-gray-600 text-sm">
                3 em cada 4 pessoas já perderam documentos, validando a dor principal 
                do projeto
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="font-semibold text-gray-900 mb-2">Oportunidade</h4>
              <p className="text-gray-600 text-sm">
                Baixa adesão digital indica espaço para crescimento e educação do mercado
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
