"use client";

import { Box, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";

export default function ChatBotMessage({
  text,
  isBot,
}: {
  text: string;
  isBot: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: 1,
        flexDirection: isBot ? "row" : "row-reverse",
      }}
    >
      {isBot ? (
        <AccountCircleIcon sx={{ fontSize: 32, color: "action.active" }} />
      ) : (
        <FaceIcon sx={{ fontSize: 32, color: "primary.main" }} />
      )}

      <Paper
        elevation={0}
        sx={{
          px: 1.5,
          py: 1,
          maxWidth: {
            xs: "85%",
            sm: "75%",
            md: "65%",
          },
          bgcolor: isBot ? "grey.200" : "primary.main",
          color: isBot ? "text.primary" : "common.white",
          borderRadius: 3,
          ...(isBot
            ? { borderBottomLeftRadius: 0 }
            : { borderBottomRightRadius: 0 }),
        }}
      >
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.5,
            wordBreak: "break-word",
            overflowWrap: "anywhere",
          }}
        >
          {text}
        </Typography>
      </Paper>
    </Box>
  );
}
