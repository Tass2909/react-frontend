import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
        this.addClient = this.addClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.viewClient = this.viewClient.bind(this);
    }
    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });
    }

    deleteClient(id) {
        ClientService.deleteClient(id).then(res => {
            this.setState({ clients: this.state.clients.filter(client => client.idClient !== id) })
        });
    }
    viewClient(id) {
        this.props.history.push(`/view-client/${id}`);
    }
    addClient() {
        this.props.history.push('/add-client');
    }

    editClient(id) {
        this.props.history.push(`/update-client/${id}`);
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
                                    client =>
                                        <tr key={client.idClient}>
                                            <td>{client.firstNameClient}</td>
                                            <td>{client.lastNameClient}</td>
                                            <td>{client.emailClient}</td>
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.editClient(client.idClient)}>Update</button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => this.deleteClient(client.idClient)}>Delete</button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={() => this.viewClient(client.idClient)}>View</button>
                                            </td>
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