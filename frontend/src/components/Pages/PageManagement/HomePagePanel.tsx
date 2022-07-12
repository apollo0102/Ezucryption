import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const HomepagePagePanel =()=>{
  return(
    <Container>
        <ItemWrapper>
          <Item>
            <p>Add collections, creators, collectors, curators or live auctions </p>
            <ItemContainer>
            <InputContainer>
              <Input
                type="search"
                width={'89px'}
                placeholder='collections, creators, collectors, curators or live auctions'
              />
              <SearchIcon />
            </InputContainer>
            
            <Button
              sx={{backgroundColor: 'rgba(35, 171, 180, 0.47);'}}
              >Add</Button>
            </ItemContainer>
            
          </Item>
         <Sections>
            <Buttons>Section 1</Buttons>
            <Input
              placeholder='Section 1'
            />
          </Sections>
          <Sections>
            <Buttons>Section 2</Buttons>
            <Input
              placeholder='Section 2'
            />
          </Sections>
          <Sections>
            <Buttons>Section 3</Buttons>
            <Input
              placeholder='Section 3'
            />
          </Sections>
        </ItemWrapper>
    </Container>
  )
}
export default HomepagePagePanel

const Container = styled.div`
display:flex;
flex-direction:column;

`
const ItemWrapper = styled.div`

`
const Sections = styled.div`
display:flex;
gap:15px;
align-items:center;
margin-top:20px;

`
const Buttons = styled(Button)`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
padding: 12px 16px;
background: #000000;
border-radius: 10px;
&:hover{
  background: #000000;
  color: #FFFFFF;
}
`

const Input  = styled.input`
width: 800px;
max-width:806px;
height: 33px;
background: #F7F9FA;
border: 1px solid #F5F5F5;
border-radius: 10px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 16px;
gap: 10px;
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: rgba(0, 0, 0, 0.3);
`
const Item = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:30px;
    margin-left:130px;
    &>p{
      font-family: 'Kern';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #000000;
    }
   ` 
const ItemContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-top:15px;
`
const InputContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width: 806px;
max-width:806px;
height: 33px;
background: #F7F9FA;
border: 1px solid #F5F5F5;
border-radius: 10px;


`