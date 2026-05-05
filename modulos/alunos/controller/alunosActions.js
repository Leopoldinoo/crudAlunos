'use server';

import {
  createNovoAluno,
  deleteAlunoService,
  getAllAlunos,
} from '../services/alunoService';

export async function getAlunosAction() {
  const dados = await getAllAlunos();

  return dados;
}

export async function createAlunoAction(formData) {
  const nome = formData.get('nome')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const matricula = formData.get('matricula')?.toString().trim();
  const curso = formData.get('curso')?.toString().trim();
  const nascimento = formData.get('nascimento')?.toString();

  try {
    await createNovoAluno(nome, email, matricula, curso, nascimento);

    return {
      success: true,
      message: 'Aluno cadastrado com sucesso!',
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}

export async function deleteAlunoAction(id) {
  try {
    await deleteAlunoService(id);

    return {
      success: true,
      message: 'Aluno deletado com sucesso!',
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}