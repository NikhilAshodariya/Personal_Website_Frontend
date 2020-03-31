import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <div>
                    <Dashboard/>
                </div>

            </Router>
        );
    }
}

export default App;