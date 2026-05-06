"use server";

import {
  apaga_Aluno,
  gravarAluno,
  pegar_AllAlunos,
} from "../services/servicesAluno";

export async function get_Alunos() {
  console.log("Buscando alunos...");
  return await pegar_AllAlunos();
}

export async function cadastrar_Aluno(formData) {
  const nome = formData.get("nome")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const matricula = formData.get("matricula")?.toString().trim();
  const curso = formData.get("curso")?.toString().trim();
  const nascimento = formData.get("nascimento")?.toString();
  console.log(formData);
  console.log("controller");
  try {
    await gravarAluno(nome, email, matricula, curso, nascimento);

    return { success: true, message: "Aluno cadastrado com sucesso" };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function deletar_Aluno(id) {
  try {
    await apaga_Aluno(id);
    return { success: true, message: "Aluno deletado com sucesso" };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
