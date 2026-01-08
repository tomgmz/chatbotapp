"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import { Paper, Typography } from "@mui/material";

export default function ChatBotMessage({
  text,
  isBot,
}: {
  text: string;
  isBot: boolean;
}) {
  return (
    <div
      className={`flex items-end gap-2 w-full ${
        isBot ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {isBot ? (
        <AccountCircleIcon className="text-gray-600" />
      ) : (
        <FaceIcon className="text-blue-600" />
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
    </div>
  );
}
