import React from "react";
import theme from "../../Components/Theme/theme";
import { Box } from "@mui/material";
import TechData from "../../Components/GlobalMaterials/TechData";
import Card from "../../Components/GlobalMaterials/Card";
const Projects = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.DarkMode,
          color: theme.palette.Portfolio.SolidHeadingDarkMode,
          display: "flex",
          flexDirection: "column",
          padding: "5px 150px",
          [theme.breakpoints.down("md")]: {
            padding: "10px 10px",
          },
        }}
      >
        <Box sx={{}}>
          <TechData
            heading={"Projects"}
            description={"Things I've build so Far"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "70px",
            padding: "20px 70px",
          }}
        >
          <Card />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Projects;
