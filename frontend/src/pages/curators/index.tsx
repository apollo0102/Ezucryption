import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  InputAdornment,
  Input,
  FormControl,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowForwardIos, Search } from "@mui/icons-material";
import styled from "@emotion/styled";

import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import Footer from "../../components/UiKit/Layout/Footer";

const CssInput = styled(Input)`
  input {
    color: black;
    border-color: black;
    padding: 1rem 0.8rem;

    &:focused {
      border-color: black;
    }
  }
`;

function CircleImagePlaceholder({ children }: { children?: React.ReactNode }) {
  return (
    <CircleImagePlaceholderWrapper>
      <StrokeSwirl />
      <FilledSwirl />
      <ImageWrapper>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            borderRadius: "100%",
          }}
        >
          {children}
        </div>
      </ImageWrapper>
    </CircleImagePlaceholderWrapper>
  );
}

function Curators() {
  const [curators, setCurators] = useState([
    {
      name: "Louisa St. Pierre",
      description: `Global Director Art & Experiential, M+A Creative
        Curator, Art Strategy, Creative Direction, Design, Illustration, Digital, CGI, Animation & Experiential `,
    },
    {
      name: "Bompas & Parr",
      description: `Architects of Taste, Feeding Minds & Stomachs
      An experience design and creative studio of artists, architects, chefs, designers and strategists.`,
    },
    {
      name: "MA+ Global",
      description: `MA + Group curates world-leading talent to produce inspiring & creative brand communications. We curate world-leading talent to produce inspiring & creative `,
    },
  ]);
  return (
    <div>
      <HomeAppBar />
      <Container maxWidth="lg">
        <Heading
          variant="h1"
          mt={10}
          mb={2}
          className="g-font-family-haffer g-font-normal"
        >
          Featured Curators
        </Heading>

        <Grid container mb={5}>
          <Grid item md={8} sm={12}></Grid>
          <Grid item md={4} sm={12}>
            <FormControl fullWidth variant="standard">
              <CssInput
                id="standard-adornment-amount"
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <Search style={{ fontSize: "2rem" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>

        <StyledContainer>
          {curators.map((curator, i) => (
            <Box
              key={i}
              display="flex"
              flexDirection={i % 2 != 0 ? "row-reverse" : "row"}
              alignItems="center"
              mb={16}
            >
              <CircleImagePlaceholder>
                <Image
                  src={`/images/curators/curator-${i + 1}.jpg`}
                  layout="fill"
                  style={{
                    borderRadius: "100%",
                  }}
                />
              </CircleImagePlaceholder>

              <Box ml={i % 2 != 0 ? 0 : 10} mr={i % 2 == 0 ? 0 : 10}>
                <Title mb={0.2} className="g-font-family-kern g-font-normal">
                  CURATOR
                </Title>

                <CuratorName
                  mb={1.5}
                  className="g-font-family-kern g-font-medium"
                >
                  {curator.name}
                </CuratorName>

                <CuratorDescription
                  mb={3}
                  className="g-font-family-kern g-font-bold"
                >
                  {curator.description}
                </CuratorDescription>

                <CuratorButton className="g-font-medium">Follow</CuratorButton>
              </Box>
            </Box>
          ))}

          <Box display="flex" justifyContent="center" mb={20}>
            <MoreButton>
              <span
                className="g-font-medium"
                style={{ marginRight: 24, lineHeight: "150%" }}
              >
                search more curators
              </span>
              <ArrowForwardIos />
            </MoreButton>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={10}
          >
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
              <path
                d="M11.0336 3.02558C11.0336 3.15069 11.0336 3.23401 11.0336 3.35912C11.0336 6.73701 8.49051 10.657 3.8556 10.657C2.42001 10.657 1.10746 10.2401 0 9.48944C0.205085 9.53115 0.410169 9.53139 0.615254 9.53139C1.80474 9.53139 2.87117 9.11412 3.73253 8.44688C2.62507 8.40518 1.6817 7.69632 1.39459 6.65377C1.55865 6.69547 1.7227 6.6953 1.88677 6.6953C2.13287 6.6953 2.33794 6.65393 2.54303 6.61223C1.39455 6.36201 0.53324 5.36116 0.53324 4.11008V4.06814C0.861375 4.27665 1.27151 4.35997 1.68168 4.40167C0.984396 3.94295 0.574247 3.15077 0.574247 2.27502C0.574247 1.81629 0.697267 1.35773 0.902352 0.982408C2.13286 2.52539 4.01967 3.56771 6.11153 3.65111C6.07051 3.4426 6.02947 3.27604 6.02947 3.06753C6.02947 1.64965 7.13696 0.523438 8.53154 0.523438C9.26984 0.523438 9.92611 0.815517 10.3773 1.31595C10.9515 1.19084 11.4847 0.982326 11.9769 0.69041C11.7718 1.27424 11.4027 1.77443 10.8695 2.10805C11.3617 2.06634 11.8539 1.89953 12.3051 1.69102C11.9769 2.19145 11.5258 2.65026 11.0336 3.02558Z"
                fill="black"
              />
            </svg>

            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              style={{ marginLeft: 12 }}
            >
              <path
                d="M5.32141 2.37207H6.36289V0.642611C6.19625 0.602399 5.57134 0.5625 4.82147 0.5625C3.28009 0.5625 2.23863 1.4471 2.23863 3.09582V4.62382H0.572266V6.55395H2.23863V11.4199H4.32158V6.55395H5.9463L6.19624 4.62382H4.32158V3.29688C4.32158 2.73391 4.48823 2.37207 5.32141 2.37207Z"
                fill="black"
              />
            </svg>

            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              style={{ marginLeft: 12 }}
            >
              <path
                d="M14.9568 2.06702C14.7959 1.41637 14.2732 0.887949 13.6298 0.684621C12.4234 0.359296 7.67832 0.359375 7.67832 0.359375C7.67832 0.359375 2.93326 0.359296 1.72688 0.684621C1.08348 0.847284 0.560696 1.3757 0.399846 2.06702C0.0781446 3.28699 0.078125 5.80834 0.078125 5.80834C0.078125 5.80834 0.0781446 8.32969 0.399846 9.54966C0.560696 10.2003 1.08348 10.7289 1.72688 10.8915C2.93326 11.2169 7.67832 11.2168 7.67832 11.2168C7.67832 11.2168 12.4234 11.2169 13.6298 10.8915C14.2732 10.7289 14.7959 10.2003 14.9568 9.54966C15.2785 8.32969 15.2785 5.80834 15.2785 5.80834C15.2785 5.80834 15.2785 3.28699 14.9568 2.06702ZM6.11002 8.08585V3.49031L10.0911 5.76783L6.11002 8.08585Z"
                fill="black"
              />
            </svg>

            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              style={{ marginLeft: 12 }}
            >
              <path
                d="M10.7139 6.50772V10.4666H8.41884V6.77286C8.41884 5.84497 8.08688 5.21172 7.25614 5.21172C6.62197 5.21172 6.24457 5.63849 6.07854 6.05131C6.018 6.19889 6.00241 6.4043 6.00241 6.61089V10.4666H3.70656C3.70656 10.4666 3.73748 4.21064 3.70656 3.56248H6.00219V4.54111C5.99753 4.54843 5.99148 4.55632 5.9871 4.56341H6.00219V4.54111C6.30719 4.07135 6.85188 3.40029 8.07107 3.40029C9.58157 3.40026 10.7139 4.38705 10.7139 6.50772ZM1.30499 0.234375C0.519582 0.234375 0.00585938 0.749542 0.00585938 1.427C0.00585938 2.0897 0.50472 2.6205 1.27452 2.6205H1.28986C2.09048 2.6205 2.58839 2.0898 2.58839 1.427C2.5733 0.749542 2.09048 0.234375 1.30499 0.234375ZM0.142213 10.4666H2.4372V3.56248H0.142213V10.4666Z"
                fill="black"
              />
            </svg>

            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              style={{ marginLeft: 12 }}
            >
              <path
                d="M6.147 0.46875C3.18869 0.46875 0.792969 2.86447 0.792969 5.82278C0.792969 8.19236 2.32598 10.1928 4.454 10.9028C4.7217 10.9499 4.82209 10.7889 4.82209 10.6487C4.82209 10.5212 4.81581 10.0997 4.81581 9.65113C3.47103 9.89896 3.12281 9.32277 3.0151 9.02161C2.95445 8.86789 2.69407 8.39209 2.4661 8.26556C2.27892 8.16517 2.01122 7.91734 2.45983 7.91106C2.88125 7.90479 3.18242 8.29902 3.2828 8.46006C3.76488 9.26944 4.53452 9.04252 4.84196 8.90135C4.88901 8.55313 5.02914 8.31889 5.18286 8.18504C3.99179 8.05119 2.74635 7.58899 2.74635 5.54149C2.74635 4.95903 2.9534 4.47695 3.29535 4.10259C3.24202 3.96874 3.05484 3.41974 3.34868 2.68356C3.34868 2.68356 3.79729 2.54344 4.82104 3.23256C5.24978 3.1123 5.70467 3.05165 6.15955 3.05165C6.61443 3.05165 7.06932 3.1123 7.49806 3.23256C8.52181 2.53612 8.97042 2.68356 8.97042 2.68356C9.26531 3.41974 9.07708 3.96874 9.02375 4.10259C9.36465 4.47695 9.57275 4.95275 9.57275 5.54149C9.57275 7.59631 8.32103 8.05119 7.12997 8.18504C7.32447 8.35235 7.49178 8.67339 7.49178 9.17533C7.49178 9.89164 7.48551 10.4668 7.48551 10.6477C7.48551 10.7878 7.5859 10.9551 7.8536 10.9018C9.96802 10.1928 11.501 8.18504 11.501 5.82174C11.501 2.86552 9.10531 0.46875 6.147 0.46875Z"
                fill="black"
              />
            </svg>

            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              style={{ marginLeft: 12 }}
            >
              <path
                d="M2.16529 2.076C2.16529 1.94214 2.12067 1.8083 2.03144 1.71907L1.04987 0.514403V0.335938H4.17305L6.58237 5.60074L8.67936 0.335938H11.6241V0.514403L10.7764 1.31751C10.6871 1.36213 10.6871 1.45136 10.6871 1.54059V7.56389C10.6871 7.65312 10.6871 7.74236 10.7764 7.78697L11.6241 8.59007V8.76854H7.43009V8.59007L8.27781 7.74235C8.36704 7.65312 8.36704 7.65312 8.36704 7.51927V2.65602L5.95773 8.76854H5.64541L2.83455 2.65602V6.76078C2.78993 6.93924 2.87916 7.11771 2.9684 7.25156L4.08382 8.63469V8.81316H0.916016V8.63469L2.03144 7.25156C2.16529 7.11771 2.20991 6.93924 2.16529 6.76078C2.16529 6.80539 2.16529 2.076 2.16529 2.076Z"
                fill="black"
              />
            </svg>
          </Box>
        </StyledContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default Curators;

const CircleImagePlaceholderWrapper = styled.div`
  height: 240px;
  width: 240px;
  position: relative;
  flex: none;
`;

const StrokeSwirl = styled(Box)`
  height: 100%;
  width: 100%;
  border: 0.936588px solid #9cd0d5;
  border-radius: 100%;
  position: absolute;
`;

const FilledSwirl = styled(Box)`
  background: #dfdfdf;
  position: absolute;
  height: 98%;
  width: 98%;
  border-radius: 100%;
  bottom: 6%;
  left: 6%;
`;

const ImageWrapper = styled(Box)`
  background: #eee;
  position: absolute;
  height: 96%;
  width: 96%;
  border-radius: 100%;
  bottom: 1.53%;
  left: 10%;
`;

const StyledContainer = styled(Container)`
  width: 648px;
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-family: "Haffer";
`;

const Title = styled(Typography)`
  color: #9cd0d5;
`;

const CuratorName = styled(Typography)`
  letter-spacing: 0.1em;
  font-weight: 500;
`;

const CuratorDescription = styled(Typography)`
  font-size: 12px;
  line-height: 20px;
`;

const CuratorButton = styled.button`
  background-color: white;
  border: 1px solid;
  font-size: 12px;
  width: 100px;
  height: 32px;
  border-radius: 42px;
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: #707070;
`;
