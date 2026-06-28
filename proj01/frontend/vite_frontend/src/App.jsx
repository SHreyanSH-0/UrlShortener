import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Url from './components/Url'
import Background from './components/Background'
import Sidebar from './components/Sidebar'

function App() {

  const [shortenUrl, setShortenUrl] = useState(null)

  return (
    <>
      <Background url={<Url setShortenUrl={setShortenUrl} />} shortenUrl={shortenUrl} />
    </>
  )
}

export default App
