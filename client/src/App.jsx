import React, { useContext } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import RegisterLogin from "./components/RegisterLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import MangeJobs from "./pages/MangeJobs";
import ViewApplication from "./pages/ViewApplication";
import "quill/dist/quill.snow.css"

const App = () => {
  const { showRegisterLogin } = useContext(AppContext);

  return (
    <div>
      {showRegisterLogin && <RegisterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard"  element={<Dashboard/>}>
        <Route path= 'add-job' element = {<AddJob/>} />
          <Route path= 'manage-jobs' element = {<MangeJobs/>} />
          <Route path= 'view-applications' element = {<ViewApplication/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
