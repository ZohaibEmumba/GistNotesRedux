import React, { Component } from "react";
import './style.css';

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="loader">Loading...</div>
      </div>
    );
  }
}
