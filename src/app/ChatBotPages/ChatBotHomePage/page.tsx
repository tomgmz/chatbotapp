"use client";

import { Box, Container, TextField, Button } from "@mui/material";
import ChatBotMessage from "../components/ChatBotMessage";

export default function ChatBotHomePage() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.50",
      }}
    >
      <Container
        maxWidth="md"
        disableGutters
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          px: { xs: 1.5, sm: 2 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <ChatBotMessage text="Hello!" isBot={false} />
          <ChatBotMessage text="Hello! How can I help you today?" isBot />
        </Box>

        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            py: 1,
            display: "flex",
            gap: 1,
            bgcolor: "background.paper",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <TextField
            fullWidth
            placeholder="Message"
            size="small"
            inputProps={{
              enterKeyHint: "send",
            }}
          />
          <Button
            variant="contained"
            sx={{
              px: { xs: 2, sm: 3 },
              whiteSpace: "nowrap",
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
