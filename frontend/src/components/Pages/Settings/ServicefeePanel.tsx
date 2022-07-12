import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const ServiceFeePanel = () => {
    return (
        <Container>
            <CardWrapper>
                <Card>
                    <h3>Service Fees</h3>
                    <ButtonContainer>
                        <Button className="service-fee">Service Fee</Button>
                        <Paragraph>15% Default Platform Fee</Paragraph>
                    </ButtonContainer>
                    <CardInputContainer>
                        <InputWrapper>
                            <InputLabel>Overide Service Fee</InputLabel>
                            <InputField 
                                type="search"
                                placeholder="Search User, Assets or Collection"
                            />
                        </InputWrapper>
                        <InputWrapper >
                            <InputLabel>Edit Service Fee</InputLabel>
                            <InputField 
                                type="search"
                                placeholder="%"
                                className="edit"
                            />
                        </InputWrapper>                          
                    </CardInputContainer>
                    <SearchResult>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                    </SearchResult>
                </Card>
                <Card>
                    <h3>Resale Royalties</h3>
                    <ButtonContainer>
                        <Button className="max-royalty">Set Max Resale Royalty</Button>
                        <Paragraph>10% Default max resale royalty</Paragraph>
                    </ButtonContainer>
                    <CardInputContainer>
                        <InputWrapper>
                            <InputLabel>Overide Max Resale Royalty</InputLabel>
                            <InputField 
                                type="search"
                                placeholder="Search User, Assets or Collection"
                            />
                        </InputWrapper>
                        <InputWrapper >
                            <InputLabel>Edit Resale Royalty</InputLabel>
                            <InputField 
                                type="search"
                                placeholder="%"
                                className="edit"
                            />
                        </InputWrapper>                          
                    </CardInputContainer>
                    <SearchResult>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                        <SearchResultItem>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Circle />
                                <SearchResultItemText>Name</SearchResultItemText>
                            </div>
                            <Checkbox/>
                        </SearchResultItem>
                    </SearchResult>
                </Card>
            </CardWrapper>
            <ServiceSection>
                <ServiceHeading>Service Fee</ServiceHeading>
                <SearchResultItem>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Circle />
                        <SearchResultItemText className="first-last-name">First Last Name</SearchResultItemText>
                    </div>
                    <Paragraph className='section-para'>10%</Paragraph>
                </SearchResultItem>
                <SearchResultItem>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Circle />
                        <SearchResultItemText className="first-last-name">Asset Name</SearchResultItemText>
                    </div>
                    <Paragraph className='section-para'>5%</Paragraph>
                </SearchResultItem>
                <SearchResultItem>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Circle />
                        <SearchResultItemText className="first-last-name">Collection Name</SearchResultItemText>
                    </div>
                    <Paragraph className='section-para'>15%</Paragraph>
                </SearchResultItem>
                <SearchResultItem>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Circle />
                        <SearchResultItemText className="first-last-name">Asset Name</SearchResultItemText>
                    </div>
                    <Paragraph className='section-para'>10%</Paragraph>
                </SearchResultItem>
                
            </ServiceSection>
            
        </Container>
    )
}
export default ServiceFeePanel;

const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 24px;


`
const Card = styled.div`
width:50%;
margin-top: 24px;
&>h3{
    font-family: 'Kern';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;

    color: #000000;
}
@media screen and (max-width: 850px) {
    width:100%;
}
`
const CardWrapper = styled.div`
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
@media screen and (max-width: 850px) {
flex-direction: column;
}
`
const ServiceSection = styled.div`
width:300px;
margin-top: 44px;
margin-bottom: 100px;
`
const ServiceHeading = styled.h4`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: right;
margin-bottom: 16px;
color: #000000;

`

const ButtonContainer = styled.div`
display: flex;
width:100%;
align-items: center;
margin-top:25px;
margin-bottom:35px;
@media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;

`
const Button = styled.button`
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #000000;
padding:10px 30px;
cursor:pointer;
border:none;
outline:none;
border-radius: 8px;
margin-right:20px;
&.service-fee{
    background: #BAE5F8;
}
&.max-royalty{
    background: #E3D4EA;
}
`
const Paragraph = styled.p`
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #000000;
opacity: 0.5;
&.section-para{
    opacity: 1;
}
`
const InputWrapper = styled.div``
const InputLabel = styled.label`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #6F6F6F;
`
const CardInputContainer = styled.div`
display: flex;
gap:20px;
@media screen and (max-width: 850px) {
flex-direction: column;
}
`
const InputField = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 16px;
width: 305px;
height: 33px;
background: #F7F9FA;
border: 1px solid #F5F5F5;
border-radius: 10px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
&.edit{
    width: 150px;
}
@media screen and (max-width: 450px) {
max-width: 100%;
}
`

const SearchResult = styled.div`
background: #F7F9FA;
border-radius: 10px;
width:305px;
height:167px;
padding:10px;
overflow-y:scroll;
margin-top:20px;
`

const SearchResultItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:5px;
`
const SearchResultItemText = styled.p`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #ADAEAF;
margin-left:10px;
&.first-last-name{
    color: #000000;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}
`
const Circle = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: #D2D2D6;
`