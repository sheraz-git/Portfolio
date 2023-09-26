import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../Components/Theme/theme";

const Home = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.DarkMode,
          color: theme.palette.Portfolio.SolidHeadingDarkMode,
          display: "flex",
          padding: "114px 150px",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            padding: "10px 10px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "70px 0",
          }}
        >
          <Box>
            <Typography variant="h4">
              Hi 👋 <br /> My name is{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "flex",
              },
            }}
          >
            <Typography variant="h4">
              007 __ SHERAZ <br />I made things for web{" "}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              src="/pic.jpg"
              alt=""
              width="250px"
              style={{
                borderRadius: "100%",
                border: "10px solid white",
              }}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
