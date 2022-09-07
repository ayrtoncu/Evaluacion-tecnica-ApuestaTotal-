import React,{useReducer,useState,useEffect} from 'react';
import { ShopInitialState, shoppingReducers } from '../Reducers/ShopReducer';
import { appfirebase } from "../Credenciales";
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
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducers, ShopInitialState);
  const db = getFirestore(appfirebase);
  const [lista, setLista] = useState([]);
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
  },[]);
  const { cart } = state;

  const addToCart = (id) => {
    console.log(id)
  }
  const delFromCart = () => { }
  const clearCart = () => { }

  return (
    <div>
      <h1>Prueba Tecnica React Apuesta Total</h1>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div>
        {lista.map((lista) => (
          <ProductItem key={lista.id} data={lista} addCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
