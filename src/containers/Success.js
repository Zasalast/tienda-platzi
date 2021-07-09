import React, { useContext } from 'react';
import './../styles/components/Success.sass';
import Maps from './../components/Maps/Maps';
function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name},Gracias por su compra</h2>
        <span>Su pedido llegara en 3 días a su dirección</span>
      </div>
      <div className="Success-map">
        {' '}
        <Maps />
      </div>
    </div>
  );
}

export default Success;
