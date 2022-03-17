import React, { Component } from 'react';
import california from '../images/philadelphia.png';


class Card extends Component {
    render() {
        return (
            <div className='col'>
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <img src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nome}</h5>
                        <p className="card-text">€{this.props.prezzo}</p>
                        <button className="btn btn-outline-danger">Ordina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;