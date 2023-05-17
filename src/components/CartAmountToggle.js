import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      {/* Amount toggle */}
      <div className="amount-toggle">
        {/* Decrease button */}
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>

        {/* Amount display */}
        <div className="amount-style">{amount}</div>

        {/* Increase button */}
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
