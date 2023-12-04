import { useState } from "react";

import { foods } from "./mock";
import "./App.css";

function App() {
  const initialStateSelected = foods.find((food) => food.id === 1).foodName;

  const [selected, setSelected] = useState(initialStateSelected);
  const [rawFoodQuantity, setRawFoodQuantity] = useState("");
  const [cookedFoodQuantity, setCookedFoodQuantity] = useState("");

  function submit(e) {
    e.preventDefault();
    calcular();
  }

  function handleSelectChange(e) {
    setSelected(e.target.value);
  }

  function calcular() {
    const selectedFood = foods.find((food) => food.foodName === selected);
    if (selectedFood) {
      const factor = selectedFood.conversionFactory;
      return setRawFoodQuantity(cookedFoodQuantity * factor);
    }
  }

  return (
    <div className="custom-container">
      <form action="" onSubmit={submit} className="">
        <h1 className="text-3xl font-bold text-slate-50 text-center m-4">
          Food Convert
        </h1>
        <select
          name="food"
          id="food"
          value={selected}
          className="rounded p-2"
          onChange={handleSelectChange}
        >
          {foods.map((food) => {
            return (
              <option key={food.id} value={food.foodName}>
                {food.foodName}
              </option>
            );
          })}
        </select>
        <div className="flex gap-1 w-full justify-between flex-col sm:flex-row">
          <input
            className="rounded p-2"
            type="text"
            name="rawFood"
            placeholder="comida cozida"
            onChange={(e) => setCookedFoodQuantity(e.target.value)}
          />
          <input
            className="rounded p-2"
            type="text"
            name="cookedFood"
            placeholder="comida crua"
            readOnly
            value={rawFoodQuantity}
          />
        </div>
        <button className="rounded p-2 text-slate-50 bg-green-600">
          Calcular
        </button>
        <p className="text-white m-4 text-center">
          Obs: Todos os valores são aproximados.
        </p>
      </form>
    </div>
  );
}

export default App;
