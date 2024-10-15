import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
const EducationCont = styled.div`
    padding: 20px;
    margin: 20px auto;
    max-width: 1000px;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        padding: 20px;
        background-color: #e0f7fa;
        border-radius: 8px;
    }
    
    img {
        padding-right: 2em;
        width: calc(5ww + 100px);
    }
    
    p {
        font-size: calc(1vw + 0.5rem);
        color: #4e4d4d;
        justify-content: space-between;
        padding-bottom: 5px;    
    }

    @media screen and (max-width: 750px) {
        div {
            flex-direction: column;
            text-align: center;
            margin-top: 20px;
        }

        img {
            padding: 0;
        }

    }
`

const EducationInfoCont = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    a {
        text-decoration: none;
        color: #007bb5;
        padding: 10px 20px;
        border: 1px solid #007bb5;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a:hover {
        background-color: #007bb5;
        color: #fff;
    }
`

function Education() {
    return (
        <PageLayout headerProps={{ name: 'Truc Duong', tagline: 'Education Background' }}>
            <div>
            <h2>Education</h2>
            <EducationCont id="education-cont" className="section">
                <div>
                    <img src="/bu.jpg" alt="Boston University" />
                    <EducationInfoCont>
                        <p> <strong>BOSTON UNIVERSITY</strong> | Boston, MA</p>
                        <p>Expected 2024</p>
                        <p><em>Bachelor of Arts in Computer Science</em></p>
                        <p><em>Cumulative GPA: 4.0</em></p>
                        <a href="https://drive.google.com/file/d/1HWRWzrjjRTWiHIRkA-YZNxF2D1kIelOO/view?usp=sharing" target="_blank">Transcript</a>
                    </EducationInfoCont>
                </div>

                <div>
                    <img src="/quincy-college.jpg" alt="Quincy College" />
                    <EducationInfoCont>
                        <p> <strong>QUINCY COLLEGE</strong> | Quincy, MA</p>
                        <p>Feb 2018 - May 2019</p>
                        <p><em>Associate of Science in Mathematics</em></p>
                        <p><em>GPA: 4.0</em></p>
                        <a href="https://drive.google.com/file/d/1XfOQRfMrfXAC3ROeLVJvaCoyoiTzMPr7/view?usp=sharing" target="_blank">Transcript</a>
                    </EducationInfoCont>
                </div>
            </EducationCont>
            </div>
        </PageLayout>
    );
}

export default Education;
