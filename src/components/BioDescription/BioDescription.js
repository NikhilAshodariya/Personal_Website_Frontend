import React, {Component} from 'react';

import "./BioDescription.css"

export default class BioDescription extends Component {
    render() {
        return (
            <div className="BioDescription">
                <div className="row justify-content-center">
                    <img className="col-2" src={"/img/self_1.jpg"} id={"bioImage"} alt="asdf"/>
                </div>
                <div className="row justify-content-center">
                    <div className={"belowNameIntro"}>
                        <h1 className="row justify-content-center" id={"name"}>
                            Nikhil Ashodariya
                        </h1>
                        <div className="row">
                            <div className="col-6 hidden-xs">
                                <span className={"float-right"}>
                                    <span className="icon">
                                        <i className="fas fa-calendar"/>
                                    </span>
                                    <span className="value iconText">12/20/1995</span>

                                    <br/>

                                    <span className="icon">
                                        <i className="fas fa-flag"/>
                                    </span>
                                    <span className="value iconText">

                                    </span>
                                    <br/>
                                    <span className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="value iconText">
                                        <a href="mailto:hello@kickresume.com" className="linkified" target="_blank">
                                            nashodar@stevens.edu
                                        </a>
                                    </span>
                                </span>
                            </div>

                            <div className="col-6 float-left hidden-xs">
                                <span>
                                    <span className="icon">
                                        <i className="fas fa-home"/>
                                    </span>
                                    <span className="value iconText">
                                        116 Lake St. Jersey City NJ, United States
                                    </span>

                                    <br/>

                                    <span className="icon">
                                        <i className="fas fa-phone"/>
                                    </span>
                                    <span className="value iconText">
                                        +1 856-263-1890
                                    </span>

                                    <br/>

                                    <span className="icon">
                                        <i className="fas fa-link"/>
                                    </span>
                                    <span className="value iconText">
                                        <a href="https://drive.google.com/file/d/1k4c-HvkgDjjV-j0HXNPaqNfpndNl658O/view?usp=sharing"
                                           className="linkified" target="_blank">
                                            Resume
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}