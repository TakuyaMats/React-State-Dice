import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "one", rolling: false };
        this.roll = this.roll.bind(this);
    }
    roll() {
        // pick 2 new rolls
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        // set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        // wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000)
    }
    render() {
        return (
            <div>
                <div className="RollDice">
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <div className="RollDice-Btn">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        onClick={this.roll}
                        disabled={this.state.rolling}
                        className="RollDice-Btn-Primary"
                        >{this.state.rolling ? "Rolling..." : "Roll Dice!"}</Button>
                </div>
            </div>
        )
    }
}

export default RollDice;



// class RollDice extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { num: 'one' };
//         this.Roll = this.Roll.bind(this);
//     }
//     Roll() {
//         let numArr = ['one', 'two', 'three', 'four', 'five', 'six'];
//         let randNum = numArr[Math.floor(Math.random() * numArr.length)];
//         this.setState({ num: randNum });
//     }
//     render() {
//         return (
//             <div>
//                 <div className="RollDice">
//                     <Die />
//                     <Die />
//                 </div>
//                 <div className="RollDice-Btn">
//                     <Button variant="primary" size="lg" onClick={this.Roll}>Roll Dice!</Button>
//                 </div>
//             </div>
//         )
//     }
// }