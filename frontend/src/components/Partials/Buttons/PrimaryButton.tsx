import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import { NextPage } from "next";

const theme = createTheme({
  palette: {
    black: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
  }
  interface PaletteOptions {
    black?: PaletteOptions['primary'];
  }
}



// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}
interface PrimaryButtonProps {
    title: string
}

const PrimaryButton: NextPage<PrimaryButtonProps> = ({
    title,
  }) => {
  
    return (
        <ThemeProvider theme={theme}>
        <ButtonWrapper 
            style={{width: '100%'}}
            color="black" 
            size="large"
            variant="contained">
          {title}
        </ButtonWrapper>
      </ThemeProvider>
    );
  };
  
  export default PrimaryButton;
  const ButtonWrapper = styled(Button)`
  background: #000000;
box-shadow: 0px 0.447666px 0.895332px rgba(15, 15, 15, 0.1);
text-transform:capitalize ;
font-family: 'Kern';
font-style: normal;
padding-top: 8px;
padding-bottom: 12px;
font-weight: 700;
font-size: 20.7103px;
line-height: 25px;
border-radius: 4.47666px;
  @media screen and (max-width: 850px) {
  }
`;