import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/login";
import HomePage from "./components/homepage/HomePage";
import UniqueGist from "./components/common/uniquegist/UniqueGist";
import NewsFeedPage from "./components/newsfeed/NewsFeedPage";
import CreateGists from "./components/creategist/CreateGist";
import UpdateAGist from './components/editgist/UpdateGist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newsfeed" element={<NewsFeedPage />} />
            <Route path="/getGist/" element={<UniqueGist />} />
            <Route path="/create-a-gist/" element={<CreateGists />} />
            <Route path="/editGist/" element={<UpdateAGist /> } />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
