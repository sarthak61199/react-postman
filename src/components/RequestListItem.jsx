import { Box, Typography } from "@mui/material";

function RequestListItem({ item }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      whiteSpace="nowrap"
      overflow="auto"
      pb={2}
      mb={2}
    >
      <Typography>URL: {item.requestUrl}</Typography>
      <Box
        borderRadius={5}
        border="1px solid black"
        alignSelf="flex-start"
        px={2}
      >
        <Typography component="span" variant="caption">
          METHOD: {item.requestMethod}
        </Typography>
      </Box>
    </Box>
  );
}

export default RequestListItem;
