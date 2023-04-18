import { Box, Typography } from "@mui/material";

function RequestListItem() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      whiteSpace="nowrap"
      overflow="auto"
      pb={2}
      mb={2}
    >
      <Typography>
        URL: https://jsonplaceholder.typicode.com/comments?postId=1
      </Typography>
      <Box
        borderRadius={5}
        border="1px solid black"
        alignSelf="flex-start"
        px={2}
      >
        <Typography component="span" variant="caption">
          METHOD: GET
        </Typography>
      </Box>
    </Box>
  );
}

export default RequestListItem;
