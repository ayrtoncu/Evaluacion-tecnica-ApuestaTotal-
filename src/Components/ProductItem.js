import React from 'react'

const ProductItem = ({ data, addCart }) => {
  return (
    <div style={{border: "thin solid gray", padding:"1rem"}}>
      <h4>{data.nombre} </h4>
      <h5>${data.precio}.00 </h5>
      <button onClick={()=> addCart(data.id)}>Agregar al Carrito</button>
    </div>
  )
}

export default ProductItem;