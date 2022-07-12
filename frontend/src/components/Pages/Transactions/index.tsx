import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import TransactionTabs from './TransactionTabs';

const Transactions = () => {
    return(
        <StyledContainer>
            <Header>
                <h2>Transactions</h2>
            </Header>
            <Body>
                <TransactionTabs />
            </Body>
        </StyledContainer>

    )

}
export default Transactions

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