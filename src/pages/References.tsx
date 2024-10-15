import PageLayout from '../components/PageLayout';
import styled from 'styled-components';

const RefCont = styled.div`
    table {
        border-collapse: collapse;
        margin: 20px 30px;
        font-size: calc(1.5em - 10px);
        box-sizing: border-box;
    }

    th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #007bb5;
        color: white;
    }

    td a {
        color: #928892;
        text-decoration: none;
    }

    td a:hover {
        text-decoration: underline;
        color: #bd1cb3;
    }

    @media screen and (max-width:750px) {
        table {
            margin: 20px auto;
            font-size: calc(0.8em + 5px);
            margin-bottom: 8em;
        }
    }
`

function References() {
    return (
        <PageLayout headerProps={{ name: 'Truc Duong', tagline: 'References' }}>
            <h2>My References</h2>
            <p>Below are some of the contact information for professional references.</p>
            <RefCont>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Andy Duong</td>
                            <td>Manager</td>
                            <td>D&H Multi-Services, Inc.</td>
                            <td><a href="mailto:andy.duong@at-multiservices.com">andy.duong@at-multiservices.com</a></td>
                        </tr>
                        <tr>
                            <td>Taymaz Davoodi</td>
                            <td>CS391 Professor</td>
                            <td>Boston University</td>
                            <td><a href="mailto:tdavoodi@bu.edu">tdavoodi@bu.edu</a></td>
                        </tr>
                        <tr>
                            <td>Aaron Stevens</td>
                            <td>CS412 Professor</td>
                            <td>Boston University</td>
                            <td><a href="mailto:azs@bu.edu">azs@bu.edu</a></td>
                        </tr>
                    </tbody>
                </table>
            </RefCont>
        </PageLayout>
    );
}

export default References;
