import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import theme from "../Theme/theme";
const CardData = ({ title, description, TechStack, livePreview, seeCode }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.darkContent,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
        <Box>
          <Typography variant="h6">{TechStack}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <LinkIcon />
            {livePreview}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <GitHubIcon /> {seeCode}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardData;
