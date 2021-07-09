import React, { useContext } from 'react';
import './../../styles/components/Header.sass';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/" title="Home">
          PlatziConf Merch
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/Checkout" title="Carrito">
          <i className="fas fa-shopping-basket fa-2x" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;
