"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function GraficoPizza({ alunos = [] }) {
  const totalAlunos = alunos.length;

  const labels = ["Alunos Cadastrados"];
  const valores = [totalAlunos];
  const cores = ["#2563eb"];

  const dados = {
    labels,
    datasets: [
      {
        label: "Quantidade de Alunos",
        data: valores,
        backgroundColor: cores,
      },
    ],
  };

  const opcoes = {
    responsive: true,
    cutout: "0%",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Distribuição de Alunos por Categoria",
      },
    },
  };

  return <Pie data={dados} options={opcoes} />;
}
