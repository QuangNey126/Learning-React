import React, { Component } from 'react'
import './Car.css';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: 'assets/img/red-car.png'
        }
    }


    // changeRedColor = () => {
    //     this.setState({
    //         selectedCar: 'assets/img/red-car.png'
    //     })
    // }

    // changeBlackColor = () => {
    //     this.setState({
    //         selectedCar: 'assets/img/black-car.png'
    //     })
    // }

    // changeWhiteColor = () => {
    //     this.setState({
    //         selectedCar: 'assets/img/white-car.png'
    //     })
    // }

    changeCarColor = (color) => {
        this.setState({
            selectedCar: color
        })
    }

    // Note: (img) là thẻ self-closing tag => (<img/>)
    render() {
        return (
            <div className="car">
                <div className="car__left">
                    <h2>Please choose your car's color</h2>
                    <img src={this.state.selectedCar} />
                </div>
                <div className="car__right">
                    <button className="button red" onClick={() => this.changeCarColor("assets/img/red-car.png")}>
                        Red
                    </button>
                    <button className="button black" onClick={() => this.changeCarColor("assets/img/black-car.png")}>
                        Black
                    </button>
                    <button className="button white" onClick={() => this.changeCarColor("assets/img/white-car.png")}>
                        White
                    </button>
                </div>
            </div>
        )
    }
}