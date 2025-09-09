import { useState, type FormEvent } from "react";
import useTodoStore from "../store/todoStore";

export default function TodoForm() {
  const [input, setInput] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="เพิ่มรายการ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-400 px-3 py-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>

    </form>
  );
}