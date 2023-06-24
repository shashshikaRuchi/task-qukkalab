import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import AddMember from "./components/AddMember";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/addMember" element={<AddMember />} />
          <Route path="*" element={<h2>There is some error</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
