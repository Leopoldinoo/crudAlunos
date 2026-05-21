"use server";

import { prisma } from "../../lib/prisma"
/**
 * Criar novo aluno
 *
 * - Recebe um objeto com os dados do aluno
 * - Ex: { nome, email, matricula, curso, sexo, turno }
 * - Retorna o aluno criado
 */
export async function GravarRegistro(formData) {
  const nome = formData.get("nome")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const matricula = formData.get("matricula")?.toString().trim();
  const curso = formData.get("curso")?.toString().trim();
  const sexo = formData.get("sexo")?.toString().trim();
  const turno = formData.get("turno")?.toString().trim();
  const dataMatricula = formData.get("dataMatricula")?.toString().trim();

  const dados = {
    nome,
    email,
    matricula,
    curso,
    sexo,
    turno,
    dataMatricula,
  };

  console.log("\x1b[36m%s\x1b[0m", ` Server Action gravando registro ... ${new Date().toLocaleString()}`);

  return await prisma.aluno.create({
    data: dados,
  })
}