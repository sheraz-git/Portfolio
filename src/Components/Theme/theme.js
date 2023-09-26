import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  };
  // Create a theme instance.
const theme = createTheme({
    breakpoints,
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
      Portfolio: {
        GradientHeading: "#00C0FD",
        DarkMode: "#191919",
        darkContent: "#666666",
        BorderGradient: "linear-gradient(to right, #00C0FD, #E70FAA)",
        SolidHeadingDarkMode: "#CCCCCC",
        lightContent: "#A7A7A7",
        Buttontext: "#018C0F",
        ButtonSuccess: "#D7FFE0",
      },
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontSize: "4rem",
        fontWeight: 700,
        "@media (max-width:600px)": {
            fontSize: "3rem",
          },
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
        "@media (max-width:600px)": {
            fontSize: "2rem",
          },
      },
      h3: {
        fontSize: "0.5rem",
        fontWeight: 600,
        "@media (max-width:600px)": {
            fontSize: "2rem",
          },
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        "@media (max-width:600px)": {
            fontSize: "2rem",
          },
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        "@media (max-width:600px)": {
            fontSize: "2rem",
          },
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        "@media (max-width:600px)": {
            fontSize: "2rem",
          },
      },
  
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        "@media (max-width:600px)": {
            fontSize: "2rem",
          },     
    },
      caption: {
        fontSize: "0.625rem",
        fontWeight: 600,
      },
    },
   });

   export default theme;