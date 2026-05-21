"use server";
import { prisma } from "../../lib/prisma";
/**
 * Buscar todos os alunos
 *
 * - Retorna uma lista com todos os alunos do banco
 * - Ordena em ordem alfabética pelo nome
 * - Usado normalmente para listagem em tabelas
 */
export async function Get_All_Registros() {

  console.log("\x1b[36m%s\x1b[0m", ` Server Action pegando todos os registros ... ${new Date().toLocaleString()}`);

  const todosRegistros = await prisma.aluno.findMany({
    orderBy: {
      nome: "asc",
    },
  });
  return todosRegistros;
}