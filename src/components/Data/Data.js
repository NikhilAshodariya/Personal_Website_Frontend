import React, {Component} from "react";

import "./Data.css";

export default class Data extends Component {

    callProfileAPI = () => {
        const defaultProfile = {
            'profile': "I am a human looking for a software developer role in this life. I am interested to work on" +
                " technologies like Python, Node.js, and Java. I am a Full-Stack developer. Apart from my professional" +
                " life I love to travel."
        };

        return defaultProfile;
    };

    profileRender = () => {
        const data = this.callProfileAPI();

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
                        {data["profile"]}
                    </div>

                    <div className="col-1"/>
                </div>
            </div>
        );

        return finalRes;
    };

    callWorkExAPI = () => {
        const defaultExp = [
            {
                "startdate": "06/2017",
                "enddate": "07/2018",
                "position": "Software Developer",
                "company": "Feat Systems Pvt Ltd.",
                "type": "Full-time",
                "location": "Borivali, Mumbai, India",
                "jobdescription": "I have worked on various RPA tools like UiPath and WorkFusion. I had also worked on two client project which helped them to reduce their repetitive work drastically along with that I worked on Chat Bot made in Python and have used Flask(Python 3) and MongoDB."
            },
            {
                "startdate": "05/2019",
                "enddate": "08/2019",
                "position": "Software Developer Engineers Intern",
                "company": "Amazon",
                "type": "Intern",
                "location": "New York, New York, USA",
                "jobdescription": `1. Created a tour for the seller website that helps the user navigate and gives information about newly introduced features.
                               2. Used technologies like Java for the backend and React framework for frontend.
                               3. Designed an algorithm to display user dashboard based on preference loaded from DynamoDB.`
            }
        ];

        return defaultExp;
    };

    workExRender = () => {
        const data = this.callWorkExAPI();

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

    callEducationAPI = () => {
        const defaultExp = [
            {
                "startdate": "08/2018",
                "enddate": "12/2019",
                "university": "Stevens Institute of Technology",
                "degree": "M.S. in Computer Science",
                "gpa": "3.82/4",
                "courses": ["Algorithms", "Web programming", "Web Mining", "Principles of Programming Languages"],
                "location": "Hoboken, NJ, USA",
                "description": ""
            },
            {
                "startdate": "08/2013",
                "enddate": "07/2017",
                "university": "University of Mumbai",
                "degree": "B.E. in Computer Engineering",
                "gpa": "8.82/10",
                "courses": ["Soft Computing", "Machine Learning", "Database Management Systems", "Data Structures"],
                "location": "Mumbai, India",
                "description": ""
            }
        ];

        return defaultExp;
    };

    educationRender = () => {
        const data = this.callEducationAPI();

        const education = data.map((value, idx) =>
            <div id={"education" + idx} className="row eductionitem">
                <div className="col-1"/>

                <div className="col-3">
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

    callProjectsAPI = () => {
        const defaultProject = [
            {
                "name": "Restaurants suggestion",
                "title": "Course project for Data Mining",
                "place": "Hoboken, NJ",
                "startdate": "02/2019",
                "enddate": "05/2019",
                "description": "Developed a web application for providing restaurant suggestion based on user’s choice of preference for\n" +
                    "ambience, food, service. Developed an algorithm to classify the reviews based on aspect I.e. classification based on aspect"
            },
            {
                'name': 'JSNumpy',
                'title': 'Contribution to open source project',
                'place': 'Mumbai, India',
                'startdate': '12/2017',
                'enddate': '12/2017',
                'description': 'Developed a JavaScript based library similar to Numpy in Python which is used to perform complex matrix\n' +
                    'operations in JavaScript. Published this library on Node Package Manager (NPM) (https://www.npm.js.com/package/jsnumpy)'
            },
            {
                'name': 'Providing Dietary Recommendation using Artificial Intelligence',
                'title': 'Final year undergraduate project',
                'place': 'Mumbai, India',
                'startdate': '09/2017',
                'enddate': '09/2017',
                'description': 'Collected data using web scraping using publically available APIs for nutrient content of various food items.\n' +
                    'Created a chromosome which is the basic unit for genetic algorithm depending upon the person’s intake.\n' +
                    'Used technologies like MongoDB, Express, Node.js and JavaScript.'
            }
        ];
        return defaultProject;
    };

    projectRender = () => {
        const data = this.callProjectsAPI();

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

    callSkillsAPI = () => {
        const defaultSkills = [
            {
                'category': 'programming skills',
                'name': 'Python',
                'totaldash': '35',
                'activedash': '35'
            },
            {
                'category': 'programming skills',
                'name': 'JavaScript',
                'totaldash': '35',
                'activedash': '35'
            },
            {
                'category': 'programming skills',
                'name': 'Java',
                'totaldash': '35',
                'activedash': '30'
            },
            {
                'category': 'programming skills',
                'name': 'Scala',
                'totaldash': '35',
                'activedash': '20'
            },
            {
                'category': 'frameworks',
                'name': 'Node.js',
                'totaldash': '35',
                'activedash': '33'
            },
            {
                'category': 'frameworks',
                'name': 'Bootstrap',
                'totaldash': '35',
                'activedash': '25'
            },
            {
                'category': 'frameworks',
                'name': 'React',
                'totaldash': '35',
                'activedash': '25'
            },
            {
                'category': 'database',
                'name': 'MongoDB',
                'totaldash': '35',
                'activedash': '25'
            },
            {
                'category': 'database',
                'name': 'MySQL',
                'totaldash': '35',
                'activedash': '25'
            },
            {
                'category': 'database',
                'name': 'PostgreSQL',
                'totaldash': '35',
                'activedash': '28'
            },
            {
                'category': 'version control',
                'name': 'GitHub',
                'totaldash': '35',
                'activedash': '27'
            }

        ];
        return defaultSkills;
    };

    skillsRender = () => {
        const data = this.callSkillsAPI();
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

    render() {
        switch (this.props.activeTab) {
            case 'profile':
                return (
                    <div className="profile">
                        {this.profileRender()}
                    </div>
                );

            case 'workexp':
                return (
                    <div className="workexp">
                        {this.workExRender()}
                    </div>
                );

            case 'education':
                return (
                    <div className="educationexp">
                        {this.educationRender()}
                    </div>
                );

            case 'skills':
                return (
                    <div className="skills">
                        {this.skillsRender()}
                    </div>
                );

            case 'projects':
                return (
                    <div className="projects">
                        {this.projectRender()}
                    </div>
                );

            default:
                return (
                    <div>
                        Something went wrong;
                    </div>
                );
        }
    }
}
//
//
// const getWorkExperience = () => {
//     defaultExp = {
//         "workex1": {
//             "startdate": "06/01/2017",
//             "enddate": "07/02/2018",
//             "position": "Software Developer",
//             "company": "Feat Systems Pvt Ltd.",
//             "type": "Full-time",
//             "location": "Borivali, Mumbai, India",
//             "jobdescription": "I have worked on various RPA tools like UiPath and WorkFusion. I had also worked on two client project which helped them to reduce their repetitive work drastically along with that I worked on Chat Bot made in Python and have used Flask(Python 3) and MongoDB."
//         },
//         "workex2": {
//             "startdate": "05/27/2019",
//             "enddate": "08/09/2019",
//             "position": "Software Developer Engineers Intern",
//             "company": "Amazon",
//             "type": "Intern",
//             "location": "New York, New York, USA",
//             "jobdescription": `1. Created a tour for the seller website that helps the user navigate and gives information about newly introduced features.
//                                2. Used technologies like Java for the backend and React framework for frontend.
//                                3. Designed an algorithm to display user dashboard based on preference loaded from DynamoDB.`
//         }
//     };
//
//     return defaultExp;
// };
//
// const loadWorkExp = () => {
//     rootNode = document.getElementById("middleSection");
//
//     workEx = getWorkExperience();
//
// };