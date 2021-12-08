import React, { Component } from "react";
import '../style.css';

export default class IconsDisp extends Component {
  render() {
    return (
      <>
        <span style={{ color: "blue" }}>
          <i className="far fa-edit" onClick={this.updateGist}></i> Edit
        </span>
        <span style={{ color: "blue" }}>
          <i className="far fa-trash-alt" onClick={this.delGist}></i> Delete
        </span>
      </>
    );
  }
}
