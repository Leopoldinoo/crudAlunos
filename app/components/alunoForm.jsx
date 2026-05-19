"use client";

import { cadastrar_Aluno } from "@/modulos/alunos/controller/controllerAluno";
import { useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Btncadastrar from "./BtnCadastrar";

export default function AlunoForm({ onClose }) {
  const router = useRouter();
  const formRef = useRef(null);

  async function handleAction(formData) {
    try {
      const res = await cadastrar_Aluno(formData);

      if (res.success) {
        toast.success(res.message);

        formRef.current?.reset();

        // Fecha o modal
        onClose?.();

        // Atualiza a tabela
        router.refresh();
      } else {
        toast.error(res.error);
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

        <input
          id="curso"
          name="curso"
          type="text"
          placeholder="Ex: Análise e Desenvolvimento de Sistemas"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label htmlFor="nascimento" className="text-sm font-medium">
          Data de nascimento
        </label>

        <input
          id="nascimento"
          name="nascimento"
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="md:col-span-2 flex justify-end">
        <Btncadastrar />
      </div>
    </form>
  );
}
