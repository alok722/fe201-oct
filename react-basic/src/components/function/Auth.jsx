import { useState } from "react";

// export function Auth() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   let button;

//   if (isLoggedIn) {
//     button = <button>Log out</button>;
//   } else {
//     button = <button>Log in</button>;
//   }

//   const handleToggle = () => {
//     // if(isLoggedIn) {
//     //     setIsLoggedIn(false);
//     // } else {
//     //     setIsLoggedIn(true);
//     // }

//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div>
//       <button onClick={handleToggle}>Toggle</button>
//       <br />
//       {button}
//     </div>
//   );
// }

export function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <br />
      {isLoggedIn ? <button>Log out</button> : <button>Log in</button>}
    </div>
  );
}
