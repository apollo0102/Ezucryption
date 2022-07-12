const styled = require('@emotion/styled').default;
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { Avatar } from '@mui/material';
import Image from 'next/image';

const CurrentEventsPanel = () => {
    return (
        <EventsContainer>
                <Heading>
                    <h4>Yesterday, December 2nd</h4>
                    <Items>
                        <Button>View all</Button>
                    </Items>
                    <Items>
                        <Button><FilterListIcon /></Button>
                        <Sort>Sort</Sort>
                        <Button><ViewListIcon /></Button>
                        <Button><GridViewIcon /></Button>
                    </Items>
                </Heading>
                <GridContainer>
                    <GridItem className='drop'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>
                    </GridItem>
                    <GridItem className='drop'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>

                    </GridItem>

                    <GridItem className='drop'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>

                    </GridItem>


                    <GridItem className='drop'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>
                    </GridItem>
                    <GridItem className='virtual'>
                        <EventItem>
                            <h3>Virtual Event - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>

                    </GridItem>
                    <GridItem className='drop'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>
                    </GridItem>

                    <GridItem className='virtual'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>
                    </GridItem>
                    <GridItem className='drop'>
                        <EventItem>
                            <h3>Virtual Event - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
    
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>

                    </GridItem>
                    <GridItem className='virtual'>
                        <EventItem>
                            <h3>Drop - Artist XYZ</h3>
                            <p>9:00 AM - 10:00 AM</p>
                            <AvatarContainer>
                                <Avatar alt="Remy Sharp" src="/images/curators/curator-1.jpg" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-1.png" />
                                <Avatar alt="Travis Howard" src="/images/curators/avatar-2.png" />
                            </AvatarContainer>
                        </EventItem>
                        <Icons>
                            <Image
                                src={`/icons/drop.svg`}
                                alt="drop"
                                height={`25px`}
                                width={`25px`}
                            />
                        </Icons>
                    </GridItem>

                </GridContainer>
        </EventsContainer>
    )
}
export default CurrentEventsPanel;

const EventsContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;    
    `
const Heading = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
& h4{
    font-size:14px;
    color: #9696A0;
    font-weight:300;
    flex:3;
}
`
const Items = styled.div`
flex:2;
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Button = styled.button`
border:none;
outline:none;
cursor:pointer;
text-decoration:underline;
background:transparent;
color: #9696A0;
margin-right:15px;

`
const Sort = styled.div`
display:flex;
flex-direction:row;align-items:center;
justify-content:center;
cursor:pointer;
`
const GridContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:5px;
justify-content:space-between;
align-items:center;
margin-top:30px;
@media (max-width: 858px) {

    
    width: 100%;
}
`
const GridItem = styled.div`
padding:10px;
// border-right-radius:12px;
border-radius: 12.1233px;
box-shadow: 0px 0px 1.21233px rgba(0, 0, 0, 0.48), 0px 0px 4.84931px rgba(0, 0, 0, 0.12);
border-left:8px solid #D2ACB9;
display:flex;
justify-content:space-between;
max-width:32%;
width:32%;
flex-direction:row;
margin-bottom:15px;
&.virtual{
    border-left:8px solid #95D4EF;
}
@media (max-width: 858px) {
    width:48%;
    min-width:47%;
    max-width:50%;
}
@media (max-width: 500px) {
    width:100%;
    min-width:100%;
    max-width:100%;

}

    `

const EventItem = styled.div`
display:flex;
flex-direction:column;
&>h3{
    margin-bottom:10px;
    font-size:14px;
}
&>p{
    color:#6F6F6F;
    margin-bottom:10px;
}
    
`
const AvatarContainer = styled.div`
display:flex;
flex-direction:row;
    
    `
const Icons = styled.div`
height:40px;
width:40px;
border-radius:50%;
background:#CBAACE;
display:flex;
align-items:center;
justify-content:center;
margin-left:60px;

`