import React from 'react'
import Chat from './Chat'
import FriendsList from './FriendsList'
import { Wrapper } from './styles'

export default function Friends() {
  return (
    <Wrapper>
      <Chat />
      <FriendsList />
    </Wrapper>
  )
}
