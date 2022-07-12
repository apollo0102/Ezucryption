import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const CategoryListPanel =()=>{
    return(
    <Container>
        <Button aria-label="add-page">
          <AddIcon />
        </Button>

    </Container>
  )
}
export default CategoryListPanel

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;

`
const Button = styled(IconButton)`
  margin-top: 40px;
`