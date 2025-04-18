import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (!task.trim()) {
      alert("Task field is required.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      task,
      description,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setDescription("");
  };

  const handleDone = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>New task:</h2>
      <input
        type="text"
        placeholder="Your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Describe it"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAdd}>Add</button>

      <h2>My todo list:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.task}</strong>: {todo.description}{" "}
            <a href="#" onClick={() => handleDone(todo.id)}>
              Done
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
