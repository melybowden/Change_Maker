import React from 'react'

export default function receipt(props) {
    return (
        <div>
            <h1>Receipt</h1>
            <ul style={{listStyle:'none'}}>
                {props.cart.map(cart=><li key={cart[0]}>{cart[0]} ${cart[2]}/ unit x {cart[1]} </li>)}
            </ul>
            <h2>Total: ${props.total}</h2>
            {props.done ? <h2>Paid: ${props.paid}</h2> : ''}
            {props.done ? <h2>Change returned: ${props.paid - props.total}</h2> : ''}
        </div>
    )
}
