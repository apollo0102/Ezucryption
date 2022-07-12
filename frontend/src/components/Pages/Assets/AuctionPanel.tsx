import styled from "@emotion/styled";
import {
  FormControl,
  InputLabel,
  Input,
  MenuItem,
  TextField,
} from "@mui/material/";
import PrimaryButton from "../../Partials/Buttons/PrimaryButton";
import Select from "@mui/material/Select";

const AuctionPanel = () => {
  return (
    <TabContentWrapper>
      <InputWrapper>
        <ParaTag style={{marginTop:'12px'}}> Auction Type </ParaTag>
        <FormControlWrapper>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              style={{ fontSize: "14px", color: "#6F6F6F" }}
              id="category"
            >
              Select Currency
            </InputLabel>
            <Select
              fullWidth
              style={{ fontSize: "14px", color: "#6F6F6F" }}
              labelId="category"
              id="category"
            >
              <MenuItem value="">Category One</MenuItem>
              <MenuItem value="">Category Two</MenuItem>
              <MenuItem value="">Category Three</MenuItem>
              <MenuItem value=""> Category Four</MenuItem>
            </Select>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <ParaTag> Auction Starting Price</ParaTag>
        <FormControlWrapper>
          <FormControl fullWidth>
            <Input
              fullWidth
              style={{ borderBottomColor: "#6F6F6F", color: "#6F6F6F" }}
              id="description"
              type="text"
            />
            <InputLabel
              style={{
                fontSize: "14px",
                top:'-10px',left:'-14px',
                color: "#6F6F6F",
              }}
              htmlFor="description"
            >
              Starting price or reserve price
            </InputLabel>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <ParaTag> Auction Period </ParaTag>
        <FormControlWrapper>
          <FormControl fullWidth>
            <Input
              style={{ borderBottomColor: "#6F6F6F", color: "#6F6F6F" }}
              id="description"
              type="text"
            />
            <InputLabel
              style={{ fontSize: "14px",top:'-10px',left:'-14px', color: "#6F6F6F" }}
              htmlFor="description"
            >
              Auction Period
            </InputLabel>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <ParaTag> Bid Increment </ParaTag>
        <FormControlWrapper>
          <FormControl fullWidth>
            <Input
              style={{ borderBottomColor: "#6F6F6F", color: "#6F6F6F" }}
              id="description"
              type="text"
            />
            <InputLabel
              style={{ fontSize: "14px", top:'-10px',left:'-14px', color: "#6F6F6F" }}
              htmlFor="description"
            >
              XXX
            </InputLabel>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <ParaTag> Buy Now Price </ParaTag>
        <FormControlWrapper>
          <FormControl fullWidth>
            <Input
              style={{ borderBottomColor: "#6F6F6F", color: "#6F6F6F" }}
              id="description"
              type="text"
            />
            <InputLabel
              style={{ fontSize: "14px", top:'-10px',left:'-14px', color: "#6F6F6F" }}
              htmlFor="description"
            >
              Buy Now Price
            </InputLabel>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <ParaTag style={{marginTop:'12px'}}> Currency </ParaTag>
        <FormControlWrapper>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              style={{ fontSize: "14px", color: "#6F6F6F" }}
              id="category"
            >
              WETH or ETH
            </InputLabel>
            <Select
              fullWidth
              style={{ fontSize: "14px", color: "#6F6F6F" }}
              labelId="category"
              id="category"
            >
              <MenuItem value="">Category One</MenuItem>
              <MenuItem value="">Category Two</MenuItem>
            </Select>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>

      <InputWrapper>
        <ParaTag> Additional Content </ParaTag>
        <FormControlWrapper>
          <FormControl fullWidth>
            <Input
              style={{ borderBottomColor: "#6F6F6F", color: "#6F6F6F" }}
              id="description"
              type="text"
            />
            <InputLabel
              style={{ fontSize: "14px", top:'-10px',left:'-14px', color: "#6F6F6F" }}
              htmlFor="description"
            >
              Add Content
            </InputLabel>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>

      <InputWrapper>
        <ParaTag> Waitlist </ParaTag>
        <FormControlWrapper>
          <TextField
            id="creation-date"
            type="date"
            size="small"
            defaultValue="2021-08-10"
            sx={{
              width: 150,
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
              width: 150,
              fontSize: "10px",
              marginLeft: "30px",
              background: "rgba(235, 218, 221, 0.5)",
              borderRadius: "1.97813px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControlWrapper>
      </InputWrapper>

      <InputWrapper>
        <ParaTag> Fixed Sales </ParaTag>
        <FormControlWrapper>
          <TextField
            id="creation-date"
            type="date"
            size="small"
            defaultValue="2021-08-10"
            sx={{
              width: 150,
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
              width: 150,
              fontSize: "10px",
              marginLeft: "30px",
              background: "rgba(235, 218, 221, 0.5)",
              borderRadius: "1.97813px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <ParaTag> Creator's Term URL </ParaTag>
        <FormControlWrapper>
          <FormControl fullWidth>
            <Input
              style={{ borderBottomColor: "#6F6F6F", color: "#6F6F6F" }}
              id="description"
              type="text"
            />
            <InputLabel
              style={{ fontSize: "14px", top:'-10px',left:'-14px', color: "#6F6F6F" }}
              htmlFor="description"
            >
              Creator's Term URL
            </InputLabel>
          </FormControl>
        </FormControlWrapper>
      </InputWrapper>
      <InputWrapper>
        <PrimaryButton title="Add to Listing" />
      </InputWrapper>
      <FooterText>
        {" "}
        By minting or hashingthe metadata on the blockchain, you will generate a
        hash on the blockchain and receive a Certificate of Ownership.{" "}
      </FooterText>
    </TabContentWrapper>
  );
};
export default AuctionPanel;

const PanelWrapper = styled.div``;
const TabContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }
`;
const InputWrapper = styled.div`
  font-size: 20px;
  display: flex;
  width: 100%;
  margin-top: 50px;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`;

const FooterText = styled("p")`
  margin-top: 20px;
  font-size: 10px;
  width: 100%;
  text-align: center;
  color: #6f6f6f;

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
  flex: 1;

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
const SpanText = styled("div")`
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  color: #000000;
  font-family: "Kern";
  flex: 3;
  text-align: right;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  position: absolute;
  right: 0;
  padding-right: 0;

  @media screen and (min-width: 768px) {
  }
`;
