import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <>
      {/* <div className="flex mt-10 justify-between gap-5 screen"> */}
      <div className="flex mt-10 justify-between gap-5 ">
        <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
          <h2 className="text-3xl font-bold ">{data.taskCount.newTask}</h2>
          <h3 className="text-xl font-bold  capitalize ">new task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
          <h2 className="text-3xl font-bold ">{data.taskCount.completed}</h2>
          <h3 className="text-xl font-bold capitalize ">completed Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
          <h2 className="text-3xl font-bold ">{data.taskCount.active}</h2>
          <h3 className="text-xl font-bold capitalize ">Accepted Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400 ">
          <h2 className="text-3xl text-black font-bold ">
            {data.taskCount.failed}1
          </h2>
          <h3 className="text-xl text-black font-bold capitalize ">
            Failed Task
          </h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
