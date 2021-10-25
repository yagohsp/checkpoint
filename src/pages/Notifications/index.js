import React from 'react'
import { ProfilePhoto } from '../../components'
import { Container, Notification } from './styles'

export default function Notifications() {
  return (
    <Container>
      <Notification>
        <ProfilePhoto />
        <p><strong>Yago</strong> quer adicionar você</p>
      </Notification>
    </Container>
  )
}
