import { useState } from "react";

export const EvenOdd = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <h2>{num % 2 === 0 ? "Even" : "Odd"}</h2>
    </div>
  );
};
