import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((element, index) => (
        <Box key={index}>
          {element.id.videoId && <VideoCard video={element} />}
          {element.id.channelId && <ChannelCard channelDetails={element} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
