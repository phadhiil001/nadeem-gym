import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import {generateWorkout} from "./utils/functions"

function App() {
  const [workout, setworkout] = useState(null)
  const [poison,setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkOut() {
    if(muscles.length < 1) {
      return
    }

    let newWorkout = generateWorkout({poison, muscles, goal})
    setworkout(newWorkout)

    window.location.href ='#workout'
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator 
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkOut={updateWorkOut}
        />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
