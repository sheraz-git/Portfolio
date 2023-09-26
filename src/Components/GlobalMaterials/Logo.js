import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../Theme/theme";

const Logo = ({ label }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, #00C0FD, #E70FAA)',
          padding: '10px', 
        }}
      >
        <Typography variant="h5">{label}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Logo;