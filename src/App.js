import './app.css'
import React, { useState, useEffect} from 'react';
import logo from './components/image/logo.png'
import Card from './components/card';
import Buttons from './components/buttons';

export default function App() {

  const [personagens, setPersonagens] = useState([])
  let [array, setArray] = useState(1)


  function nextPg(){
    if(array >= 34){
      return setArray(34)
    }else{
      let aumentou = array+1
      setArray(aumentou)
    }
  }

  function backPg(){
    if(array <= 1){
      return setArray(1)
    }else{
      let diminuiu = array-1;
      setArray(diminuiu)
    }
  }



  useEffect(()=>{
    function loadPersonagens(){
      let url = `https://rickandmortyapi.com/api/character?page=${array}`
      fetch(url).then((r)=> r.json()).then((resultado)=>{setPersonagens(resultado.results)})
    }
    loadPersonagens()
  },[array])

  return (
    <div className="pai">
    <main className="main">
      {personagens.map((p)=> {
        return(
          <Card key={p.id} image={p.image} name={p.name} 
                status={p.status} specie={p.species} gender={p.gender}/>
        )
      })}
    </main>
    <aside className="aside">
      <img src={logo} alt="" className="logo"/>
      <div className='buttons'>
        <Buttons onClick={backPg} className='btn backPage'>Back</Buttons>        
        <div>
          <p className="contador">{array}</p>
        </div>
        <Buttons onClick={nextPg} className='btn nextPage'>Next</Buttons>

      </div>
    </aside>
    </div>
  );
  }