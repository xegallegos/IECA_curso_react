import { useEffect, useState } from "react";
import useAPI from "../hooks/useApi";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [inputSeacrh, setinputSeacrh] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search"
          id="default-search"
          value={inputSeacrh}
          onChange={(e) => setinputSeacrh(e.target.value)}
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Filtrar producto"
        ></input>
      </div>
      <h1>FakeStore</h1>
      {loading && <p>Cargando...</p>}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {products.filter(producto => {
            if (inputSeacrh === '') {
              return producto;
            } else if (producto.title.toLowerCase().includes(inputSeacrh.toLowerCase())) {
              return producto;
            }
          }).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

      )}
    </div>
  );
};

export default Home;