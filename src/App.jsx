import './App.css'
import React from 'react'
import { Logo } from './components/Logo'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App () {
  return (
    <div className="App">

      <div
        className="intro"
        style={{
          border: '1px solid', borderColor: '#ccc', padding: '16px', borderRadius: '16px', filter: 'drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.25))'
        }}
      >
        <Logo />
        <Main/>
        <Footer/>
     </div>
      <span className="with-love"><i className="fa fa-heart" /></span>

    </div>

  )
}

export default App
