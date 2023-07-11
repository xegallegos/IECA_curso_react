import { useEffect, useState } from "react";
import useAPI from "../hooks/useApi";
import { useParams } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";

const ProductDetail = () => {

  const { dispatch } = useCartContext();
  const { state: { cart } } = useCartContext();

  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProduct } = useAPI();

  useEffect(() => {
    getProduct(id)
      .then((products) => {
        setProducto(products);
        console.log(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {loading && <p>Cargando...</p>}
      {!loading && (

        <>
          <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl text-center p-4">
            <img
              src={producto.image}
              alt={producto.title}
              className="h-32 object-cover self-center max-w-[200px] lg:max-w-sm"
            />
            <h1 className="font-bold">{producto.title}</h1>
            <h2>${producto.price}</h2>
            <h4>{producto.description}</h4>
            {
              cart.some((item) => item.id === producto.id) ? (
                <button
                  className="bg-red-800 hover:bg-red-400 rounded-md p-2 mt-2 text-white"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: producto });
                  }}
                >
                  Eliminar
                </button>
              ) : (
                <button
                  className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: producto });
                    alert("Producto añadido al carrito");
                  }}
                >
                  Añadir al carrito
                </button>
              )

            }

          </div>

        </>
      )}
    </>
  );
};

export default ProductDetail;