import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () { 
    const format = (userName) => `@${third}`
    return (
        <div className='App'>
            <TwitterFollowCard 
            formatUserName={format} 
            userName="midudev" 
            name="Vincent Fabricio" 
            isFollowing={true}></TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="pherald" name="Mancera Hernández" isFollowing={false}></TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="midudev" name="Vincent" isFollowing></TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="pherald" name="Fabricio" isFollowing></TwitterFollowCard>
        </div>
        
    )
}