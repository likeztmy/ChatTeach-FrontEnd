import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import PoemVisual from './pages/chinese/PoemVisual'

function App() {

  return (
    <div className="App">
      <PoemVisual />
    </div>
  )
}

export default App
