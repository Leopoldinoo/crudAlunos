"use server";

import {
  del_Aluno,
  findAlunoById,
  get_AllAlunos,
  post_Aluno,
  updateAluno,
} from "../repository/repositoryAluno";

export async function pegar_AllAlunos() {
  const result = await get_AllAlunos();
  return result;
}

export async function gravarAluno(nome, email, matricula, curso, nascimento) {
  console.log("Gravando aluno:", { nome, email, matricula, curso, nascimento });
  if (!nome || !email || !matricula || !curso || !nascimento) {
    throw new Error("Todos os campos são obrigatórios");
  }

  return await post_Aluno({ nome, email, matricula, curso, nascimento });
}

export async function apaga_Aluno(id) {
  return await del_Aluno(Number(id));
}


export async function updateAlunoService(id, data) {
  const existe = await findAlunoById(Number(id));

  if (!existe) {
    throw new Error("Aluno não encontrado");
  } else {
    console.log('Aluno encontrado para atualização:', existe);
  }
  const alunoAtualizado = await updateAluno(Number(id), data);
  return alunoAtualizado;
}