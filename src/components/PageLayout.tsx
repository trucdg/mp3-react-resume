import React from 'react';
import { styled } from 'styled-components';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Wrapper = styled.div`
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 5px 10px;
    padding: 10px 10px;
    background-color: #f0f8ff;
    color: #333;
    box-sizing: border-box;

    p {
        font-size: calc(1.1vw + 0.8rem);
        margin: 10px auto;
        color: #4b8baf;
    }
        
    h1 {
        font-size: calc(1.5vw + 1rem);
        font-weight: bold;
        color: #007bb5;
        margin: 10px auto;
    }
    
    h2 {
        font-size: calc(1.3vw + 1rem);
        color: #0175ab;
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }

`;

interface PageLayoutProps {
    headerProps: {
        name: string,
        tagline: string
    };
    children: React.ReactNode; // allows nested components
}

export default function PageLayout( { headerProps, children} : PageLayoutProps) {
    return (
        <Wrapper>
            <Header name={headerProps.name} tagline={headerProps.tagline} />
            <Nav />
            <Main> { children }</Main>
            <Footer />
        </Wrapper>
    )
}