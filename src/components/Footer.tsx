import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 10px;
    background-color: #4fc3f7;
    color: white;
    text-align: center;

    @media screen and (max-width: 750px) {
        margin: 0;

        p {
            margin: 0;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All rights reserved by Truc Duong {' '}
                <Link to="/credits">Credits</Link> &copy; 2024
            </p>
        </StyledFooter>
    )

}