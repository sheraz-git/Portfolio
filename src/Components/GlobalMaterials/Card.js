import React from "react";
import { Box } from "@mui/material";
import CardData from "./CardData";

const Card = () => {

  return (
    <React.Fragment>
      <Box
        sx={{
          padding: "0 40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <Box
            key={index}
            sx={{
              border: "3px solid white",
              borderRadius: "10px",
              maxWidth: "300px",
            }}
          >
            <Box sx={{ backgroundSize: "cover" }}>
              <img
                src="/pic.jpg"
                alt=""
                style={{ width: "300px", height: "280px" }}
              />
            </Box>
            <Box>
              <CardData
                title={"BlogApp"}
                description={"My first BlogWebsite"}
                TechStack={"Mern Stack"}
                livePreview={"livePreview"}
                seeCode={"seeCode"}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Card;
