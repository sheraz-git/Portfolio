import React from "react";
import { Box, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import theme from "../Theme/theme";
const Work = ({ title, company, country, time, date }) => {
  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <Box>
            <Typography>{title}</Typography>
          </Box>
          <Box>
            <Typography>{time}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "120px",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <BusinessIcon />
              {company}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <LanguageIcon />
              {country}
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                background: theme.palette.Portfolio.Buttontext,
              }}
            >
              <AccessTimeIcon />
              {date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Work;
