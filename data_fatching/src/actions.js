"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  revalidatePath("/");

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

  revalidatePath("/");

  redirect("/");
}

export async function findTodoById(id) {
  // throw new Error("Ops!");

  const todo = db.todo.findFirst({
    where: { id },
  });

  return todo;
}

export default async function updateTodo(formState, formData) {
  const id = Number(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  if (titulo.length < 5) {
    return {
      errors: "O Título deve ter pelo menos 5 caracteres.",
    };
  } else if (descricao.length < 10) {
    return {
      errors: "A Descrção deve ter pelo menos 10 caracteres.",
    };
  }

  await db.todo.update({
    where: { id },
    data: {
      titulo,
      descricao,
    },
  });

  revalidatePath("/");

  redirect("/");
}

export async function toggleTodoStatus(formData) {
  const todoId = Number(formData.get("id"));

  const todo = await db.todo.findFirst({
    where: { id: todoId },
  });

  if (!todo) {
    throw new Error("Todo not found!");
  }

  const newStatus = todo.status === "pendente" ? "completa" : "pendente";

  await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      status: newStatus,
    },
  });

  revalidatePath("/");

  redirect("/");
}
