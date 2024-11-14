import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState(" ");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      NewTask: true,
      failed: false,
      completed: false,
    });

    // const data = JSON.parse(localStorage.getItem("employees"));
    const data = userData;
    
    // console.log(userData.employees);

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.active = elem.taskCount.active + 1;
        // console.log(elem);
      }
    });

    setUserData(data)
    // console.log(data);

    // console.log(data);
    // localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");

    // console ke baad reset ho jaye ga form
  };

  return (
    <>
      <div className="p-5 bg-[#1c1c1c]  mt-7 rounded">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex flex-wrap w-full items-start justify-between  "
        >
          <div className="w-1/2 ">
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a ui design "
              />
            </div>

            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name "
              />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start ">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm font-medium mt-4 w-full ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
