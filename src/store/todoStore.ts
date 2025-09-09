import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;

}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title }],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));


export default useTodoStore;
