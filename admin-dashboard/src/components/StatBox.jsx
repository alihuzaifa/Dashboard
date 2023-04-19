import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();
  return (
    /*The code "flex={'1 1 100%'}" sets the flex property for an element in a CSS stylesheet.

The flex property is used in CSS to specify how a flexible item should grow or shrink to fit the available space in its container. The value "1 1 100%" is a shorthand notation for three separate values that control the flex-grow, flex-shrink, and flex-basis properties, respectively.

Here's what each value means:

flex-grow: This value determines how much the element should grow if there is extra space in the container. A value of 1 means the element will grow equally with other flex items that have a flex-grow value of 1. If no other elements have a flex-grow value, the element will take up all available space.
flex-shrink: This value determines how much the element should shrink if there isn't enough space in the container. A value of 1 means the element will shrink equally with other flex items that have a flex-shrink value of 1. If no other elements have a flex-shrink value, the element will not shrink.
flex-basis: This value determines the initial size of the element before any remaining space is distributed. A value of 100% means the element should take up all available space in the container.
Overall, the code "flex={'1 1 100%'}" means that the element should grow and shrink equally with other elements that have a flex-grow and flex-shrink value of 1, and should initially take up all available space in its container. */
    <Box
      gridColumn={"span 2"}
      gridRow={"span 1"}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      p={"1.5rem"}
      flex={"1 1 100%"}
      backgroundColor={theme.palette.background.alt}
      borderRadius={"0.55rem"}
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title || "title"}
        </Typography>
        {icon || "icon"}
      </FlexBetween>
      <Typography
        variant="h3"
        fontWeight={"600"}
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value || "empty"}
      </Typography>
      <FlexBetween gap={"1rem"}>
        <Typography
          variant="h5"
          fontStyle={"italic"}
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase || "10%"}
        </Typography>
        <Typography>{description || "no description"}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
