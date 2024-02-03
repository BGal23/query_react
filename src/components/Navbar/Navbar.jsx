import { AppBar, Box, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pages = ["Home", "About", "Contact"];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <IconButton>
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          <Box>
            {pages.map((page) => (
              <Button color="secondary" fontSize="large" key={page}>
                <Link
                  to={`/${page === "Home" ? "" : page.toLocaleLowerCase()}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        )}
      </AppBar>
    </header>
  );
};

export default Navbar;
