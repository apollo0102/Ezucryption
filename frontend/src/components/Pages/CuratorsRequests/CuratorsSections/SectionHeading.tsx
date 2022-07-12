import styled from "@emotion/styled";

interface TitleProps {
   heading: string;
  }
  const SectionTitle =  (props: TitleProps) =>{
    const { heading, ...other } = props;
      return(
        <HeadingContainer>
          {heading}
        </HeadingContainer>
      )
  }

  export default SectionTitle

const HeadingContainer = styled.div`
font-style: normal;
font-weight: 500;
font-size: 38px;
line-height: 64px;
color: #000000;
margin-bottom:44px;
  &:hover {
    
  }
`

