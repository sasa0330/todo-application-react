import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Todos } from "./components/Todos";
import { CompletedTodos } from "./components/CompletedTodos";

export default function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const fisrtFlgRef = useRef(true);
  useEffect(() => {
    if (fisrtFlgRef.current) {
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const getJson = localStorage.getItem("todos");
      const newArray = JSON.parse(getJson);
      setTodos(newArray);
    }
    if (localStorage.getItem("completedTodos")) {
      const getJson = localStorage.getItem("completedTodos");
      const newArray = JSON.parse(getJson);
      setCompletedTodos(newArray);
    }
  }, []);

  const changeInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  const clickAddButton = () => {
    setTodos([...todos, inputTodo]);
    fisrtFlgRef.current = false;
  };

  const clickDeleteButton = (index) => {
    setTodos(todos.filter((todo, thisIndex) => thisIndex !== index));
    fisrtFlgRef.current = false;
  };

  const clickCompletedButton = (index) => {
    setTodos(todos.filter((todo, thisIndex) => thisIndex !== index));
    setCompletedTodos([...completedTodos, todos[index]]);
    fisrtFlgRef.current = false;
  };

  const clickReturnTodoButton = (index) => {
    setTodos([...todos, completedTodos[index]]);
    setCompletedTodos(
      completedTodos.filter((completedTodo, thisIndex) => thisIndex !== index)
    );
    fisrtFlgRef.current = false;
  };

  return (
    <>
      <Todos
        onClickDelete={clickDeleteButton}
        onClickCompleted={clickCompletedButton}
        todos={todos}
      />
      <CompletedTodos
        completedTodos={completedTodos}
        onClick={clickReturnTodoButton}
      />
      <InputTodo
        todoText={inputTodo}
        onChange={changeInputTodo}
        onClick={clickAddButton}
      />
    </>
  );
}
