import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {

  return (
    <div>
      <ProgressBar progress={80} title='Progress' description='this is test description' />
    </div>
  )
}

export default App
