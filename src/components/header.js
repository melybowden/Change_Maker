import React, { Component } from 'react'
import logo from './logo.jpg'
import Counter from './counter'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
        this.updateClicks=this.updateClicks.bind(this)
    }

    updateClicks() {
        this.setState({
            clicks: 0
        })
    }

    render() {
        return (
            <div class="align-header">
                <img src={logo} alt="logo" height={130} width={130}/>
                <h1>Change Maker Calculator</h1>
                <Counter updateClicks = {this.state.clicks}/>
            </div>
        )
    }
}
