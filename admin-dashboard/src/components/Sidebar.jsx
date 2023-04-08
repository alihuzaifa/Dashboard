import React, { useState, useEffect } from "react";
import {
  Drawer,
  Box,
  Divider,
  IconButton,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

// ALL ICONS
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import UserImage from "../assets/images/user.png";
const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSideBarOpen,
  setIsSideBarOpen,
  data,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const navItem = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          onClose={() => {
            setIsSideBarOpen(false);
          }}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width={"100%"}>
            <Box m={"1.5rem 2rem 2rem 3rem"}>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display={"flex"} alignItems="center" gap={"0.5rem"}>
                  {/* MUI provides a set of pre-defined typography components that you can use to display various types of text. These components are based on the Material Design specification and follow the same typography guidelines */}
                  <Typography variant="h4" fontWeight={"bold"}>
                    {data?.name?.toUpperCase()}
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton
                    onClick={() => {
                      setIsSideBarOpen(!isSideBarOpen);
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItem?.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                // The ListItem component in MUI (Material-UI) is used to create a single item in a list. It can be used as a building block to create a full list or a simple standalone component.
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active == lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active == lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active == lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && <ChevronRightOutlined />}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box m={"0.5rem 0rem"}>
            <Divider />
            <FlexBetween
              textTransform={"none"}
              gap={"1rem"}
              m="1.5rem 2rem 0 3rem"
            >
              <Box
                component={"img"}
                alt="user-image"
                src={UserImage}
                width="40px"
                height="40px"
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                }}
              />

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
                  }}
                >
                  {data?.occupation}
                </Typography>
              </Box>
              <Box>
                <SettingsOutlined />
              </Box>
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
