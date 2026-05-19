"use client";
import { updateAlunoAction } from "@/modulos/alunos/controller/controllerAluno";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function FrmEditar({ aluno }) {
  const router = useRouter();
  // Função responsável por editar o aluno
  async function handleEditar(formData) {
    try {
      const res = await updateAlunoAction(aluno.id, formData);

      if (res.success) {
        router.refresh();
        toast.success(res.message);
      } else {
        toast.error(res.error);
      }
    } catch (error) {
      console.log("Erro ao editar aluno:", error);
    }
  }
}

return (
  <>
    <form action={handleEditar} className="space-y-3">
      <div>
        <label className="text-sm text-gray-600">Nome</label>
        <input
          type="text"
          name="nome"
          defaultValue={aluno.nome}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="text-sm text-gray-600">Curso</label>
        <input
          type="text"
          name="curso"
          defaultValue={aluno.curso}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <button
          button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Salvar Alterações
        </button>
      </div>
    </form>
  </>
);
