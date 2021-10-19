import React from 'react'

import { ChatProvider } from "../../../providers/Chat";
import Chat from './Chat'
import FriendsList from './FriendsList'
import { Wrapper } from './styles'

export default function Friends() {
  //const [selectedFriend, setSelectedFriend] = useState(null)

  return (
    <Wrapper>
      <ChatProvider>
        <Chat />
        <FriendsList />
      </ChatProvider>
    </Wrapper>
  )
}
