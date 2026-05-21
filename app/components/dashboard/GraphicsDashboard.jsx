"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import GraficoBarras from "./GraficoBarras";
import GraficoPizza from "./GraficoPizza";

export default function GraphicsDashboard({ alunos = [] }) {
  const [aberto, setAberto] = useState(true);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md text-gray-800 relative">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className="absolute top-5 right-5 p-2 rounded-lg hover:bg-gray-100 transition"
        title={aberto ? "Recolher dashboard" : "Abrir dashboard"}
      >
        {aberto ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      <h2 className="text-2xl font-semibold mb-6">Dashboard de Gráficos</h2>

      {aberto && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-[280px] max-w-[500px] w-full mx-auto">
            <GraficoBarras alunos={alunos} />
          </div>

          <div className="h-[280px] max-w-[350px] w-full mx-auto">
            <GraficoPizza alunos={alunos} />
          </div>
        </div>
      )}
    </section>
  );
}
