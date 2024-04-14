import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
// Define Todo type
type Todo = {
  id: number;
  content: string;
  completed: boolean;
};
// Define FilterStatus type to only three states for stability
type FilterStatus = 'all' | 'active' | 'completed'; 

// Initialize Todo list
const data: Todo[] = [
  { id: 1, content: "完成前端岗位测试题", completed: true },
  { id: 2, content: "遛狗一小时", completed: false },
  { id: 3, content: "15 minutes Mario Kart", completed: false },
  { id: 4, content: "Cardio fitness for 1 hour", completed: false },
  { id: 5, content: "夕ご飯の準備", completed: false },
  { id: 6, content: "Sign apartment renewal form", completed: false },
  { id: 7, content: "Computer Vision HW5", completed: true },
];

function App() {
  // Initialization
  const [todos, setTodos] = useState<Todo[]>(data);
  const [themeLight, setThemeLight] = useState<boolean>(true);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const themeClass = themeLight ? "light" : "dark";

  useEffect(() => {
    const handleFilter = () => {
      // Switch todolists based on FilterStatus
      switch (filterStatus) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
