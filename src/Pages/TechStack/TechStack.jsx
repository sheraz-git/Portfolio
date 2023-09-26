import React from "react";
import { Box } from "@mui/material";
import theme from "../../Components/Theme/theme";
import TechData from "../../Components/GlobalMaterials/TechData";
const TechStack = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.DarkMode,
          color: theme.palette.Portfolio.SolidHeadingDarkMode,
          display: "flex",
          flexDirection: "column",
          padding: "94px 150px",
          [theme.breakpoints.down("md")]: {
            padding: "2px",
            gap: "2px",
          },
        }}
      >
        <Box
          sx={{
            padding: "20px",
            [theme.breakpoints.down("md")]: {
              position: "relative",
              bottom: "25px",
            },
          }}
        >
          <TechData
            heading={"Tech Stack"}
            description={"Technologies i have been recently working"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "70px",
            padding: "50px 70px",
            [theme.breakpoints.down("md")]: {
              padding: "2px",
              gap: "10px",
              position: "relative",
              bottom: "25px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              gap: "70px",
              [theme.breakpoints.down("md")]: {
                padding: "5px",
                gap: "20px",
              },
            }}
          >
            <img src="/Group 9.png" alt="" style={{ height: "60px" }} />
            <img src="/Group 10.png" alt="" style={{ height: "60px" }} />
            <img src="/Group 11.png" alt="" style={{ height: "60px" }} />
            <img src="/Group 12.png" alt="" style={{ height: "60px" }} />
            <img src="/logos_bootstrap.png" alt="" style={{ height: "60px" }} />
            <img src="/Vector-5.png" alt="" style={{ height: "60px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              gap: "70px",
              [theme.breakpoints.down("md")]: {
                gap: "10px",
              },
            }}
          >
            <img src="/Vector-1.png" alt="" style={{ height: "60px" }} />
            <img src="/Vector-2.png" alt="" style={{ height: "60px" }} />
            <img src="/Vector-3.png" alt="" style={{ height: "60px" }} />
            <img src="/Vector-4.png" alt="" style={{ height: "60px" }} />
            <img src="/Vector-5.png" alt="" style={{ height: "60px" }} />
            <img src="/Vector.png" alt="" style={{ height: "60px" }} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default TechStack;
