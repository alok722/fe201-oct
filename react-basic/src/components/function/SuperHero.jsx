import { useState } from "react";

export const SuperHero = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span>{props.name}</span>
    </div>
  );
};
