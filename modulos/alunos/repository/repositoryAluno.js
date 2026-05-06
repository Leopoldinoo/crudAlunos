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
