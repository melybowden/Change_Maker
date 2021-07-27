import React, { Component } from 'react'
import logo from './logo.jpg'
// import Counter from './counter'
import {FiShoppingCart} from 'react-icons/fi'
import axios from 'axios'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.getTrivia = this.getTrivia.bind(this)
    }

    getTrivia(number) {
        axios.get("http://numbersapi.com/"+number+"/trivia")
        .then( results => {
            alert(results.data)
            return results.data}
        )
    }

    render() {
        return (
            <div className="align-header">
                <img src={logo} alt="logo" height={130} width={130}/>
                <h1>Change Maker Calculator</h1>
                <h1><FiShoppingCart/> {this.props.count}</h1>
                {this.getTrivia(this.props.count)}
            </div>
        )
    }
}
