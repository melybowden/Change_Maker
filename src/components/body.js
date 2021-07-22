import React, { Component } from 'react'
import Receipt from './receipt'

export default class body extends Component {
    constructor(props){
        super(props)
        this.state={
            currentItem : "",
            currentCost : 0,
            currentQuantity : 0,
            cart : [],
            paid: 0,
            total: 0, 
            done: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePayment = this.handlePayment.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit(event){ //add to cart
        event.preventDefault()
        this.setState(state => 
            {const cart = [...state.cart, [this.state.currentItem, this.state.currentQuantity, this.state.currentCost]];
                return {
                    cart
                };
            });
        this.setState({total: this.state.total+(this.state.currentQuantity*this.state.currentCost)})
        //console.log("hi: "+this.state.currentItem+" c: "+this.state.currentCost +" Q: " +this.state.currentQuantity)
        console.log(this.state.cart)
        this.props.addItem(this.props.count + 1)
    }

    handlePayment(event){
        event.preventDefault()
        // alert("paid"+this.state.paid)
        this.setState({done:true})
    }

    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-evenly', padding:'5vh'}}>
            <div>
               <form onSubmit={this.handleSubmit} className="form">
                   <label>
                       Item: <input type = "text" name = "currentItem" value = {this.state.currentItem} onChange = {this.handleChange}/>
                   </label>
                   <br/>
                   <label>
                       Cost: <input type = "number" step ="0.01" name = "currentCost" value = {this.state.currentCost} onChange = {this.handleChange}/>
                   </label>
                   <br/>
                   <label>
                       Quantity: <input type = "number" name = "currentQuantity" value = {this.state.currentQuantity} onChange = {this.handleChange}/>
                   </label>
                   <br/>
                   <input type= "submit" value ="Add to Cart "onSubmit={this.handleSubmit}></input>
               </form>
               </div>

               
               <form onSubmit={this.handlePayment} className="form">
                    <label>
                       Payment: <input type = "number" step ="0.01" name = "paid" value = {this.state.paid} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type ="submit" value="Checkout" />
                </form>
            <Receipt cart= {this.state.cart} paid= {this.state.paid} total={this.state.total} done={this.state.done}/>
            </div>
        )
    }
}
