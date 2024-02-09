import { Box, Typography } from "@mui/material";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";

const Logo = () => {
  return (
    <Box
      sx={{
        fontWeight: 700,
        fontSize: 24,
        display: "flex",
        alignItems: "center",
      }}
    >
      <DiamondTwoToneIcon fontSize="large" />
      <Typography variant="h4">🆈🅾🆄🆁-🆂🅷🅾🅿™</Typography>
    </Box>
  );
};

export default Logo;
