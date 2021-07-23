import React from 'react'

function currency(N){N=parseFloat(N);if(!isNaN(N))N=N.toFixed(2);else N='0.00';return N;}

export default function receipt(props) {
    return (
        <div className="receipt">
            <h1>Receipt</h1>
            <ul style={{listStyle:'none', padding:0}}>
                {props.cart.map(cart=>
                    <li key={cart[3]}>{cart[0]} ${currency(cart[2])} each x{cart[1]}<br/>(${currency(cart[3])})</li>)}
                {/* {console.log('cart length: '+props.cart.length+' total: '+props.total)} */}
            </ul>
            <h2 style={{textAlign:'right'}}>Total: ${currency(props.total)}</h2>
            {props.done ? <h2 style={{textAlign:'right'}}>Paid: ${currency(props.paid)}</h2> : ''}
            {props.done ? <h2 style={{textAlign:'right'}}>Change returned: ${currency(props.paid - props.total)}</h2> : ''}
            <div>{props.joke}</div>
        </div>
    )
}
