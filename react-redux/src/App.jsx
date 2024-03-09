import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Let's Understand Redux with this simple application. </h1>
      <CakeContainer />
    </>
  );
}

export default App;
