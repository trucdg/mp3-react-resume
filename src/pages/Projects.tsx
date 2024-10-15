import PageLayout from '../components/PageLayout';
import styled from 'styled-components';

const ProjectsCont = styled.div`
    adding-bottom: calc(2em + 50px);
`

const SingleProjectCont = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: calc(2em + 50px);

    img {
        max-width: 200px; /* Adjust as needed */
        margin-right: 20px;
        border-radius: 5px;
    }

    @media screen and (max-width:750px) {
        flex-direction: column;
        align-items: center;

        img {
            margin-right: 0;
            margin-bottom: 10px;
            max-width: 100%;
        }
    }
`

const ProjectDetail = styled.div`

    a {
        color: #bd1cb3;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        color: #008d18;
        text-decoration: underline;
    }

    h3 {
        font-size: 1.7em;
        color: #4b8baf; /* Lighter blue for job titles */
        margin-bottom: 5px;
    }

    p {
        font-size: calc(1vw + 0.5rem);
    }
`

function Projects() {
    return (
        <PageLayout headerProps={{ name: 'Truc Duong', tagline: 'Projects' }}>
            <ProjectsCont>
                <h2>Projects</h2>
                
                <SingleProjectCont>
                    <img src="/chat-app.png" alt="MyChatApp"/>
                    <ProjectDetail>
                        <h3>MyChatApp <a href="https://github.com/trucdg/my-chat-app" target="_blank">GitHub</a></h3>
                        <p>Created a full-stack real-time messaging application using the MERN stack, enhancing user communication with features like instant message delivery and chat history storage in MongoDB Atlas.</p>
                        <p>Accomplished secure user authentication with JsonWebToken (JWT) and Bcrypt.Js, ensuring robust protection of user data and seamless login experiences.</p>
                    </ProjectDetail>
                </SingleProjectCont>
                
                <SingleProjectCont>
                    <img src="/tripplanner.png" alt="TripPlanner"/>
                    <ProjectDetail>
                        <h3>TripPlanner <a href="https://github.com/trucdg/CS411_Team08_TripPlanner" target="_blank" >GitHub</a></h3>
                        <p>Developed a dynamic and responsive web application by leveraging a decoupled architecture with React for front-end and Flask-Python for back-end, resulting in an improvement in platform scalability and robustness.</p>
                        <p>Enhanced traveler experience by integrating public APIs for real-time weather updates and hotel searches, providing users with more accurate and up-to-date information, thereby notably increasing user satisfaction.</p>
                        <p>Boosted user engagement by 25% through Supabase database implementation with seamless CRUD operations and GitHub Authentication for personalized user experiences.</p>
                    </ProjectDetail>
                </SingleProjectCont>
            </ProjectsCont>
        </PageLayout>
    );
}

export default Projects;
