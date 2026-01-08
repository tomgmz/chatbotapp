"use client";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Paper, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

export default function ChatBotMessage({ text, isBot }: { text: string; isBot: boolean }) {
  return (
    <div 
      className={`flex w-full items-end gap-2 
        ${isBot ? 'flex-row justify-start' : 'flex-row-reverse justify-start'}`}
    >
      {isBot ? (
        <AccountCircleIcon sx={{ fontSize: 32, color: 'action.active', mb: 0.5 }} />
      ) : (
        <FaceIcon sx={{ fontSize: 32, color: 'primary.main', mb: 0.5 }} />
      )}
      
      <Paper
        elevation={0}
        sx={{
          p: 1.5,
          bgcolor: isBot ? 'grey.200' : 'primary.main',
          color: isBot ? 'text.primary' : 'white',
          maxWidth: '70%',
          borderRadius: 3,
          ...(isBot
            ? { borderBottomLeftRadius: 0 }
            : { borderBottomRightRadius: 0 }),
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            overflowWrap: 'anywhere', 
            wordBreak: 'break-word',
            lineHeight: 1.5
          }}
        >
          {text}
        </Typography>
      </Paper>
    </div>
  );
}