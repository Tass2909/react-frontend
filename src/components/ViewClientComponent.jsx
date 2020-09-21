import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ViewClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            client: {}
        }
        console.log(this.state.id);
    }
    componentDidMount() {
        ClientService.getClientById(this.state.id).then(res => {
            this.setState({ client: res.data });
        });
    }

    render() {
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View client details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Client first name: </label>
                            <div>{this.state.client.firstNameClient}</div>
                        </div>
                        <div className="row">
                            <label>Client last name: </label>
                            <div>{this.state.client.lastNameClient}</div>
                        </div>
                        <div className="row">
                            <label>Client email: </label>
                            <div>{this.state.client.emailClient}</div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ViewClientComponent;