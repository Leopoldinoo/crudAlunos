"use client";
// Passo 1: importar o componente Bar do react-chartjs-2
import { Bar } from "react-chartjs-2";
// Passo 2: importar as partes do Chart.js que vamos usar
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Passo 3: registrar as partes (ativar)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
// Passo 4: criar o componente
export default function GraficoBarras({ alunos = [] }) {
  const totalAlunos = alunos.length;
  const labels = ["Alunos Cadastrados"];
  const valores = [totalAlunos];
  const cores = ["#0D0B61"];
  const dados = {
    labels: labels,
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
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Relatório de Alunos 2026" },
    },
  };
  return <Bar data={dados} options={opcoes} />;
}
