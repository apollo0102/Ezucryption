import styled from '@emotion/styled'
import MinimizeIcon from '@mui/icons-material/Minimize';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const LiveEVentSideBar = () => {
    return (
        <Container>
            <Wrapper>
                <StyledButton>
                    <MinimizeIcon
                    sx={{marginTop: '-15px'}}
                    
                    />
                </StyledButton>
            </Wrapper>
            <Wrapper>
                <h3>Drop - XYZ Artist </h3>
            </Wrapper>
            <Wrapper>
                <h4>9:00 AM - 10:00 AM</h4>
            </Wrapper>
            <Wrapper>
                <p>Friday December 22</p>
            </Wrapper>
            <Wrapper>
                <h3>Host(s) </h3>
                <ImagesContainer>
                    <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-3.png" />
                    
                </ImagesContainer>
            </Wrapper>
            <Wrapper>
                <h3>Creator(s) </h3>
                <ImagesContainer>
                    <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-3.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-4.png" />
                    <Avatar alt="Remy Sharp" src="/images/curators/curator-3.jpg" />
                    <Add>
                        <AddIcon />
                    </Add>
                    
                </ImagesContainer>
            </Wrapper>
            <Wrapper>
                <h3>Curator(s) </h3>
                <ImagesContainer>
                    <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                    <Avatar alt="Travis Howard" src="/images/curators/avatar-3.png" />
                    
                </ImagesContainer>
            </Wrapper>
            <Wrapper>
                <p>http://xwz.com</p>
            </Wrapper>
            <Wrapper>
                <p>Add Description</p>
            </Wrapper>
        </Container>

    )   
}

export default LiveEVentSideBar
const Container = styled.div`

`
const Wrapper   = styled.div`
margin-bottom:30px;

&>h4{
    color:#6F6F6F;
}
&>p{
    color:#9696A0;
}
`

const StyledButton = styled.div`
cursor:pointer;
background-color: #D2D2D6;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;

`
const ImagesContainer   = styled.div`
display:flex;
flex-direction:row;
gap:10px;
flex-wrap:wrap;

`
const Add=styled(Avatar)`
background-color: #fff;
color: #9696A0;
border:1px dotted #9696A0;
cursor:pointer;
`