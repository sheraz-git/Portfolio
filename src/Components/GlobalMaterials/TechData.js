import React from "react";
import { Box,Typography } from "@mui/material";
const TechData = ({ heading, description }) => {
  return (
    <React.Fragment>
      <Box sx={{ textAlign: "center"}}>
       <Typography variant="h6">   {heading}  </Typography>
       <Typography variant="h6">   {description}   </Typography>
      </Box>
    </React.Fragment>
  );
};

export default TechData;
