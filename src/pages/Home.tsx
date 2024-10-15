import PageLayout from "../components/PageLayout";
import styled from "styled-components";

const HomeMainCont = styled.div`
    display: flex;
    align-items: center;
    gap: 3em;
    margin: 1em;

    #profile-pic {
        width: calc(20vw + 50px);
    }

    @media screen and (max-width: 750px) {
        display: block;
    }
`

const HomeMainLeft = styled.div`
    flex: 1;
    @media screen and (max-width: 750px) {
        display: block
    }
`

const HomeMainRight = styled.div`
    flex: 2;
    @media screen and (max-width: 750px) {
        display: block
    }
`

const StyledMainP = styled.p`
    padding-bottom: 6em;

    @media screen and (max-width: 750px) {
        font-size: calc(1vw + 0.45rem);
    }
    
`


export default function Home() {
    return(
        <PageLayout headerProps={{name: 'Truc Duong', tagline: 'My Online Resume'}}>
            <h2>Welcome to My Online Resume</h2>
            <HomeMainCont>
                <HomeMainLeft>
                    <img src="/profile-pic.png" id="profile-pic"/>
                </HomeMainLeft>
                <HomeMainRight>
                    <StyledMainP>
                        👋 Greetings, everyone! I'm Truc, a Computer Science senior at Boston University, ready to embrace the world of technology with open arms! 🎓💻  <br/>
                        As a dedicated individual, I believe in the power of hard work and resilience. Being a first-generation student has instilled in me a tenacious spirit and a determination to overcome obstacles. I am excited to bring my unique perspective and fresh ideas to the table. <br/> 
                        I am eager to connect with like-minded individuals, industry professionals, and organizations that value innovation, diversity, and continuous growth. <br/>
                        Here's a mantra that keeps me going, inspired by the anime Haikyuu: "Joining a group of passionate people and not giving your best is the rudest thing you can do." <br/>
                        Let's collaborate and drive positive change together: 📩 Email: trucdg@bu.edu
                    </StyledMainP>
                </HomeMainRight>
            </HomeMainCont>
        </PageLayout>
    )
}