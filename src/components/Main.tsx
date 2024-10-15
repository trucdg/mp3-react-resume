import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    width: 70%; 
    height: 100vh;
    float: right;
 
    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
        float: none;
        display: block;
    }
`

function Main({ children }: { children: React.ReactNode }) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    );
}

export default Main;
