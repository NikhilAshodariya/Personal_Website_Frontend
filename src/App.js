import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Custom_Navbar from './components/Custom_Navbar/Custom_Navbar';
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
                    <Custom_Navbar />
                </div>
                    <Dashboard/>
                {/*<div>*/}
                {/*    <Route path="/" exact component={Home_Page} />*/}
                {/*    <Route path="/user" exact component={User_Profile} />*/}
                {/*    <Route path="/travelguide" component={SearchState} />*/}
                {/*</div>*/}
                {/*<div >*/}
                {/*    <Footer />*/}
                {/*</div>*/}
            </Router>
        );
    }
}

export default App;