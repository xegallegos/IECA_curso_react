const ProductItem = ({ product }) => {
    const { name, description, price } = product;
    return (
        <div
        className={`p-4 rounded-xl w-[150px] ${
          product.price < 500 ? "bg-yellow-500" : "bg-slate-200"
        }`}
      >
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    );
  };
  
  export default ProductItem;