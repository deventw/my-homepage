import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

      <div
        className="intro"
        style={{
          border: '1px solid', borderColor: '#ccc', padding: '16px', borderRadius: '16px', filter: 'drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.25))',
        }}
      >

        <div style={{ textAlign: 'right', marginBottom: '40px' }}>
          <a href="#">
            <img className="avatar" src="https://avatars.githubusercontent.com/u/63999575?v=4" width="100" />
          </a>
        </div>

        <p>Heyo! I'm DevenTW.</p>
        {/* <p>I live in Hong Kong and just graduated 🎓.</p> */}
        <p>I live in Hong Kong and work as a Developer 👨‍💻. </p>

        <p>
          I am also a

          <a href="https://blog.deven.tw">Blogger</a>
          📝,
          <a href="https://instagram.com/wt.neved">Photographer</a>

          📸.
          {/* <a href="https://pho.deven.tw">Photographer</a> 📸.
          and <a href="https://blog.deven.tw/travel/">Traveler</a> 🌍.  */}
        </p>
        {/* <p>
          <a href="/lib.html">Here</a> are some projects I have made.
          </p> */}

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

      </div>
      <span className="with-love"><i className="fa fa-heart" /></span>

    </div>

  );
}

export default App;
