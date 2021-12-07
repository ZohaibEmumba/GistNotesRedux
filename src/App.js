import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/login";
import HomePage from "./components/homepage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
