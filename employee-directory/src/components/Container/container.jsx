import React, { Component } from "react";
import Api from "../../utils/Api";
import EmployeeTable from "../Table/EmployeeTable";

class Container extends Component {
    state = {
        users: [],
        order: "descend"
    }
    componentDidMount() {
        Api.getUsers().then(results => {
          
            this.setState({
                users: results.data.results
            });
            console.log(this.state)
        });
    }
    render() {
        return  (
        <div>
            {/* search component here */}
            <EmployeeTable
            users={this.state.users}
            />
        </div>
        )
    }
}

export default Container;