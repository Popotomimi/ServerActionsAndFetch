"use server";

import { db } from "./db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  redirect("/");
}

// 2 - Inserção dos dados
export async function addTodo(formData) {
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = "pendente";

  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });

  redirect("/");
}
