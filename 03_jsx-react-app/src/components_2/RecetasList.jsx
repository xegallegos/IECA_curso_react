import { useEffect, useState } from "react";
import RecetasForm from "./RecetasForm";
import RecetasItem from "./RecetasItem";

let arrayRecetas = localStorage.getItem('recetas')? JSON.parse( localStorage.getItem('recetas')):[];			
let recetaIngredientes = localStorage.getItem('lista')? JSON.parse( localStorage.getItem('lista') ):{};

let listaAux = JSON.parse( recetaIngredientes );
				for(let i in listaAux) {
					let aux = listaAux[i];
						const ul = React.createElement('div', null, [
							i,
							React.createElement("ul", null, aux.map((item, i) => {
								return React.createElement("li", { key: i }, item)
							}))
						]);
						
						uls.push(ul);
					}
const RecetasList = () => {
  const [RecetasCount, setRecetaCount] = useState(arrayRecetas.length);
  const [recetas, setRecetas] = useState(arrayRecetas);

  const [IngredientesCount, setIngredienteCount] = useState(0);
  const [ingredientes, setIngredientes] = useState([]);

  const addReceta = (receta) => {
    arrayRecetas = [...arrayRecetas, receta];
    localStorage.setItem('recetas', JSON.stringify(arrayRecetas));
    setRecetas(arrayRecetas);
    setRecetaCount(RecetasCount + 1);
  };

  const addIngrediente = () => {
      let r = document.getElementById('recetaactual');
      let i = document.getElementById('ingrediente');

      if( recetaIngredientes[r.value] === undefined )
        recetaIngredientes[r.value] = [];
      
      recetaIngredientes[r.value].push(i.value);
      localStorage.setItem('lista', JSON.stringify(recetaIngredientes));
      i.value = '';
    
    setIngredientes(recetaIngredientes);
    setIngredienteCount(IngredientesCount + 1);
  };

  useEffect(() => {
    setRecetaCount(recetas.length);
  }, [recetas]);

  const listItems = numbers.map((number) =>
      <li key={number.toString()}>      {number}
      </li>
  );
  const listaR = (arrayRecetas, recetaIngredientes) => {
    
      const recetasI = props.numbers;
      

      return (
        <ul>{listItems}</ul>
      );
    
  }

  return (
    <>
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      
    <h1> Lista de Recetas ({RecetasCount} Recetas)</h1>
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <RecetasForm onSubmit={addReceta} />
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
        <h1> Agregar Ingredientes Recetas ({IngredientesCount} Ingredientes)</h1>
        <div class="sm:col-span-3">
        <form>
          <label class="block text-sm font-medium leading-6 text-gray-900">Elije una de las recetas para agregar sus ingredientes:</label>
          <select id="recetaactual" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          {
          recetas.map((receta) => (
          <option value={receta.name} key={receta.name} >{receta.name + receta.tiempo}</option>
          ))
          }
          </select>
          <label class="block text-sm font-medium leading-6 text-gray-900">Ingrediente:</label>
          <input id="ingrediente" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Ingrediente" />
          <button class="adp ajk ara arq avv awb bac bbi bil bot bou bow bpe" type="button" onClick={addIngrediente}>Agregar ingrediente</button>
        </form>
        </div>
      </div>
      
      
        
        {
        recetas.map(({key, value}) => (
        <div>
          <ul className="flex gap-4 py-4">
            {key}
            (
              cd ieca.map(({i, j}) => (

              ))
          
          </ul>
        </div>
        ))}
    </>
  );
};

export default RecetasList;