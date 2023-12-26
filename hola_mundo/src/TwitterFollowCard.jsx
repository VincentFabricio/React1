export function TwitterFollowCard({formatUserName,userName, name, isFollowing}){
    const addAt = (userName) => `@${third}`
    return(
        <article className='tw-followCad'>
            <header className='tw-followCad-header'>
                <img className='tw-followCad-avatar' 
                alt="El avatar" 
                src={'https://unavatar.io/${userName}'}></img>
                <div className='tw-followCad-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCad-infoUserName' >{formatUserName(userName)}</span>
                </div>
                
            </header>
            <aside>
                <button className='tw-followCad-button'>Seguir</button>
            </aside>
        </article>
    )
}