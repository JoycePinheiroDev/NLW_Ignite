import './styles/global.css'

import { Habit } from "./componets/Habit"

function App() {
  return (
    <div>
        <Habit completed={3}/>
        <Habit completed={10}/>
        <Habit completed={20}/>
        <Habit completed={30}/>
    </div>
  )
}

export default App

// Componente: Reaproveitar / isolar 
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente

