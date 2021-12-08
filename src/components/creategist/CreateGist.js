import React, { Component } from "react";
import {createAGist} from '../../utils/fetchUtils';
import "./style.css";

export default class CreateGists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discription: "",
      filename: " ",
      content: " ",
      privacy: null,
    };
    this.creatGist = this.creatGist.bind(this);
  }
  creatGist = (e) => {
    e.preventDefault();
    const {filename , content , privacy , discription} = this.state ;
   
      let gistData = {
        description: discription,
        public: !privacy,
        files: {
          [filename]: {
            content: content,
          },
        },
      };
      createAGist(gistData);
      window.location = `/newsfeed`;
  };

  render() {
    return (
      <section>
        <form className="create-gist">
          <h1 className="create-gist-heading">Create A Gist</h1>
          <input
            type="text"
            onChange={(e) => this.setState({ discription: e.target.value })}
            placeholder="Enter gist Discription..."
          />
          <input
            type="text"
            placeholder="Enter File name..."
            onChange={(e) => this.setState({ filename: e.target.value })}
          />
          <textarea
            name=""
            cols="30"
            rows="10"
            placeholder="Enter File Content..."
            onChange={(e) => this.setState({ content: e.target.value })}
          ></textarea>
          <span>
            <select
              onChange={(e) => {
                if (e.target.value === "public") {
                  this.setState({ privacy: false });
                } else if (e.target.value === "private") {
                  this.setState({ privacy: true });
                } else {
                  return this.state.privacy;
                }
              }}
            >
              <option>Create Gist</option>
              <option value="public"> Public</option>
              <option value="private">Private</option>
            </select>
          </span>

          <button>Add File</button>
          <button onClick={this.creatGist}>Create Gist</button>
        </form>
      </section>
    );
  }
}
