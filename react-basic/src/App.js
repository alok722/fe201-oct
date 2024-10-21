import { Component, useState } from "react";
// import Counter from "./components/Counter";
import { Form } from "./components/Form";
import { ControlledForm } from "./components/ControlledForm";
import { Temp } from "./components/Temp";
import { Mount } from "./components/Mount";
import { Update } from "./components/Update";
import { Stock } from "./components/Stock";
import { Hello } from "./components/function/Hello";
import { Counter } from "./components/function/Counter";
import { CuriousCat } from "./components/function/Curious";
import { Auth } from "./components/function/Auth";
import { EvenOdd } from "./components/function/EvenOdd";
import { SuperHero } from "./components/function/SuperHero";
import { Effect } from "./components/function/Effect";
import { UserEmail } from "./components/function/UserEmail";

const superHeroes = [
  { id: "jdkdjk1", name: "Iron Man" },
  { id: "b3dkdj2", name: "Black Widow" },
  { id: "uniqIda", name: "Shaktimaan" },
  { id: "anOtuniqId", name: "Goku" },
  { id: "a2jdkjd", name: "Winter Soldier" },
];

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      userId: 1,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        {/* <p>This is a basic React application.</p> */}
        {/* <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Toggle Flag
        </button> */}
        {/* <Counter name="Basic Counter" initialCount={0} diff={1} /> */}
        {/* <Counter name="Advance Counter" initialCount={0} diff={5} /> */}
        {/* <Form /> */}
        {/* {this.state.flag && <ControlledForm />} */}
        {/* <Temp /> */}
        {/* <Mount /> */}
        {/* <input
          type="number"
          value={this.state.userId}
          onChange={(e) => {
            this.setState({ userId: e.target.value });
          }}
        /> */}
        {/* <p>{this.state.userId}</p> */}
        {/* <Update userId={this.state.userId} /> */}
        {/* {this.state.flag && <Stock />} */}
        {/* <Hello name="Crio" /> */}
        {/* <Counter /> */}
        {/* <CuriousCat /> */}
        {/* <Auth /> */}
        {/* <EvenOdd /> */}
        {/* {[
          <div>
            <SuperHero name={superHeroes[0].name} />
            <SuperHero name={superHeroes[1].name} />
            <SuperHero name={superHeroes[2].name} />
          </div>,
        ]} */}
        {/* {superHeroes.forEach((hero) => (
          <SuperHero name={hero.name} />
        ))} */}
        {superHeroes.map((hero, index) => (
          <SuperHero key={index} name={hero.name} />
        ))}
      </div>
    );
  }
}

function App() {
  const [superHeroData, setSuperHeroData] = useState(superHeroes);
  const [flag, setFlag] = useState(true);
  const [userId, setUserId] = useState(1);

  const shuffleHeroData = () => {
    const shuffledData = [...superHeroData].sort(() => Math.random() - 0.5);
    setSuperHeroData(shuffledData);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      {/* <button onClick={shuffleHeroData}>Shuffle SuperHero</button> */}
      {/* {superHeroData.map((hero) => (
        <SuperHero key={hero.id} name={hero.name} />
      ))} */}
      {/* <button onClick={() => setFlag(!flag)}>Toggle Component</button> */}
      {/* {flag && <Effect />} */}
      <input
        type="number"
        name="userId"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <UserEmail userId={userId} />
    </div>
  );
}

export default App;

// 1. Named Export/Import
// There can be multiple named export
// In order to import a named export, we need the specific name

// 2. Default Export/Import
// Every module can have one single default export
// For default import, we dont need {}
// For default import,you dont need specific name
