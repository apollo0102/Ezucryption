import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import Globe from "@mui/icons-material/Language";
import Screen from "@mui/icons-material/DesktopWindows";
import {
  FormControl,
  InputLabel,
  Input,
  MenuItem,
  TextField,
  Select,
} from "@mui/material/";

const MonitorGenericTab = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "13px" }}>
      <Wrapper>
        <h4>Monitor This Asset?</h4>
        <Button>Monitor Now</Button>
        <div>
          <IconButton>
            <Screen />
          </IconButton>
          <IconButton>
            <Globe />
          </IconButton>
        </div>
      </Wrapper>
      <InputWrapper>
        <ParaTag> Frequency of Monitoring</ParaTag>
        <FormControlWrapper>
          <FormControl
            fullWidth
            variant="standard"
          >
            <InputLabel id="frequency">
              Select Daily, Weekly or Monthly
            </InputLabel>
            <Select sx={{marginTop:'0 !important'}} value="Select Daily, Weekly or Monthly" label="value">
              <MenuItem value="">Daily</MenuItem>
              <MenuItem value="">Weekly</MenuItem>
              <MenuItem value="">Monthly</MenuItem>
            </Select>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>

      <InputWrapper>
        <ParaTag> Monitoring Date Range: </ParaTag>
        <FormControlWrapper>
          <TextField
            id="creation-date"
            type="date"
            defaultValue="2021-08-10"
            size="small"
            sx={{
              width: 110,
              fontSize: "10px",
              background: "rgba(235, 218, 221, 0.5)",
              borderRadius: "1.97813px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="creation-date"
            type="date"
            size="small"
            defaultValue="2021-08-10"
            sx={{
              width: 110,
              fontSize: "10px",
              marginLeft: "10px",
              background: "rgba(235, 218, 221, 0.5)",
              borderRadius: "1.97813px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControlWrapper>
      </InputWrapper>
      <MonitoredWrapper>
        <FooterText>Monitored Dates</FooterText>
        <Divider />
        <Footer>
          <p>Monitoring Start Date:</p>
          <p>
            Nov 3rd, 2021 <span>Jan 5th, 2022</span>
          </p>
        </Footer>
      </MonitoredWrapper>
    </Box>
  );
};

export default MonitorGenericTab;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 200px;
  & > h4 {
    color: red;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
    margin-top: 15px;
  }
`;
const Button = styled.button`
  width: 120px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  background: #e3d4ea;
  border-radius: 10px;
  border: none;
  padding: 10px 10px;
  margin: 15px 0;
  cursor: pointer;
`;
const TabContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  font-size: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }
`;
const InputWrapper = styled.div`
  font-size: 20px;
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`;

const FooterText = styled("p")`
  font-family: "Kern";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  text-align: right;
  margin-bottom: 15px;
  color: #000000;

  @media screen and (min-width: 768px) {
  }
`;

const ParaTag = styled("p")`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #000000;
  font-family: "Kern";
  padding-right: 10px;
  flex: 2;

  @media screen and (min-width: 768px) {
  }
`;
const FormControlWrapper = styled("div")`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #000000;
  position: relative;
  font-family: "Kern";
  flex: 3;

  @media screen and (min-width: 768px) {
  }
`;

const MonitoredWrapper = styled.div`
  margin-top: 40px;
`;
const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #d2d2d6;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  opacity: 0.5;
  margin-top: 15px;
`;
