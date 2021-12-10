import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchVal } from "../../../redux/actions/actions";
import "./style.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takeStateValue: "",
    };
    this.getValue = this.getValue.bind(this);
  }
  getValue() {
    const { takeStateValue } = this.state;
    this.props.searchVal(takeStateValue);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Notes.."
          onChange={(e) => {
            this.setState({ takeStateValue: e.target.value });
          }}
        />
        <i className="fas fa-search search-icon" onClick={this.getValue} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchVal: searchVal }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
