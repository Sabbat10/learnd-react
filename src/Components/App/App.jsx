import { useState } from 'react'
import './App.css'

// Composants
import Eleve from '../Eleves/Eleve'

function App() {
  const state = {
    eleve : [
      {nom : 'Sabbat Lumpatshia', moyenne: 20},
      {nom : 'Meghan Kasala', moyenne: 15}
    ]
  }
  return (
    <div>
      <h1>Bienvenue dans la classe de Terre</h1>

      <div className=''>
        {/* recuperation des information grâce au state */}
        <Eleve 
            nom={state.eleve[0].nom} moyenne={state.eleve[0].moyenne}>"Aller toujour plus loin"
        </Eleve>

        <Eleve 
            nom={state.eleve[1].nom} moyenne={state.eleve[1].moyenne}>
        </Eleve>
      
      </div>
    </div>

   )
}
export default App
