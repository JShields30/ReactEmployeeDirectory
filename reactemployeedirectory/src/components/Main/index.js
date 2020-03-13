import React from "react";
import Table from "../Table/index"
import Api from "../../utils/Api"

class Main extends React.Component {
    state={users:[]}
    componentDidMount() {
        Api.getUsers().then(results => {
            this.setState({users: results.data.results})
        
        });
    }
    // handleSearch = (term) => {
    //     onChange={this.handleSearch}
    // }
    render() {
        return(
            <div>
            <Table users = {this.state.users} />
            </div>
        );
    }
}
    

export default Main;
