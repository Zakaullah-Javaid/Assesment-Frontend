import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ListingPage from "./pages/ListingPage";
import TestTable from "./pages/ProfilePage";

const App: React.FC = () => {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/profile" element={<TestTable />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
