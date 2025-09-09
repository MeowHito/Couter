import useTodoStore from "../store/todoStore";

interface TodoItemProps {
  id: number;
  title: string;
}

export default function TodoItem({ id, title }: TodoItemProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div className="flex justify-between items-center p-3 rounded-md mb-2 bg-white text-black">
      <span>{title}</span>
      <button
        onClick={() => removeTodo(id)}
        className="bg-red-500 text-white px-3 py-1 rounded item-center hover:bg-red-600"
      >
        Delete
      </button>
      
    </div>
  );
}
