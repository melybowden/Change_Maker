import React from 'react';
import {GiShinyApple, GiOrangeSlice, GiBananaBunch, GiStrawberry, GiCakeSlice, GiCoffeeCup} from 'react-icons/gi';

export default function catalog(props) {
    const Card = ({icon, price, c, add, name}) => <div><div style={{fontSize: 100, color:c}}>{icon}</div><br /><button onClick={add} name={name} value={price}>${price}</button></div>
    const catalogItems = [
        {id:'Apple', icon: <GiShinyApple />, price: 0.59, color:'green'},
        {id:'Orange', icon: <GiOrangeSlice />, price: 0.89, color:'orange'},
        {id:'Banana', icon: <GiBananaBunch />, price: 1.00, color:'yellow'},
        {id:'Strawberry', icon: <GiStrawberry />, price: 0.59, color:'red'},
        {id:'Cake', icon: <GiCakeSlice />, price: 2.00, color:'tan'},
        {id:'Coffee', icon: <GiCoffeeCup />, price: 3.50, color:'brown'}
    ]
    return (
        <div className="flex-container">
            <ul className="flex-container">
                {catalogItems.map(item => <Card key={item.id} name={item.id} icon={item.icon} price={item.price} c={item.color} add={props.handleQuickAdd}/>)}
                {/* {catalogItems.map(item => <div key={item.id} style={{color:item.color}}>{item.color}</div>)} */}
            </ul>
        </div>
    )
}