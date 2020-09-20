import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
        this.addClient = this.addClient.bind(this);
    }
    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });
    }

    addClient(){
        this.props.history.push('/add-client');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Clients List</h2>
                <div className="row"><button className="btn btn-primary" onClick={this.addClient}>Add client</button></div>
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
                                            <td>{clients.firstNameClient}</td>
                                            <td>{clients.lastNameClient}</td>
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