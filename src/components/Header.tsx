import styled from 'styled-components';

interface HeaderProps {
    name: string;
    tagline: string;
}

const StyledHeader = styled.header`
    padding: 20px;
    background-color: #e0f7fa;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

function Header( {name, tagline}: HeaderProps ) {
    return (
        <StyledHeader>
            <h1>{name}</h1>
            <p>{tagline}</p>
        </StyledHeader>
    )

}

export default Header;