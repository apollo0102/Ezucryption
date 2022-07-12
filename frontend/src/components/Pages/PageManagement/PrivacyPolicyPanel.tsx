import styled from '@emotion/styled'
const PrivacyPolicy =()=>{

  return(
    <Container>
        <Wrapper>
          <h3>Privacy Policy</h3>
          <p>Unless otherwise specified, the terms of use detailed in this section apply generally when using the Artcryption platform which is an online platform that provides users the ability to sell, manage and protect their intellectual property assets (the “Services”) and the website and Services hereinafter referred collectively as the “Platform” Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally indicated within this document. </p>
          <p>By using the Platform, you agree that you have read and will abide by the Terms of Use outlined below. If you do not agree with the Terms of Use or our Privacy Policy which can be found at www.Artcryption.com/privacypolicy which terms are incorporated herein, please do not access this Platform or use the services provided herein. Failure to use the Platform in accordance with these Terms may result in civil and criminal penalties. If you do not agree to these terms, then you do not have permission to use the Platform. By using this Platform.</p>
          <h4> Privacy Policy of artcryption.com</h4>
          <p>This Application collects some Personal Data from its Users.</p>
          
          <p>Owner and Data Controller</p>
          <p>Artcryption Inc.</p>
          <p>Mississauga, Ontario, Canada, L4W2Y9 </p>
          <p>Owner contact email: info@artcryption.com </p>

          <h4>What Is Personal Information?</h4>

          <p>Personal information means any information that can be used to identify an individual including your name, address, telephone number, email address, scanned copies of your government photo ID and any other information that you choose to provide. Personal information does not include information that is publicly available such as business contact information. Any personal information that is collected is limited to that information that is necessary in order for us to conduct business.</p>
          <p>We will obtain your direct consent before we collect such information and you can opt out at any time. The personal information is collected only used for the original purpose for which it was collected (unless you provide consent otherwise). All your personal information is protected and safeguarded and not shared with any third party unless you provide your consent to do so. The entcounsel.com provides general information to any visitor or user in Ontario who are seeking legal information or services.</p>
        </Wrapper>
        
    </Container>
  )
}
export default PrivacyPolicy

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

