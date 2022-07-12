import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

const CategoryListPanel =()=>{
  const categories = ['Art/Images', 'Curators', 'Musics', 'Documents', 'Digital Media AR/VR', 'Virtual Lands/ Meterverses', '3D', 'Fashion', 'Sports', 'Trade Secrets', 'Trademarks', 'Domains', 'Collectables', 'Wearables', 'Experimential', 'XXX', <PlusButton fontSize='large' /> ]
  return(
    <Container>
        <h3>Categories</h3>
        <Items>
         {categories.map((text, index) => (
            <ContainerItem>
              <p>{text}</p>
            </ContainerItem>
            
          ))}
        </Items>
        <CategorySearch>
          <h3>Search Categories</h3>
          <SearchInput id="outlined-basic" placeholder="Search Categories" />
        </CategorySearch>
    </Container>
  )
}
export default CategoryListPanel

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
height:100px;
width:100px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
padding:10px;
background: #98D7DC;
&:nth-child(3n+3){
  background: #000000;
  color:#f1f1f1;
}
&:nth-child(2n+2){
  background: #E7E7E7;
  color:#000000;
  
}
&>p{
  font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
text-align: center;
}

`
const PlusButton = styled(AddIcon)`
cursor:pointer;


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