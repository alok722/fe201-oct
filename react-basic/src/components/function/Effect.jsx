import { useEffect, useState } from "react";

export const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Crio");

  useEffect(() => {
    console.log("Hey There");

    return () => {
      console.log("Cleanup: 1");
    };
  }, []); // componentDidMount

  useEffect(() => {
    console.log("Execute on every renders");

    const timer = setInterval(() => {
      console.log("Hello");
    }, 2000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup: 2");
    };
  }); // componentDidMount + componentDidUpdate

  useEffect(() => {
    // document.title = name;
    console.log("Execute only when name changes");

    return () => {
      console.log("Cleanup: 3");
    };
  }, [name]); // componentDidMount + componentDidUpdate(SPECIFIC UPDATE)

  return (
    <div>
      <p>Effect Component</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

// useEffect-> useEffect(() => {}, [])
// useEffect-> useEffect(() => {})
// componentDidMount, componentDidUpdate, componentWillUnmount
// useEffect -> If used in different combinations, it can be used as either of life cycle.
