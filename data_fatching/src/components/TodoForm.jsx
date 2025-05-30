"use client";

import updateTodo from "@/actions";
import { useFormState } from "react-dom";

const TodoForm = ({ todo }) => {
  const [formState, action] = useFormState(updateTodo, { errors: "" });

  return (
    <form
      action={action}
      className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
      {formState.errors && (
        <div className="my-4 p-2 border rounded-md border-red-600 bg-red-400">
          {formState.errors}
        </div>
      )}
      <input type="hidden" name="id" value={todo.id} />
      <label
        htmlFor="titulo"
        className="block text-sm font-medium text-gray-700">
        Título
      </label>
      <input
        id="titulo"
        name="titulo"
        className="mt-1 px-4 border border-gray-300 rounded-md w-full"
        defaultValue={todo.titulo}
        type="text"
        placeholder="Insira o título"
        required
      />
      <label
        htmlFor="descricao"
        className="block text-sm font-medium text-gray-700">
        Descrição
      </label>
      <textarea
        id="descricao"
        name="descricao"
        className="mt-1 px-4 py-4 border border-gray-300 rounded-md w-full h-32"
        defaultValue={todo.descricao}
        type="text"
        placeholder="Descreva a tarefa"
        required></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50">
        Editar
      </button>
    </form>
  );
};

export default TodoForm;
