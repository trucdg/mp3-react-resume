import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: block;
    width: 30%; /* Occupy 30% of the width */
    float: left;
    font-size: calc(1.2em + 5px);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    li {
        margin: 20px 0;
    }

    a {
        text-decoration: none;
        color: #007bb5; 
        padding: 1em;
        display: block;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    a:hover {
        color:whitesmoke;
        background-color: #f472e9;
    }
    
    @media screen and (max-width: 750px) {
        float: none;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        background-color: #e0f7fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: calc(1vw + 0.45rem);
        font-weight: bold;
        margin: 0;
        padding: 0;

        li {
            display: inline-block;
            margin: 0;
            padding: 0;
        }
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/references">Refs</Link></li>
            </ul>
        </StyledNav>
    )
    
}