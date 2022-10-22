import React from 'react'

export const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

    <div className="card">
      <div className="text">505</div>
      <div className="text">0</div>
    </div>

    <p className="social">
      <a href="https://github.com/deventw" target="_blank" rel="noreferrer">
        <img
          className="icon"
          src="https://raw.githubusercontent.com/feathericons/feather/master/icons/github.svg"
          alt="github icon"
        />
      </a>
      {/* <a href="https://www.instagram.com/deven.tw/" target="_blank">
     <img class="icon" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/instagram.svg"
    alt="instagram icon" />
    </a>
    <a href="https://twitter.com/deven_tw" target="_blank">
      <img class="icon" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/twitter.svg"
        alt="twitter icon" />
    </a>  */}
    </p>

  </div>
  )
}
