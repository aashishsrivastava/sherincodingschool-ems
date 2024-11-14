import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <>
      {/* <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-68 "> */}
      <div className="bg-[#1c1c1c] p-5 rounded mt-5  ">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
          <h2 className="w-1/5 text-lg font-medium "> Employee Name </h2>
          <h3 className="w-1/5 text-lg font-medium text-center ">New Task</h3>
          <h3 className="w-1/5 text-lg font-medium text-center ">
            Active Task
          </h3>
          <h3 className="w-1/5 text-lg font-medium text-center ">completed</h3>
          <h5 className="w-1/5 text-lg font-medium text-center ">Failed</h5>
        </div>
        {/* <div className="h-[80%] overflow-auto"> */}
        <div className="">
          {userData.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" mb-2 border-2 border-emerald-500 py-2 px-4 flex justify-between rounded"
              >
                <h2 className="text-lg font-medium w-1/5 text-white ">
                  {" "}
                  {elem.firstName}{" "}
                </h2>
                <h3 className="text-lg font-medium w-1/5 text-center  text-blue-500">
                  {elem.taskCount.newTask}
                </h3>
                <h3 className="text-lg font-medium w-1/5 text-center  text-yellow-400">
                  {elem.taskCount.active}
                </h3>
                <h3 className="text-lg font-medium w-1/5 text-center  text-white">
                  {elem.taskCount.completed}
                </h3>
                <h3 className="text-lg font-medium w-1/5 text-center text-red-400">
                  {" "}
                  {elem.taskCount.failed}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTasks;
