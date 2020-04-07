import React from 'react';

import "./BioDescription.css"
import {useQuery} from "@apollo/react-hooks";
import queries from "../Data/queries";


export default function BioDescription(props) {
    const stay = useQuery(queries.GET_stay)["data"];
    const resumeLink = useQuery(queries.GET_resumeLink)["data"];
    const phone = useQuery(queries.GET_phone)["data"];
    const email = useQuery(queries.GET_email)["data"];

    return (
        <div className="BioDescription">
            <div>
                <div className="row justify-content-center">
                    <img className="col-8 col-sm-6 col-md-4 col-lg-2 col-xl-2"
                         src={"/img/self_1.jpg"}
                         id={"bioImage"}
                         alt="Nikhil Ashodariya"/>

                </div>
                <div className="row justify-content-center">
                    <div className={"belowNameIntro"}>
                        <h1 className="row text-center" id={"name"}>
                            Nikhil Ashodariya
                        </h1>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left hidden-xs">
                                <span>
                                    <span className="">
                                        <span className="icon">
                                            <i className="fas fa-home"/>
                                        </span>
                                        <span className="value iconText">
                                            {stay?stay["stay"]:""}
                                        </span>
                                    </span>

                                    <br/>

                                    <span>
                                        <span className="icon">
                                            <i className="fas fa-phone"/>
                                        </span>
                                        <span className="value iconText">
                                            {phone?phone["phone"]:""}
                                        </span>
                                    </span>
                                    <br/>

                                </span>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <span className="">
                                    <span>
                                        <span className="icon">
                                            <i className="fas fa-calendar"/>
                                        </span>
                                        <span className="value iconText">12/20/1995</span>
                                    </span>
                                    <br/>

                                    <span>
                                        <span className="icon">
                                            <i className="fas fa-link"/>
                                        </span>
                                        <span className="value iconText">
                                            {/*https://drive.google.com/file/d/1k4c-HvkgDjjV-j0HXNPaqNfpndNl658O/view?usp=sharing*/}
                                            <a href={resumeLink?resumeLink["resumeLink"]:""}
                                               className="linkified" target="_blank">
                                                Resume
                                            </a>
                                            <span className="icon">
                                                <i className="fas fa-external-link-alt"/>
                                            </span>
                                        </span>

                                    </span>
                                    <br/>

                                    <span>
                                        <span className="icon">
                                            <i className="fas fa-envelope"/>
                                        </span>
                                        <span className="value iconText">
                                            <a href="mailto:hello@kickresume.com" className="linkified" target="_blank">
                                                {email?email["email"]:""}
                                            </a>
                                        </span>
                                    </span>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row scroll-down">
                    <span className="col-12 text-white text-center">
                        <a href="#customNavBar">
                            <i className="text-white fas fa-arrow-down"/>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}