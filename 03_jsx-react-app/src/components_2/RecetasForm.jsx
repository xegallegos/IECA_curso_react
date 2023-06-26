const RecetasForm = ({ onSubmit }) => {
		const submit = (event) => {
			event.preventDefault();
			const form = event.target;
			const name = form[0].value;
			const tiempo = form[1].value;
			const receta = { name, tiempo };
			onSubmit(receta);
			form.reset();
		};
		
		return (
		
			<form onSubmit={submit}>
				<label class="block text-sm font-medium leading-6 text-gray-900">Nombre de la receta:</label>
				<input class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="receta" />
				<label class="block text-sm font-medium leading-6 text-gray-900">Tiempo de preparación (min):</label>
				<input class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="tiempo" />
				<button class="adp ajk ara arq avv awb bac bbi bil bot bou bow bpe" type="submit">Agregar receta</button>
			</form>
	
		);
	};
	
	export default RecetasForm;