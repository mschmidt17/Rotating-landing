import { useState } from 'react';
import { FaBars, FaEnvelope, FaHome, FaTimes, FaUserAlt } from 'react-icons/fa';
import Icon from './icon.js';
import './App.css';


function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className={`container${showNav ? ' show-nav' : ''}`}>
        <div className="circle-container">
          <div className="circle">
            <button className="close"  id="close" onClick={() => setShowNav(false)}>
              <Icon icon={<FaTimes />} />
            </button>
            <button className="open" id="open" onClick={() => setShowNav(true)}>
              <Icon icon={<FaBars />} />
            </button>
          </div>
        </div>
        <div className="content">
          <h1 style={{'fontSize':'3rem'}}>PV Mates</h1>
          <p className='text'>
          'El mate no es una bebida. Bueno, sí. Es un líquido y entra por la boca. Pero no es una bebida. Es la actitud ética, franca y leal de encontrarse sin mayores pretensiones que compartir. El día que un chico pone la pava al fuego y toma su primer mate sin que haya nadie en casa, en ese minuto, es que ha descubierto que tiene alma.'
          </p>
          <section className="section">
            <div className="navegacion">
                <p style={{'letterSpacing':'2px'}}>CATEGORIAS</p>
            </div>
            <div className="articulos">
                <article className="article">
                  <img src="https://raw.githubusercontent.com/mschaberger/pvmates/main/img/imperial.jpg" alt=""/>
                  <a href="#">IMPERIAL</a>
                </article>
                <article className="article">
                  <img src="https://raw.githubusercontent.com/mschaberger/pvmates/main/img/torpedo.png" alt=""/>
                  <a href="#">TORPEDO</a>
                </article>
                <article className="article">
                  <img src="https://raw.githubusercontent.com/mschaberger/pvmates/main/img/camionero.png" alt=""/>
                  <a href="#">CAMIONERO</a>
                </article>                
                <article className="article">
                  <img src="https://raw.githubusercontent.com/mschaberger/pvmates/main/img/aluminio.png" alt=""/>
                  <a href="#">ALUMINIO</a>
                </article>
            </div>
        </section>

        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#!">
              <Icon icon={<FaHome />} className="icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#!">
              <Icon icon={<FaUserAlt />} className="icon" />
              About
            </a>
          </li>
          <li>
            <a href="#!">
              <Icon icon={<FaEnvelope />} className="icon" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;

