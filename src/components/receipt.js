import React from 'react'

export default function receipt(props) {
    return (
        <div>
            <ul>
                {props.cart.map(cart=><li key={cart[0]}>{cart[0]} ${cart[2]}/ unit x {cart[1]} </li>)}
            </ul>
            <h1>
                {console.log( Array.isArray(props.cart))}
                {props.paid}
            </h1>
        </div>
    )
}
