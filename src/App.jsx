// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Contador from './componentes/Contador'

function App() {

  return (
    <>
      <div className='app' style={{fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px'}}>
        <h1>React con Vite: Contador de clics con historial</h1>
        <Contador />
      </div>

    </>
  )
}

export default App
