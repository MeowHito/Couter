import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">ยังไม่มีรายการ</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
}
