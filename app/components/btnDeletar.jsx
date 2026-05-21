"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deletarRegistro } from "@/modulos/alunosActions/deletarRegistro";
export default function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await deletarRegistro(id);

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
