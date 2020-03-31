import React, {Component} from 'react';
import BioDescription from '../BioDescription/BioDescription';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Footer from "../Footer/Footer";

export default class Dashboard extends Component
{
    render() {
        return (
            <div>
                <BioDescription/>
                <CustomNavbar/>
                <div id={"middleSection"}>Here all data is go</div>
                <Footer/>
            </div>
        )
    }
}