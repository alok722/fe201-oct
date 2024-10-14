import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Crio");

  const [address, setAddress] = useState({
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  });

  const handleIncrement = () => {
    setCount((prev) => {
      if (prev === 4) {
        return prev + 10;
      }

      return prev + 1;
    });
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddressUpdate = () => {
    // city: Patna, State: Bihar
    setAddress((prev) => {
      return {
        ...prev,
        city: "Patna",
        state: "Bihar",
      };
    });
  };

  return (
    <div>
      <p>Address: {JSON.stringify(address)}</p>
      <button onClick={handleAddressUpdate}>Travel to Native</button>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName("FE201");
        }}
      >
        Update Name
      </button>
      <h1>Counter Component (Fn)</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
