import React from "react";
import Table from "../Table/index"
import Api from "../../utils/Api"

class Main extends React.Component {
    state={
        users:[],
        search: ''
    }
    componentDidMount() {
        Api.getUsers().then(results => {
            this.setState({users: results.data.results})
        
        });
    }
    handleSearch = (search) => {
    }
   
//     render() {
//         return(
//             <div>
//             <Table users = {this.state.users} />
//             </div>
//         );
//     }
// }
render() {
    return (
        <div>
            <form
                class="form-inline justify-content-center md-form mx-auto mb-4">
                <input
                    class="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    class="btn aqua-gradient btn-rounded btn-sm my-0"
                    type="submit"
                >Search</button>
            </form>
            {/* instead of passing this.state.users into the users property (which is an array) how about we instead pass a different array which is a filter of the users based state of search */}
            <Table users={this.state.users} />
        </div>
    );
}
}


    

export default Main;
