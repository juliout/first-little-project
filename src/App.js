import './app.css'
import React, { useState, useEffect} from 'react';
import logo from './components/image/logo.png'


export default function App() {

  const [personagens, setPersonagens] = useState([])

  useEffect(()=>{
    function loadPersonagens(){
      let url = 'https://rickandmortyapi.com/api/character?page=1'
      fetch(url).then((r)=> r.json()).then((resultado)=>{setPersonagens(resultado.results)})
    }
    loadPersonagens()
  },[])


  return (
    <div className="pai">
    <main className="main">
      {personagens.map((p)=> {
        return(
            <div className="divPai" key={p.id}>
              <img src={p.image} alt={p.name} title={p.name} className="imgCx"/>
              
              <div className="caixaUl">
                <ul className="ul">
                  <li><h1>{p.name}</h1></li>
                  <li className="live">{p.status}</li>
                  <li>specie: {p.species}</li>
                  <li>gender: {p.gender}</li>
                </ul>
              </div>

            </div>          
        )
      })}
    </main>
    <aside className="aside">
      <img src={logo} alt="" className="logo"/>
    </aside>
    </div>
  );
  }