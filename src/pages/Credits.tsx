import PageLayout from '../components/PageLayout';
import styled from 'styled-components';

const CreditCont = styled.div`

    margin-bottom: 7em;

    @media screen and (max-width: 750px) {
        text-align: center;

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 0;
            margin: 0;
        }
    }
`

function Credits() {
    return (
        <PageLayout headerProps={{ name: 'Truc Duong', tagline: 'Credits' }}>
            <CreditCont>
            <h2>Credits</h2>
            <p>Below are the sources I referenced while building the website</p>
            <section>
                <h2>Image Sources</h2>
                <ul>
                    <li>Profile picture: <a href="https://www.linkedin.com/in/trucduong0301/" target="_blank">LinkedIn</a></li>
                    <li>Calculator project image: <a href="https://dribbble.com/shots/5885738-Und-cimo-Calculator" target="_blank">Dribble</a></li>
                    <li>Certifications: <a href="https://www.linkedin.com/in/trucduong0301/details/certifications/" target="_blank">LinkedIn Certifications</a></li>
                </ul>
            </section>

            <section>
                <h2>Tools and Libraries</h2>
                <ul>
                    <li>Website built using: HTML5, CSS3, and JavaScript</li>
                    <li>CSS Syntax: <a href="https://www.w3schools.com/css/css_syntax.ASP" target="_blank">W3School</a></li>
                </ul>
            </section>

            <section>
                <h2>Other Credits</h2>
                <ul>
                    <li>BU CS391 Course lecture slides</li>
                    <li>BU CS391 Discussion slides</li>
                </ul>
            </section>
            </CreditCont>
        </PageLayout>
    );
}

export default Credits;
