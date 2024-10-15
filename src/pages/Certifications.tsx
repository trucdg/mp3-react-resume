import PageLayout from '../components/PageLayout';
import styled from 'styled-components';

const CertCont = styled.div`
    padding-bottom: 5em;
`

const CertGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    justify-items: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

const CertItem = styled.div`
    text-align: center;

    p {
        font-size: 1.1em;
        color: #0175ab;
    }

    img {
        max-width: 300px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
    }

    @media screen and (max-width: 750px) {
        img {
            max-width: 100%;
        }
    }   
`


function Certifications() {
    return (
        <PageLayout headerProps={{ name: 'Your Name', tagline: 'Certifications' }}>
            <CertCont>
                <h2>My Certifications</h2>
                <p>Below are some of the certifications I have earned over the years:</p>
                
                <CertGrid>
                    <CertItem>
                        <img src="/cert1.png" alt="Google Software Product Sprint" />
                        <p>Google Software Product Sprint</p>
                    </CertItem>
                    <CertItem>
                        <img src="/cert2.png" alt="Code Path Participant" />
                        <p>Code Path Participant</p>
                    </CertItem>
                    <CertItem>
                        <img src="/cert3.png" alt="Scrum Basics" />
                        <p>Scrum Basics</p>
                    </CertItem>
                    <CertItem>
                        <img src="/cert4.png" alt="KPKG Certificate" />
                        <p>KPKG Certificate</p>
                    </CertItem>
                </CertGrid>
            </CertCont>
        </PageLayout>
    );
}

export default Certifications;
