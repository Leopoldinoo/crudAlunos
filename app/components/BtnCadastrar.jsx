"use client";

import { useFormStatus } from "react-dom";

export default function Btncadastrar() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
    >
      {pending ? "Salvando..." : "Cadastrar Aluno"}
    </button>
  );
}
