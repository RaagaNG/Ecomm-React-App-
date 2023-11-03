import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const handleMakePayment = () => {
    // Implement payment logic here (if needed)
    setIsPaymentSuccessful(true);
    // Assuming purchasedItems contains the items added to the cart
    setPurchasedItems(purchasedItems);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleMakePayment}>Make Payment</button>
      {isPaymentSuccessful && (
        <div>
          <p>Purchase successful</p>
          <h3>Items Purchased:</h3>
          <ul>
            {purchasedItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <Link to="/">
            <button>Go Back to Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
