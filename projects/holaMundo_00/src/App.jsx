import './App.css'
import { TWitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    const format = (userName) => `@${userName}`

    return(
       <section className='App' >

        <TWitterFollowCard 
        formatUsername={format} 
        isFollowing 
        userName="elpelonduran" 
        name="Mauro Durán Pérez"/>

        <TWitterFollowCard 
        formatUsername={format} 
        isFollowing 
        userName="matiasgg" 
        name="Matias Antonio Olivares"/>

        <TWitterFollowCard 
        formatUsername={format} 
        isFollowing 
        userName="pascalino" 
        name="Patricio Pascal"/>

        <TWitterFollowCard 
        formatUsername={format} 
        isFollowing 
        userName="rositagm" 
        name="Rosangela Ruiz"/>

        <TWitterFollowCard 
        formatUsername={format} 
        isFollowing 
        userName="ferchotv" 
        name="Fernando González"/>

       </section>

    )
}