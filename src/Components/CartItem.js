import React from 'react'

const CartItem = ({data}) => {
  console.log(data);
  return (
    <div>
      {data.map((lista) => (
              <div style={{border: "thin solid gray", padding:"1rem"}}>
              <h4>{lista.nombre} </h4>
          <h5>${lista.precio}.00 </h5>
          </div>
      ))}
    </div>
  )
}

export default CartItem