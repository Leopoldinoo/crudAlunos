import {
  createAluno,
  deleteAluno,
  findAllAlunos,
  findAlunoByEmail,
  findAlunoById,
  findAlunoByMatricula,
} from '../repository/alunoRepository';

export async function getAllAlunos() {
  return await findAllAlunos();
}

export async function createNovoAluno(
  nome,
  email,
  matricula,
  curso,
  nascimento
) {
  if (!nome || !email || !matricula || !curso || !nascimento) {
    throw new Error('Todos os campos são obrigatórios');
  }

  const emailExistente = await findAlunoByEmail(email);

  if (emailExistente) {
    throw new Error('Já existe um aluno cadastrado com este email');
  }

  const matriculaExistente = await findAlunoByMatricula(matricula);

  if (matriculaExistente) {
    throw new Error('Já existe um aluno com esta matrícula');
  }

  return await createAluno({
    nome,
    email,
    matricula,
    curso,
    nascimento,
  });
}

export async function deleteAlunoService(id) {
  const existe = await findAlunoById(id);

  if (!existe) {
    throw new Error('Aluno não encontrado para deletar');
  }

  return await deleteAluno(Number(id));
}