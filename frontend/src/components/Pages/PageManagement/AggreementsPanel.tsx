import styled from '@emotion/styled'
import AgreementTab from './AgreementTabs'

const AgreementPanel =()=>{

  return(
    <Container>
        <AgreementTab />
        
    </Container>
  )
}
export default AgreementPanel

const Container = styled.div`
display:flex;
flex-direction:column;
&>h3{
  margin-top:20px;
  margin-bottom:30px;
}
`
const Wrapper = styled.div`
&>h3{
  margin-top:20px;
  margin-bottom:30px;
  font-family: 'Kern';
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 46px;
  color: #000000;
}
&>p{
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
margin-bottom:15px;
}
`

