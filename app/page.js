export const dynamic = "force-dynamic";

import { get_Alunos } from "@/modulos/alunos/controller/controllerAluno";
import AlunoForm from "./components/alunoForm";
import DeleteButton from "./components/btnDeletar";
import { Toaster } from "sonner";
import Modal from "./components/BaseModal";
import FrmEditar from "./components/FrmEditar";

export default async function AlunosPage() {
  const alunos = await get_Alunos();
  console.log(alunos);
  console.log("Renderizando a página de alunos...");
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10 w-full">
      <Toaster position="top-right" richColors />

      <header className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 w-full">
          CRUD de Alunos
        </h1>
      </header>

      <section>
        <AlunoForm />
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md text-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Alunos cadastrados</h2>

          <span className="text-xl text-gray-100 font-bold bg-black px-2 py-1 rounded">
            Total: {alunos.length}
          </span>
        </div>

        {alunos.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Nenhum aluno cadastrado ainda.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="py-2">Nome</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Curso</th>
                  <th className="py-2 text-center">Ações</th>
                </tr>
              </thead>

              <tbody>
                {alunos.map((aluno) => (
                  <tr
                    key={aluno.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3">{aluno.nome}</td>
                    <td className="py-3">{aluno.email}</td>
                    <td className="py-3">{aluno.curso}</td>

                    <td className="py-3">
                      <div className="flex justify-center gap-2">
                        <Modal titulo="Editar Aluno" textoBotao="Editar" children={<FrmEditar id={aluno} />} />
                        <DeleteButton id={aluno.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
