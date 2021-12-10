import React, { Component } from "react";
import { updateAGist, getGistObj } from "../../utils/fetchUtils";

export default class UpdateGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueData: "",
      description: "",
    };
    this.editGist = this.editGist.bind(this);
    this.getAGist = this.getAGist.bind(this);
  }
  editGist = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const gist_id = queryParams.get("gist_Id");
    const { description } = this.state.uniqueData;
    let val = await updateAGist(gist_id, description);
    window.location = `/newsfeed`;
  };
  getAGist = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const gistID = queryParams.get("gist_Id");
    let gistOBJ = await getGistObj(gistID).then((data) =>
      this.setState({ uniqueData: data })
    );
  };

  componentDidMount = () => {
    this.getAGist();
  };
  render() {
     const {uniqueData} = this.state;

    return (
      <section>
        <form className="create-gist">
          <h1 className="create-gist-heading">Update Gist Description</h1>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ uniqueData: { description: e.target.value } })
            }
            placeholder="Enter gist Discription..."
            value={uniqueData.description}
          />
          <button onClick={this.editGist}>Save Gist</button>
        </form>
      </section>
    );
  }
}
