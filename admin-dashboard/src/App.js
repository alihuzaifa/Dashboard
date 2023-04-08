import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/layout";
import Products from "scenes/product";
import Customers from "scenes/product/customer";

const App = () => {
  const mode = useSelector((state) => state?.global?.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        {/* This component takes a theme prop and applies it to the entire React tree that it is wrapping around. It should preferably be used at the root of your component tree. */}
        <ThemeProvider theme={theme}>
          {/* You might be familiar with normalize.css, a collection of HTML element and attribute style-normalizations. */}
          <CssBaseline />
          <Routes>
            {/* any route within this particular component have the Layout component as the main parent */}
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
