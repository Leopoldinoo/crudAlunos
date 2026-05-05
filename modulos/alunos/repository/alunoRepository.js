import { prisma } from '@/lib/prisma';

export async function findAllAlunos() {
  return await prisma.aluno.findMany({
    orderBy: { nome: 'asc' },
  });
}

export async function createAluno(data) {
  return await prisma.aluno.create({
    data,
  });
}

export async function deleteAluno(id) {
  return await prisma.aluno.delete({
    where: { id },
  });
}

export async function findAlunoByEmail(email) {
  return await prisma.aluno.findUnique({
    where: { email },
  });
}

export async function findAlunoById(id) {
  return await prisma.aluno.findUnique({
    where: { id: Number(id) },
  });
}

export async function findAlunoByMatricula(matricula) {
  return await prisma.aluno.findUnique({
    where: { matricula },
  });
}