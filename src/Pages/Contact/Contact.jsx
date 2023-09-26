import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../Components/Theme/theme";
const Contact = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.DarkMode,
          color: theme.palette.Portfolio.SolidHeadingDarkMode,
          display: "flex",
          flexDirection: "column",
          padding: "163px 150px",
          textAlign: "Center",
          [theme.breakpoints.down("md")]: {
            padding: "2px",
            gap: "2px",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            backgroundImage: "linear-gradient(to right, #00C0FD, #E70FAA)",
          }}
        >
          For any questions please mail us:{" "}
        </Typography>
        <Typography variant="h5">sherazAbbas669@gmail.com: </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
