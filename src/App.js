import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import Uramaki from './images/dynamite.png';
import Dragon from './images/dragon.png';
import Kirashi from './images/philadelphia.png';
import Rainbow from './images/shrimp.png';
import Nigiri from './images/rainbow.png';
import Udon from './images/dynamite.png';

const menoldu = [{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
},
{
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
},
{
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}, {
  nome: "uramaki2",
  prezzo: 5,
  img: Rainbow
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
},
{
  nome: "uramaki",
  prezzo: 5,
  img: Uramaki
}]

function App() {
  const [menu2, setmenu2] = useState ([]);
  useEffect(() => {
    // Imposto lo stato con quello che voglio e quando voglio
    // Qui potrei chuamare delle API, e quando avrò la risposta imposterò lo stato
    setmenu2([
      {
        nome: "uramaki2",
        prezzo: 5,
        img: Rainbow
      },
      {
        nome: "uramaki",
        prezzo: 5,
        img: Uramaki
      },
    ])
  }, []);
 
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            {menu2.map((val) => {
              return <Card nome={val.nome} prezzo={val.prezzo} img={val.img} />
            })}


          </div>
        </div>
      </>
    );
  }


export default App;
