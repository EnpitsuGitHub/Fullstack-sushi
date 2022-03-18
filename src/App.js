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
  const [nomeDrink, setNomeDrink] = useState('');
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomeDrink}`)
    .then(response =>response.json())
    .then (data =>{
      setmenu2 (data.drinks)
      console.log(data)
    })
    .catch(() => {
      console.log();
    });
    // Imposto lo stato con quello che voglio e quando voglio
    // Qui potrei chuamare delle API, e quando avrò la risposta imposterò lo stato
    
  }, [nomeDrink]);
 
    return (
      <>
        <input onChange={(polpetta)=>{
      {console.log(polpetta.target.value)}
        setNomeDrink (polpetta.target.value)}} type="text" />
        <div>{nomeDrink}</div>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            {menu2.map((val) => {
              return <Card key={val.idDrink} nome={val.strDrink} prezzo={val.strCategory} img={val.strDrinkThumb} />
            })}


          </div>
        </div>
      </>
    );
  }


export default App;
