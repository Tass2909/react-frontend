import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateClientComponent from './components/CreateClientComponent';
import UpdateClientComponent from './components/UpdateClientComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/clients" component={ListEmployeeComponent}></Route>
            <Route path="/add-client" component={CreateClientComponent}></Route>
            <Route path="/update-client/:id" component={UpdateClientComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
