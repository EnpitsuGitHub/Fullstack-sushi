import React, { Component, useState } from 'react';
import california from '../images/philadelphia.png';




function Card (props){

    const [contatore, setContatore]= useState (0);
    const bevuto =  contatore > 5? <div>hai bevuto troppo!!</div>: null

    // contatore
        return (
            <div className='col'>
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.nome}</h5>
                        <p className="card-text">€{props.prezzo}</p>
                        
                        <button onClick={()=> setContatore(contatore+1)} className="btn btn-outline-danger">Ordina</button>
                        <button onClick={()=> setContatore(contatore-1)} 
                        className="btn btn-outline-danger">Cancella</button>
                        <div>{contatore}</div>
                    </div>
                </div>
                   {bevuto}
            </div>
        );
   
}

export default Card;