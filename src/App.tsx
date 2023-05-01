import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import PoemVisual from './components/PoemVisual'
import { useRoutes } from 'react-router-dom'
import router from './router'

function App() {

  return (
    useRoutes(router)
  )
}

export default App
