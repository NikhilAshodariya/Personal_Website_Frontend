import React, {Component} from 'react';
import BioDescription from '../BioDescription/BioDescription';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Footer from "../Footer/Footer";
import Data from "../Data/Data";

import "./Dashboard.css";

export default class Dashboard extends Component
{
    state = {
        activeTab: "profile"
    };

    changeActiveTab = (newTab) => {
        this.setState({
            activeTab: newTab
        });
    };

    render() {
        return (
            <div>
                <BioDescription/>
                <CustomNavbar changeActiveTab = {this.changeActiveTab}/>

                <Data activeTab = {this.state.activeTab}/>


                <br/>
                <br/>

                <Footer/>
            </div>
        )
    }
}