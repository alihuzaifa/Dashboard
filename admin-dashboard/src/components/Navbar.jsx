import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../state";
import {
  useTheme,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import UserImage from "../assets/images/user.png";

const Navbar = ({ isSideBarOpen, setIsSideBarOpen, data }) => {
  const dispatch = useDispatch();
  // The useTheme hook is provided by Material-UI to allow components to access the theme object defined by the ThemeProvider. Here's an example of how to use the useTheme hook in a functional component:
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        // by the help of position static property it will not move
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            //   gap property allow you to give give gap between each item either you set margin for each item just set gap property to a parent of element it will give gap to it's child according to instructions
            gap={"3rem"}
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap={"1.5rem"}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme?.palette?.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <IconButton
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                src={UserImage}
                alt="user-image"
                width="40px"
                height="40px"
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                }}
              />
            </IconButton>
            <Box textAlign={"left"}>
              <Typography
                fontSize={"0.9rem"}
                fontWeight="bold"
                sx={{ color: theme?.palette.secondary[100] }}
              >
                {data?.name}
              </Typography>
              <Typography
                fontSize={"0.7rem"}
                sx={{
                  color: theme?.palette.secondary[200],
                  marginTop: 0.4,
                }}
              >
                {data?.occupation}
              </Typography>
            </Box>
            <Box></Box>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
