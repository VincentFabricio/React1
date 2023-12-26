import { useState } from "react"

export function TwitterFollowCard({formatUserName, userName='Unknown', children}){
    const [isFollowing, setIsFollowing] = useState(false)

    const addAt = (userName) => `@${userName}`

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 
    'tw-followCad-button is-following' : 'tw-followCad-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCad'>
            <header className='tw-followCad-header'>
                <img className='tw-followCad-avatar' 
                alt="El avatar" 
                src={'https://unavatar.io/${userName}'}></img>
                <div className='tw-followCad-info'>
                    <strong>{children}</strong>
                    <span
                    className='tw-followCad-infoUserName' >{formatUserName(userName)}</span>
                </div>
                
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}