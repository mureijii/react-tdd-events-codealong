import React, { useState } from "react";

function App() {
  const [toppings, setToppings] = useState(["Cheese"]);
  const [pepperoniSelected, setPepperoniSelected] = useState(false);

  function handlePepperoniChange() {
    if (pepperoniSelected) {
      setToppings((prevToppings) =>
        prevToppings.filter((topping) => topping !== "Pepperoni")
      );
    } else {
      setToppings((prevToppings) => [...prevToppings, "Pepperoni"]);
    }
    setPepperoniSelected((prev) => !prev);
  }

  return (
    <div>
      <h1>Pizza Toppings</h1>
      <label>
        <input
          type="checkbox"
          name="pepperoni"
          checked={pepperoniSelected}
          onChange={handlePepperoniChange}
        />
        Add Pepperoni
      </label>
      <ul>
        {toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
