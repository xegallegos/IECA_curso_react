import { useState } from "react";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const { list, addTodo, removeTodo, updateTodo } = useTodo();

  const newTodo = () => {
    addTodo(inputValue);
  };

  return (
    <div className="bg-gray-200 flex-1 w-full flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
        <button onClick={newTodo}>Guardar</button>
      </div>
      <ul>
        {list.map((todo, index) => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            index={index}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;