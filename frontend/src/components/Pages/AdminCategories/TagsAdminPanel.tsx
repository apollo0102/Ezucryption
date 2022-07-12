import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add';
import { buttonBaseClasses } from '@mui/material';

const TagsListPanel =()=>{
  const categories = [<AddButton>Add Tag</AddButton>, 'Graphics', 'Drops', 
  'Fashion', 'Drawing', 
  'Media', 'Design',
  'Digital Media', 'Taging', 'Fashion', 
  'Fashion', 'Film', 
  'Photography', 'Fashion', 'Fashion', 
  'XXX', 'XXX',  ]
  return(
    <Container>
        <h3>Tags</h3>
        <Items>
         {categories.map((text, index) => (
            <ContainerItem>
              <p>{text}</p>
            </ContainerItem>
            
          ))}
        </Items>
        <CategorySearch>
          <h3>Search Tags</h3>
          <SearchInput id="outlined-basic" placeholder="Tags" />
        </CategorySearch>
    </Container>
  )
}
export default TagsListPanel

const Container = styled.div`
display:flex;
flex-direction:column;
&>h3{
  margin-top:20px;
  margin-bottom:30px;
}
`

const Items = styled.div`
margin-top:20px;
display:flex;
gap:20px;
flex-wrap:wrap;

`
const ContainerItem = styled.div`
&:first-child{
    background: #BBE1CD;
}
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
background: #E3D4EA;
border-radius: 10px;
padding:10px 20px;
cursor:pointer;

`
const AddButton = styled.button`
cursor:pointer;
width:100%;
outline:none;
border:none;
background: #BBE1CD;
font-family: 'Kern';
font-style: normal;
font-size: 14px;
line-height: 16px;
text-align: center;
height:100%;


`
const CategorySearch = styled.div`
margin-top:50px;
margin-bottom:150px;
&>h3{
  margin-top:20px;
  margin-bottom:30px;
}

`
const SearchInput = styled.input`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
outline:none;
color: rgba(0, 0, 0, 0.3);
padding: 8px 16px;
gap: 10px;

max-width: 667px;
width: 100%;
height: 33px;

background: #F7F9FA;
border: 1px solid #F5F5F5;
border-radius: 10px;
`