import { Box, Button, Typography } from "@mui/material";

import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={scss.hero}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
        }}
      >
        <Typography
          sx={{ color: "white", textAlign: "center" }}
          variant="h2"
          component="h3"
        >
          Click hear to explore
        </Typography>
        <Button variant="contained">Click!</Button>
      </Box>
    </div>
  );
};
export default Hero;
