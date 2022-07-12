import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import UserManagementTab from './UserManagementTabs';

const UserManagement = () => {
    return(
        <StyledContainer>
            <Header>
                <h2>User Managment</h2>
            </Header>
            <Body>
                <UserManagementTab />
            </Body>
        </StyledContainer>

    )

}
export default UserManagement

const StyledContainer = styled(Container)`
margin-top:100px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Header = styled.div`
display:flex;
flex-direction:row;
width:100%;
`
const Body = styled.div`

`