import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [data, setData] = useState([]);// ❗ Create state to hold the data from the API
  useEffect(() => {
    Promise.all([
    axios.get(urlPeople),
    axios.get(urlPlanets)
    ])
      .then(([peopleRes, planetsRes]) => {
        //combine data
        const peopleData = peopleRes.data
        const planetsData = planetsRes.data;

        const combinedData = peopleData.map(person => {
          const homeworld = planetsData.find(planet => planet.id === person.homeworld);
          return {...person, homeworld}
        })
        setData(combinedData)
        console.log(combinedData)
      })
      .catch( err => {
        console.log(err.message)
      },)
  },[])// ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {data.map(character => <Character key={character.id} character={character}/>)}{/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
