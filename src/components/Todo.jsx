import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import TodoList from "./TodoList";
import MobileFilterButton from "./MobileFilterButton";

const Todo = (props) => {
  const [tasks, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    // return the parsed JSON object or empty array if none
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskCount, setTaskCount] = useState(0);
  const [status, setStatus] = useState("All");
  const [filteredTask, setFilteredTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    filterHandler();
    taskCountHandler();
    // eslint-disable-next-line
  }, [tasks, status]);

  function addTask(inputText) {
    const newTask = {
      id: nanoid(),
      name: inputText,
      completed: false,
    };

    setTask([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => task.id !== id);

    setTask(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTask(updatedTask);
  }

  function clearCompletedTasks() {
    const activeTasks = tasks.filter((task) => task.completed === false);
    setTask(activeTasks);
  }

  function filterHandler() {
    switch (status) {
      case "Active":
        setFilteredTask(tasks.filter((task) => task.completed === false));
        break;
      case "Completed":
        setFilteredTask(tasks.filter((task) => task.completed === true));
        break;
      default:
        setFilteredTask(tasks);
        break;
    }
  }

  function taskCountHandler() {
    const activeTask = tasks.filter((task) => task.completed === false);
    setTaskCount(activeTask.length);
  }
  function statusHandler(e) {
    setStatus(e.target.innerText);
  }
  return (
    <div>
      <Form addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
        clearCompletedTasks={clearCompletedTasks}
        setStatus={setStatus}
        filteredTask={filteredTask}
        taskCount={taskCount}
        statusHandler={statusHandler}
        setFilteredTask={setFilteredTask}
      />
      <MobileFilterButton statusHandler={statusHandler} />
    </div>
  );
};

export default Todo;
