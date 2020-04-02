import React,{Component} from "react";

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
                "startdate": "06/01/2017",
                "enddate": "07/02/2018",
                "position": "Software Developer",
                "company": "Feat Systems Pvt Ltd.",
                "type": "Full-time",
                "location": "Borivali, Mumbai, India",
                "jobdescription": "I have worked on various RPA tools like UiPath and WorkFusion. I had also worked on two client project which helped them to reduce their repetitive work drastically along with that I worked on Chat Bot made in Python and have used Flask(Python 3) and MongoDB."
            },
            {
                "startdate": "05/27/2019",
                "enddate": "08/09/2019",
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

        const work = data.map((value,idx) =>
            <div id={"workex"+idx} className="row workExpItem">
                <div className="col-3">
                    <span className="float-right ">
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
                                    {value['company']}
                                </span>
                                <span className="location">
                                    &nbsp; {value['location']}
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
                "location":"Hoboken, NJ, USA",
                "description": ""
            },
            {
                "startdate": "08/2013",
                "enddate": "07/2017",
                "university": "University of Mumbai",
                "degree": "B.E. in Computer Engineering",
                "gpa": "8.82/10",
                "courses": ["Soft Computing", "Machine Learning", "Database Management Systems", "Data Structures"],
                "location":"Mumbai, India",
                "description": ""
            }
        ];

        return defaultExp;
    };

    educationRender = () => {
        const data = this.callEducationAPI();

        const education = data.map((value,idx) =>
            <div id={"education"+idx} className="row eductionItem">
                <div className="col-3">
                    <span className="float-right ">
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
                                    <b>{value['university']}</b>
                                </span>
                                <br/>
                                <span className="company">
                                    <i>{value['degree']}</i>,
                                </span>
                                <span className="location">
                                    &nbsp; <i>GPA: {value['gpa']}</i>
                                </span>
                                <br/>
                                <span className="jobdescription">
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
                break;

            case 'hobbies':
                break;

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