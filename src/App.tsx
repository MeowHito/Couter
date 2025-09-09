import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

export default function App() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5"> </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
