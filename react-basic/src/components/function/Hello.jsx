// export function Hello() {
//   return <h1>Hello World</h1>;
// }

export const Hello = (props) => {
  let counter = 0;

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          counter++;
          console.log(counter);
        }}
      >
        Increment
      </button>
    </div>
  );
};
