import React, {useState} from 'react'

function Character({character}) { // ❗ Add the props
  const [isHomeworldVisible, setIsHomeworldVisible] = useState(false)// ❗ Create a state to hold whether the homeworld is rendering or not
  const toggleHomeworld = () => {
    setIsHomeworldVisible(!isHomeworldVisible)
  }// ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'onClick={toggleHomeworld}>
     <h2 className='character-name'>{character.name}</h2> 
     {isHomeworldVisible && <p className='character-planet'>planet: {character.homeworld.name}</p>}{/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
