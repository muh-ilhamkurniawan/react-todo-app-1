import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center p-3 my-5">
      <h1 className="text-3xl font-bold">My Todo List</h1>
      <p className="text-2xl mb-5">{currentTime.toLocaleTimeString("default", { hour12: false })}</p>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
