import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingPage = () => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (item) => {
      setCart([...cart, item]);
    };
  const [services] = useState([
    {
      id: 1,
      name: 'Amazon S3',
      description: 'Object storage built to store and retrieve any amount of data.',
      imageURL: 's3.jpg',
    },
    {
      id: 2,
      name: 'Amazon EC2',
      description: 'Virtual servers in the cloud to run applications.',
      imageURL: 'ec2.jpg',
    },
    {
      id: 3,
      name: 'AWS Lambda',
      description: 'Run code without thinking about servers.',
      imageURL: 'lambda.jpg',
    },
    // Add more services as needed
  ]);
  return (
    <div>
        <div className="cart-icon">
            &#128722; {/* Unicode character for a shopping cart */}
            <span className="cart-count">{cart.length}</span>
        </div>
        <h2>AWS Services</h2>
        <div className="service-list">
            {services.map((service) => (
                <div key={service.id}>
                    <img src={require(`./images/${service.imageURL}`).default} alt={service.name} />
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <button onClick={() => addToCart(service)}>Add to Cart</button>
                </div>
            ))}
        </div>
        <Link to="/checkout">
            <button>Go to Checkout</button>
        </Link>
    </div>
);
};

export default ShoppingPage;