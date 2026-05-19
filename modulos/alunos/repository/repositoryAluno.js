"use server";
import { prisma } from "@/lib/prisma";

export async function get_AllAlunos() {
  const result = await prisma.aluno.findMany({
    orderBy: { nome: "asc" },
  });
  return result;
}

export async function post_Aluno(data) {
  const { nome, email, matricula, curso, nascimento } = data;
  const result = await prisma.aluno.create({
    data: {
      nome,
      email,
      matricula,
      curso,
      nascimento,
    },
  });
  return result;
}

export async function del_Aluno(id) {
  const result = await prisma.aluno.delete({
    where: { id },
  });
  return result;
}


export async function findAlunoById(id) {
  const aluno = await prisma.aluno.findUnique({
    where: { id },
  });
  return aluno;
}

export async function updateAluno(id, data) {
  console.log("Atualizando aluno com ID:", id, 'com dados:', data);

  const Aluno_atualizado = await prisma.aluno.update({
    where: { id },
    data,
  });

  console.log("Aluno atualizado:", Aluno_atualizado);
  return Aluno_atualizado;

}