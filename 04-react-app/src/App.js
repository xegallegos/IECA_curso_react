import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import logo from "./logo.svg";
import SecondPage from "./components/SecondPage";
import RefComponent from "./components/RefComponent";
import ControlledComponent from "./components/ControlledComponent";
import CounterComponent from "./components/CounterComponent";
import TodoList from "./components/TodoList";
import ReducerComponent from "./components/ReducerComponent";
import ProductsComponent from "./components/ProductsComponent";

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center">
        <img src={logo} className="w-96" alt="logo" />
        <h1 className="text-4xl font-bold">Desarrollo web con React - IECA</h1>
        <div className="flex gap-4 py-4">
          <Link to="/hola-mundo" className="font-bold text-2xl text-blue-700">
            Hola Mundo
          </Link>
          <Link to="/otra-pagina" className="font-bold text-2xl text-blue-700">
            Otra página
          </Link>
          <Link to="/ref" className="font-bold text-2xl text-blue-700">
            useRef
          </Link>
          <Link
            to="/componente-controlado"
            className="font-bold text-2xl text-blue-700"
          >
            Componente controlado
          </Link>
          <Link to="/contador" className="font-bold text-2xl text-blue-700">
            Contador
          </Link>
          <Link to="/todo" className="font-bold text-2xl text-blue-700">
            Lista Todo
          </Link>
          <Link to="/reduce" className="font-bold text-2xl text-blue-700">
            Reducer
          </Link>
          <Link to="/productos" className="font-bold text-2xl text-blue-700">
            Productos
          </Link>
        </div>
        <Routes>
          <Route path="/hola-mundo" exact element={<HelloWorld />} />
          <Route path="/otra-pagina" exact element={<SecondPage />} />
          <Route path="/ref" exact element={<RefComponent />} />
          <Route
            path="/componente-controlado"
            exact
            element={<ControlledComponent />}
          />
          <Route path="/contador" exact element={<CounterComponent />} />
          <Route path="/todo" exact element={<TodoList />} />
          <Route path="/reduce" exact element={<ReducerComponent />} />
          <Route path="/productos" exact element={<ProductsComponent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;