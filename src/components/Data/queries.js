import gql from "graphql-tag";

const GET_email = gql`
    query {
        email
    }
`;

const GET_phone = gql`
    query {
        phone
    }
`;

const GET_stay = gql`
    query {
        stay
    }
`;

const GET_resumeLink = gql`
    query {
        email
    }
`;

const GET_workexps = gql`
    query {
        workexps {
            startdate
            enddate
            position
            company
            type
            location
            jobdescription
        }
    }
`;

const GET_educations = gql`
    query {
        educations {
            startdate
            enddate
            university
            degree
            gpa
            courses
            location
            description
        }
    }
`;

const GET_skills = gql`
    query {
        skills {
            category
            name
            totaldash
            activedash
        }
    }
`;

const GET_projects = gql`
    query {
        projects {
            name
            title
            place
            startdate
            enddate
            description
        }
    }
`;

const GET_profile = gql`
    query {
        profile {
            bio
        }
    }
`;

export default {
    GET_email,
    GET_phone,
    GET_stay,
    GET_resumeLink,
    GET_workexps,
    GET_educations,
    GET_skills,
    GET_profile,
    GET_projects
};