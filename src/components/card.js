import React, { Component } from 'react';
import california from '../images/philadelphia.png';


class Card extends Component {
    render() {
        return (
            <div className='col'>
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <img src={california} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Philadelphia Roll</h5>
                        <p className="card-text">€1.99</p>
                        <button className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;