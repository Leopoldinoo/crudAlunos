"use client";

import { deletar_Aluno } from "@/modulos/alunos/controller/controllerAluno";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await deletar_Aluno(id);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.error);
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm"
    >
      Deletar
    </button>
  );
}
