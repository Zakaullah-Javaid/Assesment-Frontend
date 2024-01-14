import { styled, Box } from "@mui/system";
import React from "react";
import Display from "../components/Display";

interface ListingPageProps {
  // Define your prop types here if needed
}

const StyledBox = styled(Box)({
  width: "80%", // Set the width to 70%
  height: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const FullPageBackground = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ListingPage: React.FC<ListingPageProps> = () => {
  return (
    <>
      <FullPageBackground>
        <StyledBox component="main">
          <Display />
        </StyledBox>
      </FullPageBackground>
    </>
  );
};

export default ListingPage;
