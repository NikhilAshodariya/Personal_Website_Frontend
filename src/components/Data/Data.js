import React, {Component} from "react";
import {useQuery} from '@apollo/react-hooks';
import "./Data.css";
import queries from "./queries";

const profileRender = (data) => {
    const finalRes = (
        <div>
            <h1 className="row justify-content-center">
                            <span className="icon">
                                <span>
                                    <i className="fas fa-user"></i>
                                </span>
                            </span>
            </h1>
            <h3 className="row justify-content-center">
                    <span>
                        Profile
                    </span>
                <br/>
                <br/>
            </h3>
            <div className="row">
                <div className="col-1"/>

                <div className="col-10">
                    {data["bio"]}
                </div>

                <div className="col-1"/>
            </div>
        </div>
    );

    return finalRes;
};

const workExRender = (data) => {
    // const data = callWorkExAPI();

    const work = data.map((value, idx) =>
        <div id={"workex" + idx} className="row workexpitem">
            <div className="col-1"/>
            <div className="col-2">
                    <span>
                        <span>
                            <span className="startandenddate">
                                {value['startdate']} - {value['enddate']}
                            </span>
                            <span className="dashed"/>
                        </span>
                    </span>
            </div>
            <div className="col-9">
                        <span>
                            <span>
                                <span className="jobtitle">
                                    <b>{value['position']}</b>
                                </span>
                                <br/>
                                <span className="company">
                                    <i>{value['company']}</i>,
                                </span>
                                <span className="location">
                                    <i>&nbsp; {value['location']}</i>
                                </span>
                                <br/>
                                <span className="jobdescription">
                                    {value['jobdescription']}
                                </span>
                            </span>
                        </span>
            </div>

        </div>
    );

    const finalRes = (
        <div>
            <h1 className="row justify-content-center">
                            <span className="icon">
                                <span>
                                    <i className="fas fa-briefcase"></i>
                                </span>
                            </span>
            </h1>
            <h3 className="row justify-content-center">
                    <span>
                        Work Experience
                    </span>
                <br/>
                <br/>
            </h3>
            <div>
                {work}
            </div>
        </div>
    );

    return finalRes;
};

const educationRender = (data) => {
    // const data = callEducationAPI();

    const education = data.map((value, idx) =>
        <div id={"education" + idx} className="row eductionitem">
            <div className="col-1"/>

            <div className="col-2">
                    <span className="">
                        <span>
                            <span className="startandenddate">
                                {value['startdate']} - {value['enddate']}
                            </span>
                            <span className="dashed"/>
                        </span>
                    </span>
            </div>
            <div className="col-8">
                        <span>
                            <span>
                                <span className="educationtitle">
                                    <b>{value['university']}</b>
                                </span>
                                <br/>
                                <span className="college">
                                    <i>{value['degree']}</i>,
                                </span>
                                <span className="gpa">
                                    &nbsp; <i>GPA: {value['gpa']}</i>
                                </span>
                                <br/>
                                <span className="educationdescription">
                                    {value['description']}
                                </span>
                            </span>
                        </span>
            </div>

        </div>
    );

    const finalRes = (
        <div>
            <h1 className="row justify-content-center">
                            <span className="icon">
                                <span>
                                    <i className="fas fa-university"></i>
                                </span>
                            </span>
            </h1>
            <h3 className="row justify-content-center">
                    <span>
                        Education
                    </span>
                <br/>
                <br/>
            </h3>
            <div>
                {education}
            </div>
        </div>
    );

    return finalRes;
};

