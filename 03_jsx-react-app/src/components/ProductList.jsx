import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [productCount, setProductCount] = useState(3);
  const [products, setProducts] = useState([
    {
      name: "Product 1",
      description: "Description 1",
      price: 1000,
    },
    {
      name: "Product 2",
      description: "Description 2",
      price: 250,
    },
    {
      name: "Product 3",
      description: "Description 3",
      price: 500,
    },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
    setProductCount(productCount + 1);
  };

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <>
      <h1> Mi lista de productos ({productCount} Productos)</h1>
      <ProductForm onSubmit={addProduct} />
      <ul className="flex gap-4 py-4">
        {products.map((product) => (
          <li>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;