import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../Components/Theme/theme";
import Work from "../../Components/GlobalMaterials/Work";
const About = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: theme.palette.Portfolio.DarkMode,
          color: theme.palette.Portfolio.SolidHeadingDarkMode,
          display: "flex",
          flexDirection: "column",
          padding: "10px 150px",
          [theme.breakpoints.down("md")]: {
            padding: "10px 10px",
          },
        }}
      >
        <Box sx={{ maxWidth: "800px" }}>
          <Box
            sx={{
              padding: "20px 10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
                 [theme.breakpoints.down("md")]: {
  display:"none"
                },
            }}
          >
            <Box>
              <Typography variant="h5">About Me</Typography>
            </Box>
            <Box sx={{}}>
              As a MERN stack developer, I have experience building web
              applications using MongoDB, Express, React, and Node.js. I am
              skilled in creating RESTful APIs, integrating third-party
              libraries and APIs, and developing responsive and user-friendly
              front-end interfaces using React. My expertise in Node.js allows
              me to handle server-side logic and database management using
              MongoDB. I am also proficient in using various tools and
              technologies such as Git, Redux, Bootstrap, and Material UI to
              create efficient and scalable web applications. With my strong
              problem-solving skills and attention to detail, I am dedicated to
              delivering high-quality code and meeting project deadlines.
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box>
              <Typography variant="h5">Work Experience</Typography>
            </Box>
            <Work
              title={"Associate Software Engineer"}
              company={"Tecaudex"}
              country={"Pakistan"}
              time={"Full-Time"}
              date={"Apr 2023 - Sep 2023 "}
            />
            <Box>
              <Work
                title={"Web Developer"}
                company={"SeeBiz PVT LTD"}
                country={"Pakistan"}
                time={"Internship"}
                date={"Jul 2022 - Dec 2022 "}
              />
            </Box>
            <Box>
              <Work
                title={"Associate trainee Engineer"}
                company={"ZNZ Communication"}
                country={"Pakistan"}
                time={"Training"}
                date={"Aug 2021 - Dec 2021"}
              />
            </Box>
          </Box>
        </Box>
        </Box>
    </React.Fragment>
  );
};

export default About;
