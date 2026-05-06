"use client";

import { cadastrar_Aluno } from "@/modulos/alunos/controller/controllerAluno";
import { useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Btncadastrar from "./BtnCadastrar";

export default function AlunoForm() {
  const router = useRouter();
  const formRef = useRef(null);
  async function handleAction(formData) {
    const res = await cadastrar_Aluno(formData);

    if (res.success) {
      toast.success(res.message);
      formRef.current.reset();
    } else {
      toast.error(res.error);
    }

    router.refresh();
  }

  return (
    <form
      ref={formRef}
      action={handleAction}
      className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800"
    >
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold">Cadastro de Aluno</h2>
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

      <div className="flex gap-2 items-center justify-start w-full">
        <label htmlFor="nascimento" className="text-sm font-medium w-50">
          Data de nascimento:
        </label>
        <input
          id="nascimento"
          name="nascimento"
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"
          required
        />
      </div>

      <div className="md:col-span-2 flex justify-end">
        <Btncadastrar />
      </div>
    </form>
  );
}
