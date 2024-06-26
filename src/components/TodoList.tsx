import { useEffect, useState } from "react";
import React, { Dispatch, SetStateAction } from 'react';
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";

interface Todo {
  id: number;
  content: string;
  completed: boolean;
};

type FilterStatus = 'all' | 'active' | 'completed';


interface TodoListProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  filteredTodos: Todo[];
  filterStatus: FilterStatus;
  setFilterStatus: Dispatch<SetStateAction<FilterStatus>>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  filteredTodos,
  filterStatus,
  setFilterStatus,
}) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  const textPlacer = filterStatus === "completed" ? "closed task" : "task";

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  return (
    <>
      <section className="todo-list-section">
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no {textPlacer}</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <div className="todo-filter-control">
          <div className="todos-count">{leftTodoCount} items left</div>

          <div className="control-btn group filter-control-for-desktop">
            <TodoFilterControl
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>

          <div className="control-btn"> 
            <button className="btn" onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        </div>
      </section>

      {/* For Mobile */}
      <section className="filter-control-for-mobile">
        <div className="control-btn group">
          <TodoFilterControl
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
      </section>
    </>
  );
};

export default TodoList;