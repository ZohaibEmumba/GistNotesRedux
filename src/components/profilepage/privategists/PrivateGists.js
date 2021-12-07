import React, { Component } from "react";
import { privateGistsRecord } from "../../../utils/fetchUtils";
import Table from "../../common/table/Table";
import Loader from "../../common/loader/Loader";
import Grid from "../../common/grid/Grid";
// import './style.css';

class PrivateGists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      privateRecord: [],
      isListView: true,
      isGridView: false,
    };
    this.getData = this.getData.bind(this);
  }
  getData = async () => {
    this.setState({ loading: true });
    let val = await privateGistsRecord().then((data) => {
      this.setState({
        loading: false,
        privateRecord: data,
      });
      console.log(this.state.privateRecord)
    });
  };
  listToggle = () => {
    this.setState({
      isListView: true,
      isGridView: false,
    });
  };

  gridToggle = () => {
    this.setState({
      isListView: false,
      isGridView: true,
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { privateRecord , loading , isGridView , isListView } = this.state;
    const TableView = (loading ? <Loader /> : <Table privateGistsDisplay={privateRecord} />);
    const GridView = (loading ? <Loader /> : <Grid privateGistsDisplay={privateRecord} /> );
    return (
        <section className="main-sec">
        <div className="view-icons">
          <span>
            <i
              className="fas fa-list fa-2x"
              onClick={() => this.listToggle()}
            ></i>
          </span>
          <span style={{ border: "1px solid #5acba1" }}></span>
          <span>
            <i
              className="fas fa-th-large fa-2x"
              onClick={() => this.gridToggle()}
            ></i>
          </span>
        </div>
        {isListView === true && isGridView === false ? TableView  : GridView}
    </section>
    );
  }
}

export default PrivateGists;
