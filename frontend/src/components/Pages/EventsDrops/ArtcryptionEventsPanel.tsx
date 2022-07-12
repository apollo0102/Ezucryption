import Calendar from './Calendar';
import styled from  '@emotion/styled';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined';
import { Button } from '@mui/material';
import NewEventSidebar from './NewEventSideBar';
import LiveEVentSideBar from './LiveEventSideBar';

const ArtcryptionEventsPanel = () => {

    return (
        <Container>
            <Wrapper>
                <CalendarHeading>
                <Button><ArrowBackIosOutlined /></Button>
                    <h3>December 2021</h3>
                    <Button><ArrowForwardIosOutlined /></Button>
                </CalendarHeading>
                <Calendar />
            </Wrapper>
            <Wrapper  className='sidebar'>
                <NewEventSidebar />
            </Wrapper>
            <Wrapper className='sidebar-right'>
                <LiveEVentSideBar />
            </Wrapper>
        </Container> 
    )
}
export default ArtcryptionEventsPanel;

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
gap:20px;
margin-bottom:120px;
@media (max-width: 858px) {
    flex-wrap:wrap;

}
@media (max-width: 500px) {
    flex-direction:column;

}
`
const Wrapper = styled.div`
background: #FFFFFF;
border: 1.59411px solid #D2D2D6;
border-radius: 15.9411px;
width: 50%;
height: fit-content;
padding: 15px;
z-index: 1;
@media (max-width: 858px) {
    width:100%;
    display:flex;
    flex-direction:column;
}

&.sidebar{
    width: 30%;
    position: relative;
    @media (max-width: 858px) {
        width:48%;
    }
   
}
&.sidebar-right{
    width: 20%;
    @media (max-width: 858px) {
        width:47%;
    }
    @media (max-width: 858px) {
        width:47%;
    }
    
}
`

const CalendarHeading = styled.div`
display:flex;
flex-direction:row;
`