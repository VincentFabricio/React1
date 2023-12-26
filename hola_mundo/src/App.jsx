import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users =[
    {
        userName: 'vincentfabricio',
        name: 'Vincent Fabricio',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo H..',
        isFollowing: true
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hernández',
        isFollowing: false
    }
]

export function App () { 


    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }

        </section>
        
    )
}