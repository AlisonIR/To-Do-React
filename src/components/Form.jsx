import React, { useState } from "react";
import Task from "./Task";
import { MdArrowRightAlt } from "react-icons/md";

const Form = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const inputData = (e) => {
    setTask(e.target.value);
    
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    const taskList = [newTask, ...list];
    setList(taskList);

    setTask("");


  };

  const deleteTask = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const completedTask = (id) => {
    const completed = list.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
    });
  };

  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-center text-2xl text-white font-medium mt-5 ">My tasks for today</h1>
      <form onSubmit={addTask} className="flex flex-col justify-center">
        <input
          onChange={inputData}
          value={task}
          type="text"
          placeholder="Add a new task"
          className="w-[230px] mx-auto mt-5 h-8 text-center rounded-md"
        ></input>
        <button className="bg-gradient-to-r from-[#333399] to-[#ff00cc] mx-auto w-5 h-5 mt-2 ">
          <MdArrowRightAlt size={15}/>
        </button>

        {list.map((item) => {
          return (
            <Task
              key={item.id}
              item={item}
              deleteTask={deleteTask}
             />
          );
        })}
      </form>
    </div>
  );
};

export default Form;
