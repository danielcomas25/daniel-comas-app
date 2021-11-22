import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
