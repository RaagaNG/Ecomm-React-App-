const ServiceCard = ({ service, addToCart }) => {
  const { name, image } = service;

  return (
    <div className="service-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};
