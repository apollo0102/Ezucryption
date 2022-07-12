import styled from  '@emotion/styled';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import NotesIcon from '@mui/icons-material/Notes';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const NewEventSidebar = () => {
    return (
        
        <NewEventContainer>
            <NewEventHeading>
                <h3>Create a new event</h3>
            </NewEventHeading>
            <NewEventBody>
                <NewEventBodyItem>
                    <NewEventBodyItemInput placeholder='Event Title' />
                </NewEventBodyItem>
                <Spacer />
                <NewEventBodyItem>
                    <NewEventBodyItemHeading>Event Type</NewEventBodyItemHeading>
                </NewEventBodyItem>
                <NewEventBodyItem>
                    <EventButton>Exhibition</EventButton>
                    <EventButton className='drop'>Drop</EventButton>
                </NewEventBodyItem>
                <Spacer />
                <NewEventBodyItem>
                    <NewEventBodyItemHeading>EVENT DETAILS</NewEventBodyItemHeading>
                </NewEventBodyItem>

                <NewEventBodyItem>
                    <AccessTimeIcon />
                    <ItemWrapper>
                        <Item>12:00 AM - 01:00 PM</Item>
                        <p>Friday May, 3</p>
                    </ItemWrapper>
                    <CalendarMonthIcon  />
                </NewEventBodyItem>
                <Spacer />
                <NewEventBodyItem>
                    <EventButton className='drop'>Add Host</EventButton>
                    <EventButton >Add Currator(s)</EventButton>
                </NewEventBodyItem>
                <NewEventBodyItem>
                    <EventButton >Add Creator</EventButton>
                    <EventButton >Add Asset</EventButton>
                </NewEventBodyItem>
                </NewEventBody>
                <Spacer />
            <NewEventFooter>
                <NewEventFooterItem>
                    <AddLocationIcon />
                    <input type='text' placeholder='Add URL or Physical Location' />
                </NewEventFooterItem>
                <NewEventFooterItem>
                    <NotesIcon />
                    <input type='text' placeholder='Add Description' />
                </NewEventFooterItem>
                <NewEventFooterItem>
                    <NewEventFooterItemButton>Add Event</NewEventFooterItemButton>
                </NewEventFooterItem>
        </NewEventFooter>
        </NewEventContainer>

    )
}
export default NewEventSidebar
// Language: typescript
// Path: art-cryption\src\components\Pages\EventsDrops\ArtcryptionEventsPanel.tsx
// Compare this snippet from art-cryption\src\components\Pages\EventsDrops\ArtcryptionEventsPanel.tsx:
// import Calendar from './Calendar';
const NewEventContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding:20px;
    background: #FFFFFF;
    `
const NewEventHeading = styled.div`
margin-bottom:15px;
&>h3{
    font-family: 'Kern';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #000000;

}
`
const NewEventBody = styled.div`
`
const NewEventBodyItem = styled.div`
margin-bottom:10px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;

`
const Spacer = styled.div  `

margin-bottom:20px;
`
const NewEventBodyItemHeading = styled.h3`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 16px;
`
const NewEventBodyItemInput = styled.input`
background: #F7F9FA;
border: 1.59411px solid #F5F5F5;
border-radius: 15.9411px;
width: 100%;
outline: none;
padding: 10px 15px;
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 16px;
&::placeholder{
    color: rgba(0, 0, 0, 0.3);
}
`
const NewEventFooter = styled.div`
display:flex;
flex-direction:column;
`
const NewEventFooterItem = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-top:20px;
color: #5A5B6A;;
&>input{
    font-family: 'Kern';
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    margin-left:10px;
    outline: none;
    border: none;
    color: #5A5B6A;
    width:250px;
}
`
const NewEventFooterItemButton = styled.button`
border:none;
background: #ACC2CF;
border-radius: 14.2744px;
padding:15px 20px;
width:100%;
font-size:16px;
font-weight:700;
color:#FFFFFF;
font-family: 'Kern';
`

const EventButton = styled.button`
border:none;
outline:none;
cursor:pointer;
background: #D6C7CF;
border-radius: 12.7529px;
padding:10px 20px;
font-size:16px;
color:#FFFFFF;
&.drop{background: #908089;}
`

const ItemWrapper = styled.div`
display:flex;
flex-direction:column;
&>p{color: #9696A0;}
`
const Item = styled.div`
color: #19191D;
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;

`
