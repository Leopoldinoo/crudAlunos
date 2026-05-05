"use server";

import {
  createNovoAluno,
  deleteAlunoService,
  getAllAlunos,
} from "../services/alunoService";

export async function getAlunosAction() {
  const dados = await getAllAlunos();

  return dados;
}

export async function createAlunoAction(formData) {
  const nome = formData.get("nome")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const matricula = formData.get("matricula")?.toString().trim();
  const curso = formData.get("curso")?.toString().trim();
  const nascimento = formData.get("nascimento")?.toString();
  console.log({ nome, email, matricula, curso, nascimento });
}

export async function deleteAlunoAction(id) {
  try {
    await deleteAlunoService(id);
    return { success: true, message: "Aluno deletado com sucesso" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
