"use client";

import { TextField, Button } from '@mui/material';

import ChatBotMessage from '../components/ChatBotMessage';

export default function ChatBotHomePage() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden p-4 bg-gray-50">
      
      <div className="flex-grow overflow-y-auto mb-4 space-y-4">
        <ChatBotMessage text="Hello!" isBot={false} />
        <ChatBotMessage text="Hello! How can I help you today?" isBot={true} />
      </div>

      <div className="flex flex-row gap-2 items-center bg-white p-2">
        <TextField 
          fullWidth
          placeholder="Message to Chat Bot"
          variant="outlined"
          size="small"
        />
        <Button variant="contained">Send</Button>
      </div>
    </div>
  );
}
