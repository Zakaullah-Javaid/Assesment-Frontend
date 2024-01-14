import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate, useLocation } from "react-router-dom";

const iconData = [
  { icon: <PublicIcon />, name: "PublicIcon" },
  { icon: <MailOutlineIcon />, name: "MailOutlineIcon" },
  { icon: <CalendarMonthIcon />, name: "CalendarMonthIcon" },
  { icon: <PinDropIcon />, name: "PinDropIcon" },
  { icon: <LocalPhoneIcon />, name: "LocalPhoneIcon" },
  { icon: <LockIcon />, name: "LockIcon" },
];

const StyledImageContainer = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 100,
  borderRadius: "50%",
  border: "1px solid #E8E8E8",
  background: "#FFFFFF",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  maxWidth: { md: "200px", xl: "300px" },
  maxHeight: { md: "200px", xl: "300px" },
  borderRadius: "50%",
});

const StyledBackButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  background: "#94BC5D",
  padding: "5px 20px",
  color: "#fff",
});

export default function TestTable() {
  const location = useLocation();
  const userData = location.state?.userData || null;

  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState("PublicIcon");

  const handleClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  useEffect(() => {
    console.log("Received user data:", userData);
  }, [userData]);

  return (
    <Box sx={{ padding: "60px", minWidth: "100%", width: "100%" }}>
      <StyledBackButton onClick={() => navigate("/")}>Back</StyledBackButton>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ background: "#2C2E31", width: "100%", height: "38vh" }} />
        <Box sx={{ background: "#F9F9F9", width: "100%", height: "38vh" }} />
        <Box
          sx={{
            width: "95%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
          <Box sx={{ width: "100%", height: "25vh", background: "#F9F9F9" }} />
          <Box sx={{ width: "100%", height: "46vh", background: "#FFFFFF" }}>
            <Box sx={{ position: "relative" }}>
              <StyledImageContainer>
                <StyledImage src={userData?.avatar} alt="User" />
              </StyledImageContainer>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: { xs: "5rem", md: "5rem" },
              }}
            >
              <Typography
                sx={{ color: "#A2A2A2", fontSize: "1rem", fontWeight: 400 }}
              >
                Hi, My name is
              </Typography>
              <Typography
                sx={{
                  color: "#2C2E31",
                  fontSize: "1.rem",
                  fontWeight: 500,
                  marginTop: { xs: "1rem", md: "1rem" },
                }}
              >
                {userData.name}
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem", paddingTop: "40px" }}>
                {iconData.map(({ icon, name }) => (
                  <Box
                    key={name}
                    onClick={() => handleClick(name)}
                    sx={{
                      borderTop:
                        activeIcon === name
                          ? "2px solid #94BC5D"
                          : "1px solid transparent",
                      paddingTop: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {React.cloneElement(icon, {
                      sx: {
                        color: activeIcon === name ? "#94BC5D" : "#D9D9D9",
                        width: "30px",
                        height: "30px",
                      },
                    })}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
