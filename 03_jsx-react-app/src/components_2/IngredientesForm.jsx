const IngredientesForm = ({ onSubmit }) => {
		const submit = (event) => {
			event.preventDefault();
			const form = event.target;
			const receta = form[0].value;
			const ingrediente = form[1].value;
			const recetaItem = { receta, ingrediente };
			onSubmit(recetaItem);
			form.reset();
		};
		
		return (
		
			<form onSubmit={submit}>
				<label class="block text-sm font-medium leading-6 text-gray-900">Elije una de las recetas para agregar sus ingredientes:</label>
				<select id="recetatual" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
				
				</select>
				<label class="block text-sm font-medium leading-6 text-gray-900">Ingrediente:</label>
				<input class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Ingrediente" />
				<button class="adp ajk ara arq avv awb bac bbi bil bot bou bow bpe" type="submit">Agregar ingrediente</button>
			</form>
	
		);
	};
	
	export default IngredientesForm;