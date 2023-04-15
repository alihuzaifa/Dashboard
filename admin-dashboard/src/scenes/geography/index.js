import { Box } from "@mui/material";
import Header from "components/Header";
import React from "react";
import { useGetGeographyQuery } from "state/api";

const Geography = () => {
  const { data, isLoading } = useGetGeographyQuery();
  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"GEOGRAPHY"} subtitle={"Entire list of geography"} />
    </Box>
  );
};

export default Geography;
