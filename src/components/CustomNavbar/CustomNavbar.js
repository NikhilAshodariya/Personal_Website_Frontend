import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <div className={""}>
                    <>
                        <Nav className="justify-content-center bg-dark" activeKey="/home">
                            {/*ProfileWork experienceEducationCertifications and AwardsSkills*/}
                            <Nav.Item>
                                <Nav.Link href="/home"><span className={"text-white"}>Profile</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1"><span className="text-white">Work Experience</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><span className="text-white">Education</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><span className="text-white">Skills</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><span className="text-white">Hobbies</span></Nav.Link>
                            </Nav.Item>
                            {/*<Nav.Item>*/}
                            {/*    <Nav.Link eventKey="disabled" disabled>*/}
                            {/*        Disabled*/}
                            {/*    </Nav.Link>*/}
                            {/*</Nav.Item>*/}
                        </Nav>
                        {/*<p className="text-center mt-4 mb-4">Or right-aligned</p>*/}
                        {/*<Nav className="justify-content-end" activeKey="/home">*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link href="/home">Active</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="link-1">Link</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="link-2">Link</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="disabled" disabled>*/}
                        {/*            Disabled*/}
                        {/*        </Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*</Nav>*/}
                    </>

                </div>

            </div>
        )
    }
}