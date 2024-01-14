import { styled, Box } from "@mui/system";
import React from "react";
import Table from "../components/Table";
import { ListingPageProps } from "../types";

const StyledBox = styled(Box)({
  width: "90%",
  height: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const FullPageBackground = styled(Box)({
  width: "98vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ListingPage: React.FC<ListingPageProps> = () => {
  return (
    <FullPageBackground>
      <StyledBox component="main">
        <Table />
      </StyledBox>
    </FullPageBackground>
  );
};

export default ListingPage;
