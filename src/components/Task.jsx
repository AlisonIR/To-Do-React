import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const TasksList = ({ item, deleteTask }) => {
  const { id, text } = item;
  const [complete, setComplete] = useState(false);

  const completed = () => {
    setComplete((prev) => !prev);
  };

  return (
    <div className="mt-5 bg-gradient-to-r from-[#333399] to-[#ff00cc] min-w-[300px] h-8 mx-auto rounded-md text-white sm:w-[450px] sm:text-left">
      <h1 className="flex justify-center text-center whitespace-nowrap sm:mr-[180px] sm:ml-[170px] ">{text}</h1>

      <div >
        <button onClick={() => deleteTask(id)} className="mt-2">
          <FaRegTrashAlt className="ml-[260px] -mt-9 sm:ml-[420px]" />
        </button>
      </div>
    </div>
  );
};

export default TasksList;
