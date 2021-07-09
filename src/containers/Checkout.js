import React, { useContext } from 'react';
import './../styles/components/Checkout.sass';
import { Link } from 'react-router-dom';
import handleSumTotal from './../utils/handlerSum';
import AppContext from './../Context/AppContext';
function Checkout() {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  /*  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reducer(reducer, 0);
    return sum;
  }; */
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista Pedidos' : 'Sin Pedidos'}</h3>
        {cart.map((item) => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" title="Eliminar" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt fa-2x" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
