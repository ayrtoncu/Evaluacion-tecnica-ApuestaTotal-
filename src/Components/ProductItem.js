import React from 'react'

const ProductItem = ({ data, addCart }) => {
  return (
    <>
      <h4>{data.nombre} </h4>
      <h5>${data.precio}.00 </h5>
      <button onClick={()=> addCart(data.id)}>Agregar al Carrito</button>
    </>
  )
}

export default ProductItem;