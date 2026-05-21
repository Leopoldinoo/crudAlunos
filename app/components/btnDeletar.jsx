"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deletarRegistro } from "@/modulos/alunosActions/deletarRegistro";
import Swal from "sweetalert2";
export default function DeleteButton({ id }) {
  const router = useRouter();
  async function handleDelete() {
    const result = await Swal.fire({
      title: "Você quer deletar?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sim",
      denyButtonText: "Não",
    }).then((result) => {
      if (result.isConfirmed) Swal.fire("Deletado!", "", "success");
      else if (result.isDenied) Swal.fire("Não deletado", "", "info");
    });
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
