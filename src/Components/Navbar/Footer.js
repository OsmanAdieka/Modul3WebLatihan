import React from "react";
import { Box } from "./FooterElements";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center text vertically
          color: "white",
          margin: "10", // Remove default margin
          padding: "-10px", // Add padding for better appearance
        }}
      >
        I'm sOoO tired !_!
      </h1>
    </Box>
  );
};

export default Footer;
