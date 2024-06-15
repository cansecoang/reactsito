export function TWitterFollowCard({formatUsername, userName, name, isFollowing, }) {
    return (

<article className='tw-follow-card'>
    
    <header className= 'tw-follow-card-header'>
        <img 
        className='tw-follow-card-avatar'
        alt="foto-creeper" 
        src={`https://unavatar.io/${userName}`}></img>

        <div className='tw-follow-card-info'>
            <strong>{name}</strong>
            <span className='tw-follow-card-infoUsername'>{formatUsername(userName)}</span>
        </div>
    </header>

    <aside>
        <button className='tw-follow-card-button'>Seguir</button>
    </aside>

</article>

    )
}