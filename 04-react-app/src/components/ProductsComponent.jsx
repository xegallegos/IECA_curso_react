import { useEffect, useState } from "react";
import useAPI from "../hooks/useApi";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const { getProducts } = useAPI();

  useEffect(() => {
    //getProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const asyncProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    asyncProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="p-4 bg-white w-24">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;