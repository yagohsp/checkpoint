import React from 'react';
import { logout } from '../../services/user/authentication';
import { Feed } from './styles'; 

export default function Home() {
    return (
        <Feed>
            <button onClick={() => {
                logout()
            }}>Sair</button>
        </Feed>
    )
}
