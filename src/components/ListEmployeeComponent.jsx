import React, { Component } from 'react';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Clients List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Client</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    clients =>
                                        <tr key={clients.id}>
                                            <td>{clients.firstName}</td>
                                            <td>{clients.LastName}</td>
                                            <td>{clients.emailClient}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListEmployeeComponent;