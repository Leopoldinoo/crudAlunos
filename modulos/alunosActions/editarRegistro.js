"use server";
import { prisma } from "../../lib/prisma";

export async function atualizarRegistro(id, data) {
  try {
    const alunoId = Number(id);
    console.log("\x1b[32m[atualizarRegistro]\x1b[0m ID:", ` Atualizando aluno com ID ${alunoId}... `);

    const alunoAtualizado = await prisma.aluno.update({
      where: {
        id: alunoId,
      },
      data,
    });
    console.log("\x1b[32m[atualizarRegistro]\x1b[0m", ` Aluno atualizado com sucesso!`);
    return {
      success: true,
      message: "Aluno atualizado com sucesso",
      registro: alunoAtualizado,
    };
  } catch (error) {
    console.log(error);
    console.log("\x1b[31m[atualizarRegistro]\x1b[0m", ` Erro ao atualizar aluno id: ${id}`);
    return {
      success: false,
      error: "Não foi possível atualizar o aluno",
    };
  }
}