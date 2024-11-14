import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);
  //  console.log( ));
  //! console.log(authData.employees);
  //! refresh karne par .employees data error show karta hai

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser");

  //   if (loggedInUser) {
  //     const userData = JSON.parse(loggedInUser);
  //     setUser(userData.role);
  //     setLoggedInUserData(userData.data);
  //   }
  // }, []);

  // ! useEffect >> isko comment karo jab admin se logout hona hai aut login screen perjana ho manually
  // ! error <<

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      //  jab user login karega to set ho jayega
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("inalid credentials");
    }
  };

  // handleLogin("admin@me.com", 123);
  // handleLogin("user@me.com", 123);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
