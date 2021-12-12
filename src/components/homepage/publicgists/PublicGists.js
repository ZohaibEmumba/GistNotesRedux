import React, { Component } from "react";
import Table from "../../common/table/Table";
import { publicGistsRecord } from "../../../utils/fetchUtils";
import Loader from "../../common/loader/Loader";
import './style.css';
import Grid from "../../common/grid/Grid";
import { connect } from "react-redux";

class PublicGists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      publicRecord: [],
      isListView: true,
      isGridView: false,
      isActive: "list"
    };
    this.getData = this.getData.bind(this);
    this.listToggle = this.listToggle.bind(this);
    this.gridToggle = this.gridToggle.bind(this);
  }
  getData = async () => {
    this.setState({ loading: true });
    let val = await publicGistsRecord().then((data) => {
      this.setState({
        loading: false,
        publicRecord: data,
      });
    });
  };
  listToggle = () => {
    this.setState({
      isListView: true,
      isGridView: false,
      isActive : "list"
    });
  };

  gridToggle = () => {
    this.setState({
      isListView: false,
      isGridView: true,
      isActive : "grid"
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { publicRecord , loading , isGridView , isListView , isActive } = this.state;
    const TableView = (loading ? <Loader /> : <Table publicGistsDisplay={publicRecord} />);
    const GridView = (loading ? <Loader /> : <Grid publicGistsDisplay={publicRecord} /> );
    return (
        <section className="main-sec">
        <div className="view-icons">
          <span>
            <i
              className={isActive === "list" ? "fas fa-list fa-2x list-active" : "fas fa-list fa-2x"}
              onClick={this.listToggle}
            ></i>
          </span>
          <span style={{ border: "1px solid #5acba1" }}></span>
          <span>
            <i
              className={isActive === "grid" ?  "fas fa-th-large fa-2x grid-active" :  "fas fa-th-large fa-2x"}
              onClick={this.gridToggle}
            ></i>
          </span>
        </div>
        {isListView === true && isGridView === false ? TableView  : GridView}
    </section>
    );
  }
}


export default PublicGists;
