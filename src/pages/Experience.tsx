import PageLayout from '../components/PageLayout';
import styled from 'styled-components';

const ExperienceCont = styled.div`
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f8ff;

    ul {
        margin-left: 20px;
    }

    @media screen and (max-width:750px) {
        ul {
            list-style-type: none;
            margin: 0;
        }  
    }
`

const ExperienceInnerCont = styled.div`
    margin-bottom: 20px;
    padding-bottom: 3em;
`

function Experience() {
    return (
        <PageLayout headerProps={{ name: 'Truc Duong', tagline: 'Professional Experience' }}>
            <ExperienceCont>
                <h2>Professional Experience</h2>
                <ExperienceInnerCont>
                    <h3>Software Engineer Intern | Red Hat - AAP Gateway Team | Boston, MA</h3>
                    <p><em>May 2024 - Aug 2024</em></p>
                    <ul>
                        <li>Resolved multi-scale bug fixes, test improvements, and tech debt reduction using Django, Pytest, and containerization, ranking among top 7 contributors in two upstream repositories.</li>
                        <li>Implemented 3 features for the Ansible Automation Platform’s 2.5 release, including enhancements to Ansible setting preferences and RBAC roles.</li>
                        <li>Optimized the CI/CD pipeline with Jenkins and GitLab CI/CD, accelerating deployments and improving code quality in an Agile-driven environment.</li>
                        <li>Secured API endpoints, incorporating encryption protocols and JWT token management for improved security.</li>
                    </ul>
                </ExperienceInnerCont>
            
                <ExperienceInnerCont>
                    <h3>Java Developer Intern | Rabiloo | Vietnam</h3>
                    <p><em>Aug 2023 - Oct 2023</em></p>
                    <ul>
                        <li>Optimized performance of 4 Java applications by debugging and refactoring code, resulting in a 30% reduction in load times and fewer runtime errors.</li>
                        <li>Collaborated with cross-functional teams to analyze project requirements and contribute to effective planning and execution.</li>
                    </ul>
                </ExperienceInnerCont>
            
                <ExperienceInnerCont>
                    <h3>Software Product Sprint Participant | Google</h3>
                    <p><em>Jun 2022 - Aug 2022</em></p>
                    <ul>
                        <li>Developed a web application for dining decisions using JavaScript, HTML, and CSS, leading to a 40% increase in user engagement compared to the app draft.</li>
                        <li>Integrated Google Cloud APIs for real-time restaurant recommendations based on user location and food preferences.</li>
                        <li>Enhanced app features with Google Maps API and a personalized restaurant suggestion system.</li>
                        <li>Expanded functionality with a Recipes page and FoodFeed feature, creating an engaging social media experience.</li>
                    </ul>
                </ExperienceInnerCont>
            </ExperienceCont>
        </PageLayout>
    );
}

export default Experience;
