"use client";
import { GravarRegistro } from "@/modulos/alunosActions/gravarRegistro";
import { useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Btncadastrar from "./BtnCadastrar";

export default function AlunoForm({ onClose, onSaved }) {
  const router = useRouter();
  const formRef = useRef(null);

  async function handleAction(formData) {
    try {
      const res = await GravarRegistro(formData);

      if (res.success) {
        toast.success(res.message || "Aluno cadastrado com sucesso!", {
          duration: 3000,
          style: {
            background: "#16a34a",
            color: "#ffffff",
            border: "1px solid #15803d",
          },
        });

        formRef.current?.reset();

        setTimeout(() => {
          router.refresh();
        }, 500);
      }
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
      toast.error("Erro ao cadastrar aluno");
    }
  }

  return (
    <form
      ref={formRef}
      action={handleAction}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800"
    >
      <div className="md:col-span-2">
        <p className="text-sm text-gray-500">
          Preencha os dados abaixo para cadastrar um novo aluno.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="nome" className="text-sm font-medium">
          Nome completo
        </label>

        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Ex: João da Silva"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="dataMatricula" className="text-sm font-medium">
          Data da Matrícula
        </label>

        <input
          id="dataMatricula"
          name="dataMatricula"
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="matricula" className="text-sm font-medium">
          Matrícula
        </label>

        <input
          id="matricula"
          name="matricula"
          type="text"
          placeholder="Ex: 20240001"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="curso" className="text-sm font-medium">
          Curso
        </label>

        <select
          id="curso"
          name="curso"
          placeholder="Ex: Análise e Desenvolvimento de Sistemas"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecione</option>
          <option value="ads">Análise e Desenvolvimento de Sistemas</option>
          <option value="bd">Banco de Dados</option>
          <option value="redes">Redes de Computadores</option>
          <option value="ti">Técnico em Informática</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label htmlFor="sexo" className="text-sm font-medium">
          Sexo
        </label>

        <select
          id="sexo"
          name="sexo"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label htmlFor="turno" className="text-sm font-medium">
          Turno
        </label>

        <select
          id="turno"
          name="turno"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecione</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </div>

      <div className="md:col-span-2 flex justify-end">
        <Btncadastrar />
      </div>
    </form>
  );
}
