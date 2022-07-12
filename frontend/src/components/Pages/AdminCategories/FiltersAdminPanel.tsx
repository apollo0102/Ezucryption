import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add';
import Slider from '@mui/material/Slider';


const FiltersListPanel =()=>{
    const categories = ['Curators', 'Curators', 'Artwork Type', 
                        'Categories', 'Collectors', 
                        'Collections', <PlusButton fontSize='large' /> ]
    const status = ['Live Auction', 'Current Drops', 'On Sale', 
                        'Highest Sales',  <PlusButton fontSize='large' /> ]

                          
  return(
    <Container>
        <h3>Filters</h3>
        <ItemsWrapper>
            <h4>Search</h4>
            <Items>
                
            {categories.map((text, index) => (
                <ContainerItem>
                <p>{text}</p>
                </ContainerItem>
                
            ))}
            </Items>
        </ItemsWrapper>
        <ItemsWrapper>
            <h4>Status</h4>
            <Items>
            {status.map((text, index) => (
                <ContainerItem>
                <p>{text}</p>
                </ContainerItem>
                
            ))}
            </Items>
        </ItemsWrapper>
        <ItemsWrapper>
            <h4>Blockchain</h4>
            <Items>
                <BlockChainButton className='eth'>Etherueme</BlockChainButton>
                <BlockChainButton>Polygon</BlockChainButton>
            </Items>
        </ItemsWrapper>
        <ItemsWrapper>
            <h4>Price</h4>
            <Slider 
                style={{width: '200px'}}
                defaultValue={80}


            />
        </ItemsWrapper>
    </Container>
  )
}
export default FiltersListPanel

const Container = styled.div`
display:flex;
flex-direction:column;
&>h3{
  margin-top:20px;
  margin-bottom:30px;
}
`

const ItemsWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
&>h4{
  margin-top:10px;
  margin-bottom:5px;
  width:100%;
}
`
const Items = styled.div`
margin-top:20px;
display:flex;
gap:20px;
flex-wrap:wrap;

`
const ContainerItem = styled.div`
height:90px;
width:90px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
padding:10px;
background: #E7E7E7;
&:first-child{
    background: #98D7DC;
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
const BlockChainButton = styled.button`
background: #E3D4EA;
border-radius: 10px;
padding: 10px 20px;
font-weight: 400;
font-size: 14px;
line-height: 16px;
border:none;
color: #000000;


`