import React from "react";
import { Box, ListItemButton, ListItemText } from "@mui/material";
import theme from "../Theme/theme";
import Logo from "../GlobalMaterials/Logo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.DarkMode,
          display: "flex",
          padding: "40px 150px",
          alignItems: "center",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <Logo label={"007__SHERAZ"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "70px",
            alignItems: "center",
            color: "white",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: "20px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                gap: "10px",
              },
            }}
          >
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/About">
              <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton component={Link} to="/TechStack">
              <ListItemText primary="TechStack" />
            </ListItemButton>
            <ListItemButton component={Link} to="/Projects">
              <ListItemText primary="Projects" />
            </ListItemButton>
            <ListItemButton component={Link} to="/Contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </Box>
          <Box sx={{ display: "flex", gap: "35px" }}>
            {/* GitHub Link using an anchor tag */}
            <a href="https://github.com/sheraz-git?tab=repositories" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/sheraz-abbas-5a521b218/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            </a>
            <TwitterIcon />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;