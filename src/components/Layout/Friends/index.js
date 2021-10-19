import React, { useState } from 'react'
import Chat from './Chat'
import FriendsList from './FriendsList'
import { Wrapper } from './styles'

export default function Friends() {
  const [selectedFriend, setSelectedFriend] = useState(null)

  return (
    <Wrapper>
      <Chat />
      <FriendsList />
    </Wrapper>
  )
}
