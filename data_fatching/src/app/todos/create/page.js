import { addTodo } from "@/actions";

// 1 - Criação do formulário
const TodoPage = () => {
  // formData => useState

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Criação de Todo</h1>
      <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <label
          htmlFor="titulo"
          className="block text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          id="titulo"
          name="titulo"
          className="mt-1 px-4 border border-gray-300 rounded-md w-full"
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
          type="text"
          placeholder="Descreva a tarefa"
          required></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50">
          Criar Todo
        </button>
      </form>
    </div>
  );
};

export default TodoPage;
