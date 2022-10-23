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
<div className="flex justify-center align-center">
      <span className="with-love">
        <a href="https://instagram.com/yuvkky?igshid=YmMyMTA2M2Y=">
          <i className="fa fa-heart" style={{ color: '#B0C8FA' }} />
        </a>
      </span>
      <span className="with-love"><i className="fa fa-heart" style={{ color: '#C8A7E0' }}/></span>
      <span className="with-love"><i className="fa fa-heart" style={{ color: '#F6C9D2' }}/></span>

</div>

    </div>

  )
}

export default App
