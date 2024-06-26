import { useState } from "react";

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

const generateId = (array: Todo[]) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};


const TodoForm = ({ todos, setTodos }:{todos: Todo[];setTodos:(todos: Todo[]) => void   }  ) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput) {
      const newTodo = {
        id: generateId(todos),
        content: todoInput.trim(),
        completed: false,
      };

      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Add New Todo</label>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
        <button id="submitNewTodo" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;