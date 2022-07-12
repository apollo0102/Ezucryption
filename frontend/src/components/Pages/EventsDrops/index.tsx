import Calendar from './Calendar';
import {Container} from '@mui/material'
import styled from '@emotion/styled';
import EventDropsTabs from './EventDropsTabs';
import SectionTabs from './SectionTabs';
import { SearchOutlined } from '@mui/icons-material';

const EventsDrops = () => {
return (
    <div>
    <StyledContainer>
        <Header>
             <h2>Calendar</h2>
             <Legends>
                    <Legend><Circle /> <p>drops</p> </Legend>
                    <Legend ><Circle className='virtual' /> <p>virtual exhibition</p> </Legend>
                    <Legend ><Circle className='in-person' /> <p>in-person exhibition</p> </Legend>
             </Legends>
        </Header>
        
        <EventDropsTabs />
        <SecondSection>
            <h3>EVENTS</h3>
            {/* <SearchSection>
                <SearchInput placeholder='Search Events' />
                <SearchOutlined />
            </SearchSection> */}
            <SectionTabs />
        </SecondSection>
    </StyledContainer>
    </div>
)
}
export default EventsDrops;


const StyledContainer = styled.div`
margin:0 auto;
width:90%;
margin-top:130px;
padding:0;
position:relative;
`
const Header = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
&>h2{
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 40.9822px;
line-height: 60px;
color: #000000;
text-transform: uppercase;
}
`
const Legends = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
margin-bottom:-70px;

`
const Legend = styled.div`
display:flex;
flex-direction:row;
align-items:center;
&>p{
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 22.3175px;
line-height: 27px;
}
`
const Circle = styled.div`
height:10px;
width:10px;
background-color: #CBAACE;
border-radius:50%;
margin-right:15px;
&.in-person{
background-color:#A6C8A9;
}
&.virtual{
background-color:#95D4EF;
}
` 
const SecondSection = styled.div`
margin-top:-250px;
position:relative;
display:flex;
flex-direction:column;
max-width:70%;

@media (max-width: 858px) {
   margin-top:0px;
   max-width:100%;
   width:100%;
}
`
const SearchSection = styled.div`
display:flex;
flex-direction:row;
align-items:center;
border: 1.59411px solid #F5F5F5;
border-radius: 15.9411px;
color: rgba(0, 0, 0, 0.3);
width: 250px;
justify-content:space-between;
position:absolute;
right:30%;
bottom:0;

`
const SearchInput = styled.input` 
outline: none;
padding: 10px 15px;
font-family: 'Kern';
font-style: normal;
font-size: 14px;
border: none;
background: transparent;


`
