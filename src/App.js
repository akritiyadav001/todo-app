import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  // This is the list which will store all the task.
  const [todoList, setTodoList] = useState([]);
  // This is the variable(hook) to store every new task.
  const [newTask, setNewTask] = useState("");
  // Function to handle all changes we make in the input box.
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
    // Check necessary conditions to add a newtask in the list and update the list.
  const addTask = () => {
    const task = {
      // Below it is checking that list is empty or not to assign the right id to the task
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };
  // For deleting the task is you want to remove from the list.
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  // Making the task as completed so this function will make it marked as completed.
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
       <h2>Todo List Application</h2>
      <div className="addTask">
        <input placeholder="type a task" onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
