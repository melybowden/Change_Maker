import React from 'react'

export default function receipt(props) {
    return (
        <div className="receipt">
            <h1>Receipt</h1>
            <ul style={{listStyle:'none', padding:0}}>
                {props.cart.map(cart=><li key={cart[3]}>{cart[0]} ${cart[2]} each x{cart[1]}</li>)}
                {/* {console.log('cart length: '+props.cart.length+' total: '+props.total)} */}
            </ul>
            <h2 style={{textAlign:'right'}}>Total: ${props.total}</h2>
            {props.done ? <h2 style={{textAlign:'right'}}>Paid: ${props.paid}</h2> : ''}
            {props.done ? <h2 style={{textAlign:'right'}}>Change returned: ${props.paid - props.total}</h2> : ''}
            <div>{props.joke}</div>
        </div>
    )
}
