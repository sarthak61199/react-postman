import { Box, Container, Typography } from "@mui/material";

function Header() {
  return (
    <Box bgcolor="#2196f3" py={2} mb={5}>
      <Container>
        <Typography
          variant="h2"
          color="white"
          letterSpacing={9}
          textAlign="center"
        >
          POSTWOMAN
        </Typography>
      </Container>
    </Box>
  );
}

export default Header;
