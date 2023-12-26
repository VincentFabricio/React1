import { useState } from "react"

export function TwitterFollowCard({initIsFollowing, userName='Unknown', children}){
    const [isFollowing, setIsFollowing] = useState(initIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 
    'tw-followCad-button is-following' : 'tw-followCad-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log('Render with Name', userName)

    return(
        <article className='tw-followCad'>
            <header className='tw-followCad-header'>
                <img className='tw-followCad-avatar' 
                alt="El avatar" 
                src={'https://unavatar.io/${userName}'}></img>
                <div className='tw-followCad-info'>
                    <strong>{children}</strong>
                    <span
                    className='tw-followCad-infoUserName' >@{userName}</span>
                </div>
                
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}