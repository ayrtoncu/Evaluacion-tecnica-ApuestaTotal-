import React, { useReducer, useState, useEffect } from "react";
import { ShopInitialState, shoppingReducers } from "../Reducers/ShopReducer";
import { appfirebase } from "../Credenciales";
import { css } from "@emotion/css";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "../Actions/ShopActions";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducers, ShopInitialState);
  const db = getFirestore(appfirebase);
  const [lista, setLista] = useState([]);
  // const [cart,setCart]=useState([]);
  let cart=[]
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setLista(documents);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, []);

  const addToCart = (id) => {
    let newitem=[]
    lista.forEach((producto) => {
      if (producto.id === id) {
        newitem = producto;
      }
    })
    // cart.push(newitem);
    cart.push(newitem)
    console.log(cart)
  };
  console.log(lista);

  const delFromCart = () => {};
  const clearCart = () => {};

  return (
    <div>
      <h1>Prueba Tecnica React Apuesta Total</h1>
      <h2>Carrito de Compras</h2>
      <article>
        <button onClick={clearCart}>Limpiar Carrito</button>

          <CartItem data={cart} delFromCart={delFromCart} />

      </article>
      <h3>Productos</h3>
      <div className={box}>
        {lista.map((lista) => (
          <ProductItem key={lista.id} data={lista} addCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;

let box = css`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 1rem #00000025 inset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
