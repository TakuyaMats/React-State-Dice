import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        return(
            <div>
                <span className="Die">
                    <i className={`fas fa-dice-${this.props.face}`}></i>
                </span>
            </div>
        )
    }
}

export default Die;