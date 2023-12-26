import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () { 
    const format = (userName) => `@${userName}`
    const midudev = {formatUserName:format}

    return (
        <div className='App'>

            <TwitterFollowCard 
                formatUserName={format} 
                userName="midudev" >
                    <h1>Vincent Fabricio</h1>
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={format} 
                userName="pherald" >
                    <strong>Mancera Hernández</strong>
            </TwitterFollowCard>

            <TwitterFollowCard {... midudev}>
                    <h2>Mancera Hernández</h2>
            </TwitterFollowCard>

            
        </div>
        
    )
}