import { AppBar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const pages = ["Home", "About", "Contact"];
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = (event) => setIsModalOpen(event.currentTarget);

  const handleClose = (page) => {
    navigate(`/${page === "Home" ? "" : page.toLocaleLowerCase()}`);
    setIsModalOpen(null);
  };

  return (
    <header>
      <AppBar
        sx={{
          boxShadow: 1,
          p: 2,
          minWidth: 300,
          height: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        {windowWidth < 768 ? (
          <>
            <IconButton onClick={handleOpen}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorEl={isModalOpen}
              open={Boolean(isModalOpen)}
            >
              {pages.map((page) => (
                <MenuItem onClick={() => handleClose(page)} key={page}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {pages.map((page) => (
              <Button
                onClick={() => handleClose(page)}
                color="secondary"
                fontSize="large"
                key={page}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}
      </AppBar>
    </header>
  );
};

export default Navbar;
