import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("email is", email);
    // console.log("password is", password);

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen ">
        <div className="border-2 rounded-xl border-emerald-600 p-20">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // console.log(e.target.value);
              }}
              required
              className="outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 text-xl rounded-full placeholder:capitalize placeholder:text-gray-400 "
              type="email"
              placeholder="enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 text-xl rounded-full placeholder:capitalize placeholder:text-gray-400 mt-3"
              type="password"
              placeholder="enter password"
            />
            <button className="outline-none border-none bg-emerald-600 font-semibold  hover:bg-emerald-700 py-2 px-8 text-xl w-full rounded-full placeholder:capitalize placeholder:text-white mt-3">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
