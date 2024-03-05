import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'
const ChatList = ({
  w="100%",
  chats=[],
  chatId,
  onlineUsers=[],
  newMessagesAlert=[],
handleDeleteChat,
}) => {
   return (
    <Stack>
      {chats?.map((data)=> {
        return<div>{data}</div>
      })}
    </Stack>
   )
  
}

export default ChatList
