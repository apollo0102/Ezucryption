import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const themeInstance = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export const theme = {
  fonts: {
    kern: "Kern, san-serif",
    haffer: "Haffer, san-serif",
  },
  colors: {
    dark: "#000000",
    "dark-10": "#1e1e1e",
    "dark-20": "#6f6f6f",
    "dark-30": "#535151",
    "dark-40": "#3e3e3e",
    "dark-50": "rgba(0, 0, 0, 0.3)",
    "dark-60": "#616161",
    "dark-70": "#949494",
    "dark-80": "#d8d8d8",
    "dark-90": "rgba(196, 196, 196, 0.1)",
    "dark-100": "rgba(196, 196, 196, 0.5)",

    white: "#ffffff",
    "neutral-10": "#fafafa",
    "neutral-20": "#f5f5f5",
    "neutral-30": "#e9f4f8",
    "neutral-40": "#f8e8ba",
    "neutral-50": "#e4f2c5",
    "neutral-60": "#e7e7ea",

    "primary-10": "#2b6dab",
    "primary-20": "#2f8be6",

    "success-10": "#bddfeb",
    "success-20": "#bae5f8",
    "success-30": "#baf8cf",
    "success-40": "#baf8d2",

    "error-10": "#eb4b87",
    "error-20": "#f8baba",
    "error-30": "#e3d4ea",
    "error-40": "#ba7e86",
  },
  mediaScreens: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1280px",
    xl: "1440px",
  },
};

export default themeInstance;
