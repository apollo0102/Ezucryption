import styled from  '@emotion/styled'
import { Avatar } from '@mui/material';

const headings = [
    { title: "Users" },
    { title: "% Split" },
    { title: "Terms" },
    { title: "Role" },
    { title: "Token Address" },
    { title: "Action" },
  ];

const PrimaryRoyaltyTable = () =>{    
    return(
        <Container>
            <HeadingContainer>
            {headings.map(({ title }) => (
                <Heading> {title}</Heading>
                ))}
            </HeadingContainer>
            <ContentWrapper>
                <ContentContainer
                    style={{display:'flex', justifyContent: 'space-between', alignItems:'center'}}
                >
                    <UserCard
                         style={{
                                display:'flex',  
                                alignItems:'center',
                                width:'200px'
                            }}
                    >
                        <Avatar
                            src={`/images/curators/curator-1.jpg`}
                            style={{marginRight:'20px'}}
                        >
                        </Avatar>
                        Leslie Alexendar
                    </UserCard>
                    <Items>
                        1%
                    </Items>
                    <Items>
                        One Year
                    </Items>
                    <Items>
                        Currator
                    </Items>
                    <Items>
                        1%
                    </Items>
                    <Items>
                        Oxg...89gb
                    </Items>
                    <Items>
                        <Button>Terminate</Button>
                        <Button>Pause</Button>
                    </Items>
                </ContentContainer>
            </ContentWrapper>
        </Container>
    )

}
export default PrimaryRoyaltyTable

const Container = styled.div`
margin-top:3.5rem;
margin-bottom:6rem
    
`
const Heading = styled.div`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #000000;
opacity: 0.5;

`

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;


`
const ContentWrapper = styled.div`{
width:100%;
display:flex;

}`
const ContentContainer = styled.div`{
    display:flex;
    justify-content:space-between;
    width:100%;

}`

const UserCard= styled.div`
backgound:red;

`
const Items = styled.div`{
background:red;
}`
const Button = styled.button`{

}`