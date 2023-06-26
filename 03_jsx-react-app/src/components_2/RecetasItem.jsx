const RecetasItem = ({ receta }) => {
    const { name, tiempo } = receta;
    return (
        <div
        className={`p-4 rounded-xl w-[150px] ${
          receta.tiempo < 50 ? "bg-yellow-500" : "bg-slate-200"
        }`}
      >
        <h2>{name}</h2>
        <p>{tiempo}</p>
      </div>
    );
  };
  
  export default RecetasItem;