const projectRender = (data) => {
    // const data = callProjectsAPI();

    const projects = data.map((value, idx) =>
        <div id={"project" + idx} className="row projectitem">
            <div className="col-1"/>

            <div className="col-2 startDateEndDate">
                    <span>
                        <span>
                            <span className="startandenddate">
                                {value['startdate']} - {value['enddate']}
                            </span>
                            <span className="dashed"/>
                        </span>
                    </span>
            </div>
            <div className="col-8">
                        <span>
                            <span>
                                <span className="projectname">
                                    <b>{value['name']}</b>
                                </span>
                                <br/>
                                <span className="projecttitle">
                                    <i>{value['title']}</i>,
                                </span>
                                <span className="projectlocation">
                                    &nbsp; <i>{value['place']}</i>
                                </span>
                                <br/>
                                <span className="projectdescription">
                                    {value['description']}
                                </span>
                            </span>
                        </span>
            </div>

        </div>
    );

    const finalRes = (
        <div>
            <h1 className="row justify-content-center">
                            <span className="icon">
                                <span>
                                    <i className="fab fa-github"></i>
                                </span>
                            </span>
            </h1>
            <h3 className="row justify-content-center">
                    <span>
                        Projects
                    </span>
                <br/>
                <br/>
            </h3>
            <div>
                {projects}
            </div>
            <br/>

            <div className="row justify-content-center">
                    <span className="btn btn-primary">
                        <a href="https://github.com/NikhilAshodariya?tab=repositories" className="text-white">
                            More Projects...
                        </a>
                    </span>
            </div>
        </div>
    );

    return finalRes;
};

const skillsRender = (data) => {
    const activedash = [];
    const deactivedash = [];

    for (let i = 0; i < data.length; i++) {
        const activeTemp = [];
        const deactiveTemp = [];

        for (let j = 0; j < parseInt(data[i]['activedash']); j++) {
            activeTemp.push(<span className="active">|</span>)
        }

        for (let j = 0; j < parseInt(data[i]['totaldash']) - parseInt(data[i]['activedash']); j++) {
            deactiveTemp.push(<span className="inactive">|</span>)
        }

        activedash.push(activeTemp);
        deactivedash.push(deactiveTemp);
    }

    const skills = data.map((value, idx) =>
        <div>
            <div id={"skill" + idx} className="row skillitem">
                <span className="col-1"/>
                <span className="skill-name col-3">
                        {value['name']}
                    </span>
                <span className="skill-description col-4">
                        <div className="skill-progress">
                            {
                                activedash[idx]
                            }
                            {
                                deactivedash[idx]
                            }
                        </div>

                    </span>

            </div>
            {
                idx !== data.length - 1 ? (
                    data[idx + 1]['category'] !== data[idx]['category'] ? (
                        <div className="row">
                            <hr/>
                        </div>
                    ) : (<div/>)
                ) : (<div/>)
            }
        </div>

    );

    const finalRes = (
        <div>
            <h1 className="row justify-content-center">
                            <span className="icon">
                                <span>
                                    <i className="fas fa-flask"></i>
                                </span>
                            </span>
            </h1>
            <h3 className="row justify-content-center">
                    <span>
                        Skills
                    </span>
                <br/>
                <br/>
            </h3>
            <div>
                {skills}
            </div>
        </div>
    );

    return finalRes;
};


export default function Data(props) {
    const profile = useQuery(queries.GET_profile)["data"];
    const workexps = useQuery(queries.GET_workexps)["data"];
    const educations = useQuery(queries.GET_educations)["data"];
    const skills = useQuery(queries.GET_skills)["data"];
    const projects = useQuery(queries.GET_projects)["data"];

    switch (props.activeTab) {
        case 'profile':
            if (profile!== undefined){
                return (
                    <div className="profile">
                        {profileRender(profile)}
                    </div>
                );
            } else {
                return (
                    <div>
                        loading...
                    </div>
                )
            }

        case 'workexp':
            if(workexps !==undefined) {
                return (
                    <div className="workexp">
                        {workExRender(workexps["workexps"])}
                    </div>
                );
            } else {
                return (
                    <div>
                        Loading...
                    </div>
                )
            }

        case 'education':
            if (educations !== undefined) {
                return (
                    <div className="educationexp">
                        {educationRender(educations["educations"])}
                    </div>
                )
            } else {
                return (
                    <div>
                        loading...
                    </div>
                )
            }

        case 'skills':
            if (skills !== undefined) {
                return (
                    <div className="skills">
                        {skillsRender(skills)}
                    </div>
                );
            } else {
                return (
                    <div>
                        loading...
                    </div>
                )
            }

        case 'projects':
            if(projects!== undefined) {
                return (
                    <div className="projects">
                        {projectRender(projects)}
                    </div>
                );
            }else {
                return (
                    <div>loading...</div>
                )
            }

        default:
            return (
                <div>
                    Something went wrong;
                </div>
            );

    }
}