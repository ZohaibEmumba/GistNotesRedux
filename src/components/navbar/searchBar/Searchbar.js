import { Component } from "react";
import "./style.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Notes.."
          onChange={(e) => {
            this.props.takeStateValue(e.target.value);
          }}
        />
        <i className="fas fa-search search-icon" onClick={()=> this.props.getValue()}/>
      </div>
    );
  }
}
