import React, {useState} from 'react';
import Confetti from 'react-confetti'
import './App.css';

function App() {
  const [showConfetti, setSwowConfetti] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {!showConfetti &&
          <img 
            src="https://freepikpsd.com/file/2019/10/present-png-icon-1-1-Transparent-Images.png"
            alt="new"
            onClick={() => setSwowConfetti(!showConfetti)}
          />
        }
        {showConfetti &&
          <React.Fragment>
              <Confetti
                width={window.screen.width}
                height={window.screen.height}
              />
              <div className='card-body'>
                <img src='https://c.tenor.com/w9t5gL4hnK0AAAAC/carlton-dance.gif'></img>

                <div class="box">
                  <div class='inner'>
                    <h1>Valido por un regalo</h1>
                  <div class='info clearfix'>
                    <div class='wp'>Monto<h2>6k - 8k</h2><h2>2K</h2></div>
                    <div class='wp'>Moneda<h2>Pesos</h2><h2>PESOS</h2></div>
                    <div class='wp'>Concepto<h2>BDAY</h2><h2>Gorra papa</h2></div>
                  </div>
                  <div class='total clearfix'>
                    <h2>Total : <p>$ 10.000</p></h2>
                  </div>
                </div>
                </div>
              </div>
          </React.Fragment>

        }
      </header>
    </div>
  );
}

export default App;
