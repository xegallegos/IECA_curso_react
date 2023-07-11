import { useCartContext } from "../provider/CartProvider";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();
  const {
    state: { cart }
  } = useCartContext();

  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center"
      />
      <h2 className="font-bold">{product.title}</h2>
      <span>${product.price}</span>
      {
        cart.find((item) => item.id === product.id) ? (
          <button
            className="bg-red-800 hover:bg-red-400 rounded-md p-2 mt-2 text-white"
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: product });
            }}
          >
            Eliminar
          </button>
        ) : (
          <button
            className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: product });
              //alert("Producto añadido al carrito");
            }}
          >
            Añadir al carrito
          </button>
        )
      }

      <Link to={`/product/${product.id}`}
        className="border border-slate-200 text-slate-900 hover:bg-blue-200 rounded-md p-2 mt-2 text-center"
      >
        <span>Ver detalles</span>
      </Link>
    </div>
  );
};

export default ProductItem;