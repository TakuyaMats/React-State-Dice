import React, { Component } from 'react';
import './Die.css'

let faDice = 'fas fa-dice-'

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 'one' };
        this.randomNum();
    }
    randomNum() {
        let numArr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        let randNum = numArr[Math.floor(Math.random() * numArr.length)];
        this.setState({ num: randNum });
    }
    render() {
        let iconSrc = `${faDice}${this.state.num}`
        return(
            <div>
                <h1>Hello from Die.js</h1>
                <span className="Die">
                    <i className={iconSrc}></i>
                </span>
            </div>
        )
    }
}

export default Die;