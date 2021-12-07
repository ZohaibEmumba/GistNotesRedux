import React, { Component } from "react";
import Table from "../../common/table/Table";
import { publicGistsRecord } from "../../../utils/fetchUtils";
import Loader from "../../common/loader/Loader";

class PublicGists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      publicRecord: [],
    };
    this.getData = this.getData.bind(this);
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
  componentDidMount() {
    this.getData();
  }

  render() {
    const { publicRecord , loading } = this.state;
    return (
      <div>
        {loading ? <Loader /> : <Table publicGistsDisplay={publicRecord} />}
      </div>
    );
  }
}

export default PublicGists;
