import { findTodoById } from "@/actions";

import TodoForm from "@/components/TodoForm";

const TodoEdit = async ({ params }) => {
  const { id } = await params;

  const todo = await findTodoById(Number(id));

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Editando: {todo.titulo}
      </h1>
      <TodoForm todo={todo} />
    </div>
  );
};

export default TodoEdit;
