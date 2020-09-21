import React, { Component } from 'react';
import ClientService from '../services/ClientService';
class CreateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameClient: '',
            lastNameClient: '',
            emailClient: '',
        }
        this.changeFirstNameClientHandler = this.changeFirstNameClientHandler.bind(this);
        this.changeLastNameClientHandler = this.changeLastNameClientHandler.bind(this);
        this.changeEmailClientHandler = this.changeEmailClientHandler.bind(this);
        this.saveClient = this.saveClient.bind(this);
        this.state = { alertMessage: false };
    }
    saveClient = (e) => {
        e.preventDefault();
        let client = {
            firstNameClient: this.state.firstNameClient,
            lastNameClient: this.state.lastNameClient,
            emailClient: this.state.emailClient
        };
        console.log('client =>' + JSON.stringify(client));

        ClientService.createClient(client).then(res => {
            //this.props.history.push('/clients');
            this.setState({ alertMessage: true });
        })
    }
    cancel() {
        this.props.history.push('/clients');
    }
    changeFirstNameClientHandler = (event) => {
        this.setState({ firstNameClient: event.target.value });
    }
    changeLastNameClientHandler = (event) => {
        this.setState({ lastNameClient: event.target.value });
    }
    changeEmailClientHandler = (event) => {
        this.setState({ emailClient: event.target.value });
    }

    render() {
        function SuccessMessage(props) {
            return <div class="alert alert-success" role="alert">
                Add success
        </div>
        }
        function Message(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <SuccessMessage />;
            }
            return <WaitingMessage />;
        }
        function WaitingMessage(props) {
            return <div class="alert alert-info" role="alert">
                Waiting Data
        </div>;
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add client</h3>
                            <Message isLoggedIn={this.state.alertMessage} />
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstNameClient" className="form-control" value={this.state.firstNameClient} onChange={this.changeFirstNameClientHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastNameClient" className="form-control" value={this.state.lastNameClient} onChange={this.changeLastNameClientHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="emailClient" className="form-control" value={this.state.emailClient} onChange={this.changeEmailClientHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveClient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateComponent;