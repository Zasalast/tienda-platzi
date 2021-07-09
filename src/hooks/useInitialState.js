import React, { useState } from 'react';
import initialState from './../initialState';

function useInitialState() {
  const [state, setState] = useState(initialState);
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
    return counter;
  };
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, { ...payload, id: addCounter() }],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    addNewOrder,
    removeFromCart,
    addToBuyer,
    state,
  };
}

export default useInitialState;
