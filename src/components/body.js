import React, { Component } from 'react'
import Receipt from './receipt'
import Catalog from './catalog'
import axios from 'axios'

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
            done: false,
            joke: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePayment = this.handlePayment.bind(this)
        this.handleQuickAdd = this.handleQuickAdd.bind(this)
        this.postTransaction = this.postTransaction.bind(this)
    }

    postTransaction() {
        console.log("Posting transaction");
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("https://vast-scrubland-04510.herokuapp.com/book", {"title":this.state.currentItem, "author":this.state.currentCost, "year":this.state.currentQuantity})
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }

    handleQuickAdd(event) {
        event.preventDefault()
        this.setState(state => 
            {const cart = [...state.cart, [event.target.name, 1, event.target.value, this.state.total+event.target.value]];
                return {
                    cart
                };
            });
        this.setState({total: Math.round((this.state.total+parseFloat(event.target.value))*100)/100})
        this.props.addItem(this.props.count + 1)
        // this.postTransaction(); // Doesn't update this.state.current...
        // console.log(this.state.cart)
    }

    handleSubmit(event){ //add to car
        event.preventDefault()
        this.setState(state => 
            {const cart = [...state.cart, [this.state.currentItem, this.state.currentQuantity, this.state.currentCost, this.state.currentQuantity*this.state.currentCost]];
                return {
                    cart
                };
            });
        this.setState({total: Math.round((this.state.total+(this.state.currentQuantity*this.state.currentCost))*100)/100})
        //console.log("hi: "+this.state.currentItem+" c: "+this.state.currentCost +" Q: " +this.state.currentQuantity)
        // console.log(this.state.cart)
        this.props.addItem(this.props.count + 1)
        this.postTransaction();
    }

    handlePayment(event){
        event.preventDefault()
        // alert("paid"+this.state.paid)
        this.setState({done:true})
        // axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "text/plain" } })
        // .then( results => 
        //     { this.setState(
        //         {joke: results.data}
        //     )
        //     }
        // )
        // axios.get("https://vast-scrubland-04510.herokuapp.com/book", {headers: {Authorization: "Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk" }})
        axios.get("https://vast-scrubland-04510.herokuapp.com/book")
        .then( results => 
            { 
                // console.log(results.data[0].title);
                this.setState({joke: results.data[0].title})
            }
        )
    }

    render() {
        return (
            <div>
                <div style={{paddingTop:'5vh'}}><em>Instructions:</em> Add items to your cart, a payment amount, and click checkout to reveal the amount of change returned to you!</div>
            
            <div style={{display:'flex', justifyContent:'space-evenly', padding:'5vh'}}>
                 
               <div style={{display:'flex', flexFlow:'column wrap'}}>
                <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'space-around'}}>
               <form onSubmit={this.handleSubmit} className="form">
                   <h1>Add Items</h1>
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
               
               <form onSubmit={this.handlePayment} className="form">
                   <h1>Checkout</h1>
                    <label>
                       Payment: <input type = "number" step ="0.01" name = "paid" value = {this.state.paid} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type ="submit" value="Checkout" />
                </form>
                </div>
                <div>
                <h1>Quick Add Items</h1>
                <Catalog handleQuickAdd={this.handleQuickAdd}/>
               </div>
               </div>
            <Receipt cart= {this.state.cart} paid= {this.state.paid} total={this.state.total} done={this.state.done} joke={this.state.joke}/>

            </div>
            </div>
        )
    }
}
