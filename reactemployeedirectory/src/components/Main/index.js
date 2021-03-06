import React from "react";
import Table from "..//Table/index";
import Api from "../../utils/Api";

class Main extends React.Component {
  state = {
    users: [],
    search: "",
    filterUsers: []
  };
  componentDidMount() {
    Api.getUsers().then(results => {
      this.setState({ users: results.data.results });
      this.handleFilteredUsers();
    });
  }
  handleFilteredUsers = () => {
    let newFilterUsers;

    if (this.state.search === "") {
      newFilterUsers = this.state.users;
    } else {
      newFilterUsers = this.state.users.filter(user => {
        return (
          user.name.first.toLowerCase().includes(this.state.search) ||
          user.name.last.toLowerCase().includes(this.state.search)
        );
      });
    }
    this.setState({
      filterUsers: newFilterUsers
    });
  };

  handleInputChange = e => {
    //do generic input change to handle state of search
    let value = e.target.value;
    const name = e.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.handleFilteredUsers();
  };
  render() {
    return (
      <div>
        <form className="form-inline justify-content-center md-form mx-auto mb-4">
          <input
            value={this.state.search}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search by Name"
            aria-label="Search"
            name="search"
            onChange={this.handleInputChange}
          />
        </form>
        {/* instead of passing this.state.users into the users property (which is an array) how about we instead pass a different array which is a filter of the users based state of search */}
        <Table users={this.state.filterUsers} />
      </div>
    );
  }
}
export default Main;
