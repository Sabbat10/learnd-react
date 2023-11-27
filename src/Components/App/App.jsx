import { useState } from 'react'
import './App.css'

// Composants
import Eleve from '../Eleves/Eleve'

function App() {
  return (
    <div>
      <h1>Bienvenue dans la classe de Terre</h1>
      <div className=''>
        <Eleve nom="Sabbat Lumpatshia" moyenne="20">"Aller toujour plus loin"</Eleve>
        <Eleve nom="Meghan Kasala" moyenne="15"/>
        <Eleve nom="Alliance Tshidanyi" moyenne="10"/>
      </div>
    </div>
   )
}
export default App
