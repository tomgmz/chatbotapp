"use client";

import { TextField, Button } from "@mui/material";
import ChatBotMessage from "../components/ChatBotMessage";

export default function ChatBotHomePage() {
  return (
    <main className="min-h-[100dvh] bg-gray-50 flex justify-center">
      <section className="flex flex-col w-full max-w-3xl px-2 sm:px-4">
        
        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          <ChatBotMessage text="Hello!" isBot={false} />
          <ChatBotMessage text="Hello! How can I help you today?" isBot />
        </div>

        <div className="sticky bottom-0 bg-white border-t flex gap-2 p-2">
          <TextField
            fullWidth
            size="small"
            placeholder="Message"
            inputProps={{ enterKeyHint: "send" }}
          />
          <Button
            variant="contained"
            className="whitespace-nowrap px-4"
          >
            Send
          </Button>
        </div>

      </section>
    </main>
  );
}
